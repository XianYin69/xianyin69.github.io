/* 太阳计划 · 入口门逻辑：公开页不含任何正文，正文只在「访问者自己的 GitHub 身份」验证通过后按需取回 */
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var st = $("status"), locked = $("locked"), tokenbox = $("tokenbox"), manual = $("manual"),
      viewer = $("viewer"), who = $("who"), bar = $("unlockedbar"),
      btnOAuth = $("btn-oauth"), btnPages = $("btn-pages"), btnToken = $("btn-token-go"),
      btnManual = $("btn-manual"), btnLock = $("btn-lock"), input = $("token-input");
  var SKEY = "sunplan.token", cfg = null;

  function say(msg, isErr) { st.textContent = msg; st.className = isErr ? "err" : ""; }

  function api(path) { return "https://api.github.com/" + path; }
  function gh(url, token) {
    return fetch(url, { headers: { Authorization: "Bearer " + token, Accept: "application/vnd.github+json" } });
  }
  function show(el, on) { el.style.display = on ? "" : "none"; }

  function resetToLocked() {
    show(locked, true); show(bar, false); show(manual, true);
    viewer.srcdoc = ""; show(viewer, false); who.textContent = "";
  }

  function grabFragmentToken() {
    var h = location.hash.replace(/^#/, ""); if (!h) return null;
    var p = {}; h.split("&").forEach(function (kv) { var i = kv.indexOf("="); if (i > 0) p[decodeURIComponent(kv.slice(0, i))] = decodeURIComponent(kv.slice(i + 1)); });
    // 清掉地址栏里的 token，避免留在历史与可见 URL 中
    if (history.replaceState) history.replaceState(null, "", location.pathname + location.search);
    return p.access_token || null;
  }

  function render(html, login) {
    viewer.srcdoc = html; show(viewer, true);
    show(locked, false); show(tokenbox, false); show(manual, false); show(bar, true);
    who.textContent = "已作为 @" + login + " 解锁 · 正文取自 PRIVATE 仓库 " + cfg.owner + "/" + cfg.repo;
    say("正文已载入。", false);
  }

  function unlock(token, remember) {
    say("正在验证 GitHub 身份…");
    gh(api("user"), token).then(function (r) {
      if (r.status === 401) { throw new Error("TOKEN_BAD"); }
      if (!r.ok) { throw new Error("HTTP_" + r.status); }
      return r.json().then(function (u) { return u.login; });
    }).then(function (login) {
      var url = api("repos/" + cfg.owner + "/" + cfg.repo + "/contents/" + cfg.entry + "?ref=" + cfg.ref);
      return fetch(url, { headers: { Authorization: "Bearer " + token, Accept: "application/vnd.github.raw+json" } })
        .then(function (r) { return { r: r, login: login }; });
    }).then(function (res) {
      if (res.r.status === 404) { throw new Error("NO_ACCESS"); }
      if (res.r.status === 403) { throw new Error("FORBIDDEN"); }
      if (!res.r.ok) { throw new Error("HTTP_" + res.r.status); }
      return res.r.text().then(function (html) { return { html: html, login: res.login }; });
    }).then(function (d) {
      if (remember) { try { sessionStorage.setItem(SKEY, token); } catch (e) {} }
      render(d.html, d.login);
    }).catch(function (e) {
      try { sessionStorage.removeItem(SKEY); } catch (x) {}
      show(viewer, false); viewer.srcdoc = "";
      var m = { TOKEN_BAD: "Token 无效或已过期，请重新获取。", NO_ACCESS: "验证通过，但你的账号不在 " + cfg.owner + "/" + cfg.repo + " 的读取名单内——正文对你不可见。", FORBIDDEN: "被 GitHub 拒绝（权限不足或触发速率限制）。" };
      say(m[e.message] || ("解锁失败：" + e.message), true);
    });
  }

  function oauthURL() {
    var u = "https://github.com/login/oauth/authorize"
      + "?client_id=" + encodeURIComponent(cfg.clientId)
      + "&response_type=token"
      + "&scope=" + encodeURIComponent(cfg.scope || "")
      + "&state=sunplan"
      + "&redirect_uri=" + encodeURIComponent(location.origin + location.pathname);
    return u;
  }

  function boot() {
    var frag = grabFragmentToken();
    var saved = null; try { saved = sessionStorage.getItem(SKEY); } catch (e) {}
    var token = frag || saved;

    if (cfg.pagesUrl) { btnPages.style.display = ""; btnPages.onclick = function () { window.open(cfg.pagesUrl, "_blank", "noopener"); }; }
    if (cfg.clientId) { btnOAuth.disabled = false; btnOAuth.textContent = "使用 GitHub 登录解锁"; }
    else { btnOAuth.disabled = true; btnOAuth.textContent = "登录解锁（待配置 OAuth App）"; }
    btnOAuth.onclick = function () { location.assign(oauthURL()); };
    btnManual.onclick = function () { var on = tokenbox.style.display === "none"; show(tokenbox, on); if (on) input.focus(); };
    btnToken.onclick = function () { var t = (input.value || "").trim(); if (!t) { say("请先粘贴 Token。", true); return; } unlock(t, true); input.value = ""; };
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") btnToken.click(); });
    btnLock.onclick = function () { try { sessionStorage.removeItem(SKEY); } catch (e) {} resetToLocked(); say("已退出查看。正文需重新验证。"); };

    if (token) { unlock(token, !!frag); }
    else {
      say(cfg.clientId || cfg.pagesUrl ? "本页为公开入口：正文位于私有仓库，需 GitHub 登录后按权限解锁。"
        : "本页为公开入口：正文位于私有仓库。管理员尚未配置 GitHub 登录，可先用粘贴 Token 方式验证。");
    }
  }

  fetch("config.json", { cache: "no-store" })
    .then(function (r) { if (!r.ok) { throw new Error("CONFIG_" + r.status); } return r.json(); })
    .then(function (c) {
      cfg = { owner: c.owner, repo: c.repo, entry: c.entry || "page/index.html", ref: c.ref || "HEAD",
              clientId: c.clientId || "", scope: c.scope || "", pagesUrl: c.pagesUrl || "" };
      boot();
    })
    .catch(function (e) { say("入口配置不可用（" + e.message + "）：请检查同目录 config.json。", true); btnOAuth.disabled = true; });
})();

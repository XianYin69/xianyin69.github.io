// ==========================================
// 前端用户中心状态与请求控制 (user.js)
// ==========================================

// 替换为你的 Worker 真实绑定的域名（注意：去掉了末尾多余的斜杠）
const WORKER_URL = "https://api-repo-users.ethanyan69.workers.dev";

/**
 * 0. 自动解析并保存 URL 中的 Token
 * 作用：页面初始化加载时，检查 GitHub 回调成功后 URL 里是否带有 token 传参。
 * 如果有，存入本地 LocalStorage 并干净地抹除 URL 尾巴。
 */
function checkAndStoreToken() {
    if (typeof window === "undefined") return;
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
        localStorage.setItem("blog_auth_token", token);
        // 清洗 URL 参数，移除 token 字符串防止刷新时重复解析
        const cleanUrl = window.location.pathname + window.location.search.replace(/[?&]token=[^&]+/, '').replace(/^&/, '?');
        window.history.replaceState({}, document.title, cleanUrl);
    }
}
// 立即执行检测
checkAndStoreToken();

/**
 * 1. 发起 GitHub 登录
 * 作用：记录当前页面路径，并跳转到后端 Worker 触发 OAuth 流程
 */
export function login() {
    const currentPath = window.location.pathname + window.location.search;
    window.location.href = `${WORKER_URL}/api/auth/login?redirect=${encodeURIComponent(currentPath)}`;
}

/**
 * 2. 获取当前登录的用户信息
 * 作用：从 LocalStorage 读取 Token，放入 Authorization 请求头中传给 Worker
 * @returns {Promise<{id: number, name: string, avatar: string}|null>}
 */
export async function fetchCurrentUser() {
    const token = localStorage.getItem("blog_auth_token");
    if (!token) return null;

    try {
        const response = await fetch(`${WORKER_URL}/api/auth/me`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}` // 改用标准 Bearer Token 头传输
            }
        });

        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error("获取用户信息失败:", error);
    }
    return null;
}

/**
 * 3. 退出登录
 * 作用：清除前端 LocalStorage 缓存，并通知后端注销
 */
export async function logout() {
    const token = localStorage.getItem("blog_auth_token");
    try {
        await fetch(`${WORKER_URL}/api/auth/logout`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error("注销失败:", error);
    } finally {
        // 无论后端注销请求是否成功，本地都强制清除凭证并刷新页面
        localStorage.removeItem("blog_auth_token");
        window.location.reload();
    }
}
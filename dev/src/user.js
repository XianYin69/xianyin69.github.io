// ==========================================
// 前端用户中心状态与请求控制 (user.js)
// ==========================================

// 替换为你的 Worker 真实绑定的域名（注意不要以斜杠结尾）
const WORKER_URL = "https://api-repo-users.ethanyan69.workers.dev/";

/**
 * 1. 发起 GitHub 登录
 * 作用：记录当前页面路径，并跳转到后端 Worker 触发 OAuth 流程
 */
export function login() {
    const currentPath = window.location.pathname + window.location.search;
    window.location.href = `${WORKER_URL}api/auth/login?redirect=${encodeURIComponent(currentPath)}`;
}

/**
 * 2. 获取当前登录的用户信息
 * 作用：让浏览器带上 HttpOnly Cookie 去向 Worker 换取用户头像和昵称
 * @returns {Promise<{id: number, name: string, avatar: string}|null>}
 */
export async function fetchCurrentUser() {
    try {
        const response = await fetch(`${WORKER_URL}/api/auth/me`, {
            method: "GET",
            credentials: "include" // 关键：允许跨域请求携带 Cookie 凭证
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
 * 作用：通知后端清除 Cookie，并刷新当前页面
 */
export async function logout() {
    try {
        await fetch(`${WORKER_URL}/api/auth/logout`, {
            method: "POST",
            credentials: "include"
        });
        window.location.reload();
    } catch (error) {
        console.error("注销失败:", error);
    }
}
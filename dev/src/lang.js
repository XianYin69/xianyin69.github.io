// lang.js

import { ref, computed } from 'vue'
// 1. 静态导入所有翻译数据 (lang.json)
import translations from '@/assets/lang.json'
// 注意：请确保 '@assets/lang.json' 路径正确

// ----------------------------------------------------
// 辅助函数：确定应用的初始语言
// ----------------------------------------------------

function getInitialLanguage() {
    let initialLang = null;
    const defaultFallback = 'en'; // 假设 zh-cn 是您 lang.json 中存在的键

    // 优先级 1: 检查本地存储 (用户偏好)
    const savedLang = localStorage.getItem('user-language')
    if (savedLang && translations[savedLang]) {
        initialLang = savedLang
    }

    // 优先级 2: 检查浏览器的系统/首选语言 (使用 navigator.language 采集动态信息)
    if (!initialLang) {
        const browserLang = (navigator.language || 'en').toLowerCase()

        // 尝试匹配完整键 (如 'zh-cn')
        if (translations[browserLang]) {
            initialLang = browserLang
        }

        // 尝试匹配语言前缀 (如 'zh-CN' 匹配 'zh')
        const langPrefix = browserLang.split('-')[0]
        if (!initialLang && translations[langPrefix]) {
            initialLang = langPrefix
        }
    }

    // 优先级 3: 回退到默认语言
    return initialLang || defaultFallback
}

// ----------------------------------------------------
// 核心状态和导出
// ----------------------------------------------------

// 2. 初始化 currentLang
const currentLang = ref(getInitialLanguage())
const allTranslations = translations


/**
 * 设置新的应用语言，并保存到本地存储
 * @param {string} langId - 要设置的语言键
 */
export function setLang(langId) {
    const defaultFallback = 'en';

    if (allTranslations[langId]) {
        currentLang.value = langId
        // 保存用户选择，实现持久化
        localStorage.setItem('user-language', langId)
    } else {
        console.error(`尝试设置的语言键 '${langId}' 不存在，回退到 ${defaultFallback}。`)
        currentLang.value = defaultFallback
        localStorage.setItem('user-language', langId)
    }
}


/**
 * Vue 组合式函数：提供响应式的翻译和语言状态
 */
export function useLang() {

    const t_computed = computed(() => {
        // 确保获取当前语言的文本对象
        const currentText = allTranslations[currentLang.value] || allTranslations['en']

        // 返回翻译查找函数
        return (keyPath) => {
            const keys = keyPath.split('.')
            let text = currentText

            for (const key of keys) {
                // 确保键存在且值不是 undefined
                if (text && text[key] !== undefined) {
                    text = text[key]
                } else {
                    // 路径查找失败，返回错误提示
                    return `[MISSING: ${keyPath}]`
                }
            }
            // 返回最终文本、数组或对象 (如 t('projects'))
            return text
        }
    })
    const t = (keyPath) => t_computed.value(keyPath) //中转
    return {
        // t_computed 是一个函数，可以在组件模板中直接调用 t('key')
        t: t,
        currentLang // 响应式语言状态，用于显示当前语言或手动切换
    }
}
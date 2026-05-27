import MarkdownIt from 'markdown-it';
import Blog from "@/views/blog.vue";

const md = new MarkdownIt({
    html: true,
    break: true,
    linkify: true,
});

export function parseMarkdownIt(rawMarkdown) {
    if(!rawMarkdown) return '';
    return md.render(rawMarkdown);
}

const BlogContext = {}
export const showComments = {
    on(isBlogContext, callback) {
        if(!BlogContext[isBlogContext]) {
            BlogContext[isBlogContext] = [];
        }
        BlogContext[isBlogContext].push(callback);
    },
    off(isBlogContext, callback) {
        if(!BlogContext[isBlogContext]) return;
         BlogContext[isBlogContext] = BlogContext[isBlogContext].filter(cb => cb !== callback);
    },
    emit(isBlogContext, data) {
        if(!BlogContext[isBlogContext]) return;
        return BlogContext[isBlogContext].forEach(callback => callback(data))
    }
}
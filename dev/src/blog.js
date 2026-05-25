import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
    html: true,
    break: true,
    linkify: true,
});

export function parseMarkdownIt(rawMarkdown) {
    if(!rawMarkdown) return '';
    return md.render(rawMarkdown);
}
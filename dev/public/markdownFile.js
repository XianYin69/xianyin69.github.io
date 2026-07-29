import {marked} from "marked";
marked.use({
    async: true,
    pedatic: false,
    gfm: true,
    mangle: false,
    headerIds: false
})


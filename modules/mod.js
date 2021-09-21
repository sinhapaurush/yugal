function hover(id, act){
    document.getElementById(id).addEventListener("mouseover", act)
}
function clicked(id, act){
    document.getElementById(id).addEventListener("click", act);
}
function delete_cookie(cookiename) {
    document.cookie = cookiename + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    if (document.cookie[cookiename]) {
        return true;
    } else {
        return false;
    }
}
function open(dest) {
    window.location = dest;
}

function error(msg) {
    console.error(msg);
}
function log(msg) {
    console.log(msg);
}
function warn(msg) {
    console.warn(msg);
}

function open(dest){
    window.location=dest;
}
function reload(){
    window.location = "";
}

function save_local(tag, val){
    localStorage.setItem(tag, val);
}
function del_local(tag){
    localStorage.removeItem(tag);
}
function save_cookie(tag, val){
    document.cookie = tag + "="+val+"; expires=; path=/";
}
const yugal = {
    body: {
        set: (html) => {
            document.getElementsByTagName("yugal-root")[0].innerHTML = html;
        },
        get: () => (document.getElementsByTagName("yugal-root")[0].innerHTML)
    },
    send: (what) => {
        document.getElementsByTagName("title")[0].innerHTML = what.title;
        document.getElementsByTagName("yugal-root")[0].innerHTML = what.body;
        let headTag = document.getElementsByTagName("head")[0].innerHTML;
        headTag = headTag.split("<!--PAGE SPECIFIC <head> CODE BELOW-->");
        document.getElementsByTagName("head")[0].innerHTML = `${headTag[0]}<!--PAGE SPECIFIC <head> CODE BELOW-->${what.head}`;
        document.getElementsByTagName("meta").title.content = what.title;
        history.pushState({page: 1}, what.title, what.pageName)
    }
};
const comp = (title, head, body, url) => {
    return {
        title: title,
        head: head, 
        body: body,
        pageName: url
    };
}
const gts = (stru) => {
    yugal.send(stru);
}
const _ = (tag) => {
    let comp = document.querySelector(tag);
    return {
        html: (html) => html ==undefined ? comp.innerHTML : comp.innerHTML = html,
        attr: (attr, prop) => prop == undefined ? comp.getAttribute(attr) : comp.setAttribute(attr, prop),
        val: (val) => val == undefined ? comp.getAttribute("value") : comp.setAttribute("value", val),
        del: () => comp.remove(),
        hint: (hint) => hint == undefined ? comp.getAttribute("placeholder") : comp.setAttribute("placeholder", hint),
        css: (css) => css == undefined ? comp.getAttribute("style") : comp.setAttribute("style", css),
        addCss: (css) => {
            count = comp.getAttribute("style").length;
            if (comp.getAttribute("style")[count-1] === ";") {
                comp.setAttribute("style", `${comp.getAttribute("style")}${css}`)
            } else {
                comp.setAttribute("style", `${comp.getAttribute("style")};${css}`)
            }
        }
    }
} 
function onRender(dothis){
    setTimeout(dothis, 10);
}
const Router = ({initial, error404, screens}) => {
    function dothis(){
        let init = initial == undefined ? screens[0].page : initial;
        const uri = window.location.href;
        let req = uri.split("/");
        req = req[req.length - 1];
        if (req === ""){
            yugal.send(init());
        }else{
            const svar = screens.find(
                (scrn)=>{
                    return scrn.name === req
                }
            );
            if (svar == undefined){
                if (error404 == undefined){
                    yugal.send(
                        comp(
                            `ERROR 404`,
                            ``,
                            `
                                ERROR FINDING THE PAGE
                            `
                        )
                    );
                }else{
                    yugal.send(error404());
                }
            }else{
                yugal.send(svar.page());
            }
        }
    }
    dothis();
    window.onpopstate = function(event) {
        dothis(); 
    }
}
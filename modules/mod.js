function getbyid(id){
    return document.getElementById(id);
}
function getbytag(id){
    return document.getElementsByTagName(id);
}
function getbyclass(id){
    return document.getElementsByClassName(id);
}
function getbyquery(id){
    return document.querySelector(id);
}
function hover(id, act){
    document.getElementById(id).addEventListener("mouseover", act)
}
function clicked(id, act){
    document.getElementById(id).addEventListener("click", act);
}
function title(string){
    if (string === undefined){
        return document.getElementsByTagName("title")[0].innerHTML;
    }else{
        document.getElementsByTagName("title")[0].innerHTML = string;
    }
}
function delete_cookie(cookiename) {
    document.cookie = cookiename + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    if (document.cookie[cookiename]) {
        return true;
    } else {
        return false;
    }
}
function widget(id){
    return document.getElementById(id);
}
function select(id){
    return document.getElementById(id);
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
        document.getElementsByTagName("yugal-screen-head")[0].innerHTML = what.head;
        window.history.pushState({"html":what.body,"pageTitle":what.title},"", what.title.replace(/[^\w\s]/gi, '-').replace(" ", "-").toLowerCase());
    }
};
const screen = (title, head, body) => {
    return {
        title: title,
        head: head, 
        body: body
    };
}
const gts = (stru) => {
    yugal.send(stru);
}

let str =""
let envelope ="gojo"
document.addEventListener("keypress", (e) => {
    str += e.key;
    if(str ===envelope){
        window.location="./secret.html"
    }
})


setInterval(() => {
    str=""
}, 10000);
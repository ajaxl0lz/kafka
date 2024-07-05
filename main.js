let str =""
let envelope ="gojo"
document.addEventListener("keypress", (e) => {
    str += e.key;
    if(str ===envelope){
        window.location="https://ajaxl0lz.github.io/kafka/secret.html"
    }
})


setInterval(() => {
    str=""
}, 10000);

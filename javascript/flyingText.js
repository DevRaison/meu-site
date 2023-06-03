let getText = document.querySelectorAll(".text-animation");

for(let t =0; t < getText.length; t++){
    getText[t].innerHTML =  getText[t].textContent.replace(/\S/g, "<span>$&</span>");
}
let spans = document.querySelectorAll(".text-animation span");
for(let i =0; i <spans.length; i++){
    let left = innerWidth * Math.random();
    let top = innerHeight * Math.random();
    if(Math.random() < 0.5){
        spans[i].style.left = "-" + left + "px";
    }else{
        spans[i].style.left = left + "px";
    }
    if(Math.random() < 0.5){
        spans[i].style.top = "-" + top + "px";
    }else{
        spans[i].style.top = top + "px";
    }
}
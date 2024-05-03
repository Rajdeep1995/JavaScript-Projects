var a=document.querySelector(".img")
var b=document.querySelector("button")

var c=`<img src="s2.png">`
var d=`<img src="s1.png">`
var check=0;

b.addEventListener("click",function(){
    if(check==0){
        a.innerHTML=c
    check=1
    }
    else{
        a.innerHTML=d
        check=0
    }
})
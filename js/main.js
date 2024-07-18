let up=document.querySelector(".ups");


window.onscroll=()=>{
    if (window.scrollY<740){
        up.style.display="none";
    }
    else{
        up.style.display="flex";
    }
}



let data=document.querySelector(".data");
let date=new Date();
data.innerHTML=date.getFullYear();

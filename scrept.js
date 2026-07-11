let t=document.querySelector("#t");
let p=document.querySelector("p");
let btn=document.getElementById("btn");
btn.addEventListener("click",ali);
 let g=Math.floor(Math.random()*100);
function ali(){
    let a=Number(t.value);
  if(g==a){
    p.innerText="Correct you won";
    p.style.backgroundColor="green";
  }
  else if(a<g){
    p.innerText="Too low";
     p.style.backgroundColor="rbg(221, 125, 8)";
  }
  else{
    p.innerText="Too high";
     p.style.backgroundColor="blue";
  }   
}

  
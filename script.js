document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.getElementById("menuBtn"),links=document.getElementById("navLinks"),back=document.getElementById("menuBackdrop");
  const close=()=>{links.classList.remove("active");back.classList.remove("active");btn.setAttribute("aria-expanded","false")};
  btn?.addEventListener("click",()=>{const open=links.classList.toggle("active");back.classList.toggle("active",open);btn.setAttribute("aria-expanded",open)});
  back?.addEventListener("click",close);
  links?.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));

  document.getElementById("installToggle")?.addEventListener("click",()=>{
    const guide=document.getElementById("installGuide");
    const open=guide.style.display==="block";
    guide.style.display=open?"none":"block";
    document.querySelector("#installToggle span").textContent=open?"View install guide":"Hide install guide";
  });

  document.querySelectorAll(".faq-q").forEach(q=>{
    q.addEventListener("click",()=>{
      const a=q.nextElementSibling;
      const open=a.style.display==="block";
      document.querySelectorAll(".faq-a").forEach(x=>x.style.display="none");
      document.querySelectorAll(".faq-q b").forEach(x=>x.textContent="+");
      if(!open){a.style.display="block";q.querySelector("b").textContent="−"}
    });
  });
});
if(typeof particlesJS!=="undefined"){
  particlesJS("particles-bg",{particles:{number:{value:55,density:{enable:true,value_area:900}},color:{value:"#176cff"},shape:{type:"circle"},opacity:{value:.35},size:{value:2.3},line_linked:{enable:true,distance:150,color:"#176cff",opacity:.2,width:1},move:{enable:true,speed:.65}},interactivity:{events:{onhover:{enable:true,mode:"grab"}}}});
}

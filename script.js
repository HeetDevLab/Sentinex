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


/* ===== HeetDevLab UNIVERSAL NAV SCRIPT ===== */
(function(){
  function initHeetNav(){
    const hamburger=document.getElementById('hamburger');
    const navLinks=document.getElementById('navLinks');
    const overlay=document.getElementById('navOverlay');
    if(!hamburger||!navLinks) return;
    if(hamburger.dataset.navReady==='1') return;
    hamburger.dataset.navReady='1';
    function setOpen(open){
      hamburger.classList.toggle('active',open);
      navLinks.classList.toggle('active',open);
      if(overlay) overlay.classList.toggle('active',open);
      document.body.classList.toggle('nav-open',open);
      hamburger.setAttribute('aria-expanded',String(open));
      hamburger.setAttribute('aria-label',open?'Close menu':'Open menu');
    }
    hamburger.setAttribute('role','button');
    hamburger.setAttribute('tabindex','0');
    hamburger.setAttribute('aria-expanded','false');
    hamburger.setAttribute('aria-label','Open menu');
    hamburger.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();setOpen(!hamburger.classList.contains('active'));});
    hamburger.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();setOpen(!hamburger.classList.contains('active'));}});
    if(overlay) overlay.addEventListener('click',function(){setOpen(false);});
    navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
    window.addEventListener('resize',()=>{if(window.innerWidth>768)setOpen(false);});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initHeetNav); else initHeetNav();
})();

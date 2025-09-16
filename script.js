/* JS (script.js) */
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
  document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
});


/* JS (script.js) */
const PARTICLE_COUNT = 36;
const field = document.getElementById('particle-field');
// create subtle particle dots
for(let i=0;i<PARTICLE_COUNT;i++){const d=document.createElement('div');d.className='p-dot';
  const x=Math.random()*100;const y=Math.random()*100;const s=6+Math.random()*18;d.style.left=x+'%';
  d.style.top=y+'%';d.style.width=s+'px';d.style.height=s+'px';
  d.style.opacity=0.12+Math.random()*0.6;d.style.transform=`translate(-50%,-50%)`;
  field.appendChild(d);
  // gentle float
  const dx=(Math.random()-0.5)*30;const dy=(Math.random()-0.5)*20;
  d.animate([{transform:'translate(-50%,-50%) translate(0,0)'},{transform:`translate(-50%,-50%) translate(${dx}px,${dy}px)`},{transform:'translate(-50%,-50%) translate(0,0)'}],{duration:6000+Math.random()*8000,iterations:Infinity,easing:'ease-in-out'});
}

// smooth scroll for nav + preview
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();
  const id=a.getAttribute('href').slice(1);const el=document.getElementById(id);
  if(el)el.scrollIntoView({behavior:'smooth',block:'start'})})});

// CTA
const getStarted=document.getElementById('getStarted');
if(getStarted) getStarted.addEventListener('click',()=>{document.getElementById('contact').scrollIntoView({behavior:'smooth'})});
const previewBtn=document.getElementById('previewBtn');
if(previewBtn) previewBtn.addEventListener('click',()=>{document.getElementById('showcase').scrollIntoView({behavior:'smooth'})});

// micro-interaction: floating badges respond to mouse on mockup
const screen=document.querySelector('.screen');if(screen){screen.addEventListener('mousemove',(e)=>{const rect=screen.getBoundingClientRect();
  const cx=(e.clientX-rect.left)-rect.width/2;const cy=(e.clientY-rect.top)-rect.height/2;
  screen.style.transform=`perspective(900px) rotateX(${ -cy/30 }deg) rotateY(${ cx/30 }deg)`});
  screen.addEventListener('mouseleave',()=>{screen.style.transform=''});}

// contact form (demo)
const form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',(e)=>{e.preventDefault();
  const btn=form.querySelector('button[type="submit"]');
  btn.textContent='Sent ✓';setTimeout(()=>btn.textContent='send',1800);})}

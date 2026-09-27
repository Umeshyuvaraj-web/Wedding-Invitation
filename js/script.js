/* ==========================
   HASINI ❤️ PRATHAP
   TEMPLE WEDDING CINEMATIC
========================== */


/* ==========================
WELCOME SCREEN
========================== */

const startBtn =
document.getElementById(
"startBtn"
);

if(startBtn){

startBtn.addEventListener(
"click",

()=>{

const music =
document.getElementById(
"music"
);

const bell =
document.getElementById(
"bell"
);

if(bell){

bell.play();

}

setTimeout(()=>{

if(music){

music.volume = 0.6;

music.play();

}

},1000);

document.getElementById(
"welcome"
).style.display =
"none";

}

);

}


/* ==========================
COUNTDOWN
========================== */

const weddingDate =
new Date(
"July 02, 2026 07:30:00"
);

function updateCountdown(){

const now =
new Date();

const diff =
weddingDate - now;

if(diff <= 0){

document.getElementById(
"countdown"
).innerHTML =

"<h2>🎉 Wedding Day Has Arrived 🎉</h2>";

return;

}

const days =
Math.floor(
diff /
(1000*60*60*24)
);

const hours =
Math.floor(
(diff %
(1000*60*60*24))
/
(1000*60*60)
);

const minutes =
Math.floor(
(diff %
(1000*60*60))
/
(1000*60)
);

const seconds =
Math.floor(
(diff %
(1000*60))
/
1000
);

document.getElementById(
"days"
).innerText =
days;

document.getElementById(
"hours"
).innerText =
hours;

document.getElementById(
"minutes"
).innerText =
minutes;

document.getElementById(
"seconds"
).innerText =
seconds;

}

setInterval(
updateCountdown,
1000
);

updateCountdown();


/* ==========================
FLOWER PETALS
========================== */

const petalsContainer =
document.getElementById(
"petals-container"
);

if(petalsContainer){

function createPetal(){

const petal =
document.createElement(
"div"
);

petal.innerHTML = "🌸";

petal.classList.add(
"petal"
);

petal.style.left =
Math.random()*100+"%";

petal.style.fontSize =
(Math.random()*20+15)+"px";

petal.style.animationDuration =
(Math.random()*5+5)+"s";

petalsContainer.appendChild(
petal
);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(
createPetal,
250
);

}


/* ==========================
GOLD PARTICLES
========================== */

const particles =
document.getElementById(
"particles"
);

if(particles){

for(let i=0;i<100;i++){

let particle =
document.createElement(
"div"
);

particle.style.position =
"absolute";

particle.style.width =
Math.random()*5+2+"px";

particle.style.height =
particle.style.width;

particle.style.background =
"gold";

particle.style.borderRadius =
"50%";

particle.style.left =
Math.random()*100+"%";

particle.style.top =
Math.random()*100+"%";

particle.style.opacity =
Math.random();

particle.style.animation =
`particleFloat ${
Math.random()*10+5
}s linear infinite`;

particles.appendChild(
particle
);

}

}


/* ==========================
ADD PARTICLE ANIMATION
========================== */

const particleStyle =
document.createElement(
"style"
);

particleStyle.innerHTML =

`
@keyframes particleFloat{

0%{

transform:
translateY(0);

}

100%{

transform:
translateY(-100vh);

}

}
`;

document.head.appendChild(
particleStyle
);


/* ==========================
FIREWORKS
========================== */

const canvas =
document.getElementById(
"fireworks"
);

if(canvas){

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

function createFirework(){

let x =
Math.random()*
canvas.width;

let y =
Math.random()*
(canvas.height/2);

for(let i=0;i<80;i++){

ctx.beginPath();

ctx.arc(

x +
Math.random()*120-60,

y +
Math.random()*120-60,

2,

0,

Math.PI*2

);

ctx.fillStyle =
"gold";

ctx.fill();

}

setTimeout(()=>{

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

},500);

}

setInterval(
createFirework,
1800
);

}


/* ==========================
RSVP
========================== */

const rsvpForm =
document.getElementById(
"rsvpForm"
);

if(rsvpForm){

rsvpForm.addEventListener(
"submit",

function(e){

e.preventDefault();

alert(

"🙏 ధన్యవాదాలు!\n\nమీ స్పందన మాకు అందింది.\n\nThank You For Your Response."

);

rsvpForm.reset();

}

);

}


/* ==========================
BLESS BUTTON
========================== */

const blessBtn =
document.getElementById(
"blessBtn"
);

if(blessBtn){

blessBtn.addEventListener(
"click",

()=>{

blessBtn.innerHTML =

"✨ Blessings Sent ✨";

setTimeout(()=>{

blessBtn.innerHTML =

"🙏 Bless The Couple";

},3000);

alert(

"🙏\n\nహాసిని ❤️ ప్రతాప్\n\nవారికి మీ ఆశీర్వాదాలు అందాయి.\n\nThank You For Your Blessings."

);

}

);

}


/* ==========================
SCROLL ANIMATION
========================== */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(

(entry)=>{

if(
entry.isIntersecting
){

entry.target.classList.add(
"show"
);

}

}

);

},

{
threshold:0.15
}

);

document
.querySelectorAll(
"section"
)
.forEach(

(section)=>{

observer.observe(
section
);

}

);


/* ==========================
WINDOW RESIZE
========================== */

window.addEventListener(
"resize",

()=>{

if(canvas){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}

}

);


/* ==========================
AUTO SHOW FIRST SECTION
========================== */

document.querySelectorAll(
"section"
).forEach(

(section,index)=>{

if(index === 0){

section.classList.add(
"show"
);

}

}

);
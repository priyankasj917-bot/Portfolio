const titles = [
  'Problem Solver',
  'Software Developer',
  'Aspiring Software Engineer',
  'AI Enthusiast',
  'Linux Explorer',
  'Full Stack Developer'
];
const typingText = document.getElementById('typingText');
let titleIndex = 0;
let charIndex = 0;
let deleting = false;
function typeLoop(){
  const current = titles[titleIndex];
  if(!deleting){
    typingText.textContent = current.slice(0, charIndex++);
    if(charIndex > current.length + 8) deleting = true;
  } else {
    typingText.textContent = current.slice(0, charIndex--);
    if(charIndex < 0){ deleting = false; titleIndex = (titleIndex + 1) % titles.length; charIndex = 0; }
  }
  setTimeout(typeLoop, deleting ? 42 : 76);
}
typeLoop();

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hide'), 750);
  checkResume();
});

const nav = document.getElementById('navbar');
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - innerHeight;
  progressBar.style.width = `${(scrollY / total) * 100}%`;
  nav.style.background = scrollY > 80 ? 'rgba(5,11,22,.84)' : 'rgba(5,11,22,.62)';
});

const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.13 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if(scrollY >= section.offsetTop - 140) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  document.getElementById('navLinks').classList.remove('open');
}));

document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

function checkResume(){
  const btn = document.getElementById('resumeBtn');
  btn.textContent = 'Download Resume';
  btn.href = 'Priyanka_Resume.pdf';
  btn.setAttribute('download', 'Priyanka_Resume.pdf');
  btn.classList.add('primary');
}

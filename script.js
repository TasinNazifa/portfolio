const text =
"Machine Learning • Data Science • Web Development";

let i = 0;

function typeWriter(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter,50);
}
}

typeWriter();

/* scroll animation */
const elements =
document.querySelectorAll(".card,.project-card");

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
}

});

});

elements.forEach(el => {
el.style.opacity = "0";
el.style.transform = "translateY(30px)";
el.style.transition = "0.6s ease";
observer.observe(el);
});
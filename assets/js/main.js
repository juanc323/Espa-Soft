
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav_ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

const ulSquares = document.querySelector('ul.squares');

for ( let i = 0; i < 15; i++ ) {
  const li = document.createElement('li');

  const random = (min, max) => Math.random() * (max - min) + min
  
  const size = Math.floor(random(10, 120));
  const position1 = random(68, 99);
  const position2 = random(1, 32);
  i == 0 ? delay = 1 : delay = random(5, 0.1);
  const duration = random(24, 12);
  let position = Number
  if (i % 2 == 0) {
    position = position1;
  } else {
    position = position2
    li.style.animationDirection = 'reverse';
  }

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier: ${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}`;

  ulSquares.appendChild(li);
}

// acordion icon active 

  const questions = document.querySelectorAll(".question")
  questions.forEach((question) => question.addEventListener("click", () =>{

      if(question.parentNode.classList.contains("active")){
          question.parentNode.classList.toggle("active")
      }
  else{
  questions.forEach(question => question.parentNode.classList.remove("active"))
  question.parentNode.classList.add("active")
      }

  }))
 

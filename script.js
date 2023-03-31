const button = document.getElementById("congratulations-button");
const passageContainer = document.getElementById("passage-container");
const passage = document.getElementById("passage");
const backgroundMusic = document.getElementById("background-music");

button.addEventListener("click", () => {
  const message = "Once upon a time, there was a young man named Andy who set out on a journey to pursue his dreams. He had a vision for his life, a passion for learning, and the drive to succeed.Through the years, Andy worked hard, persevered through challenges, and stayed focused on his goals. He faced many obstacles along the way, but he never lost sight of his vision. His dedication and hard work paid off, and now, he has successfully completed his university education. Andy, your achievement is not just a testament to your hard work, but also to your perseverance, resilience, and determination. You have shown that with hard work, anything is possible. As you embark on the next phase of your journey, remember that the road ahead may not always be smooth, but it is one that you are more than capable of navigating. Believe in yourself, stay true to your vision, and don't be afraid to take risks. Your success today is a reflection of the effort and dedication you have put into your studies. As you celebrate your achievement, know that you have inspired others, and your journey serves as a beacon of hope to those who dare to dream. Andy, congratulations on your graduation. May this be the beginning of a fulfilling and rewarding journey ahead.";
  button.style.display = "none";
  passage.innerText = message;
  passageContainer.style.display = "block";
  backgroundMusic.play();
});

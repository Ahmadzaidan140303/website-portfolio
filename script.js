// Efek Parallax Tilt pada kartu
const cards = document.querySelectorAll(".project-card, .cert-item-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;

    let centerX = card.offsetWidth / 2;
    let centerY = card.offsetHeight / 2;

    let deltaX = x - centerX;
    let deltaY = y - centerY;

    let percentX = deltaX / centerX;
    let percentY = deltaY / centerY;

    card.style.transform = `perspective(1000px) rotateX(${percentY * 5}deg) rotateY(${-percentX * 5}deg) translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  });
});

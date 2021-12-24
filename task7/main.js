function drawFirst() {
  const WIDTH = 200;
  const HEIGHT = 250;
  const firstPicture = document.querySelector('.first');
  const ctx = firstPicture.getContext('2d');

  firstPicture.style.width = WIDTH + 'px';
  firstPicture.style.height = HEIGHT + 'px';
  firstPicture.width = WIDTH;
  firstPicture.height = HEIGHT;

  ctx.fillStyle = 'rgb(110, 212, 221)';
  ctx.strokeStyle = 'rgb(62, 130, 135)';
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(100, 150, 50, 0, Math.PI * 2, 0);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(100, 150, 50, 0, Math.PI * 2, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(92, 175, 20, 7, Math.PI / 20, 0, 2 * Math.PI)
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(93, 130);
  ctx.lineTo(80, 155)
  ctx.lineTo(93, 155)
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(73, 130, 10, 6, Math.PI, 0, 2 * Math.PI)
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(113, 130, 10, 6, Math.PI, 0, 2 * Math.PI)
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(110, 130, 1, 3, Math.PI, 0, 2 * Math.PI)
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(70, 130, 1, 3, Math.PI, 0, 2 * Math.PI)
  ctx.stroke();

  ctx.fillStyle = 'rgb(76, 101, 170)';
  ctx.strokeStyle = 'rgb(40, 50, 91)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(98, 108, 50, 10, Math.PI, 0, 2 * Math.PI)
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(98, 108, 50, 10, Math.PI, 0, 2 * Math.PI)
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(103, 104, 24, 10, Math.PI, 0, 2 * Math.PI)
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(103, 104, 24, 10, Math.PI, 0, 2 * Math.PI)
  ctx.fill();

  ctx.fillRect(78, 55, 50, 50);

  ctx.beginPath();
  ctx.ellipse(103, 54, 24, 10, Math.PI, 0, 2 * Math.PI)
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(103, 54, 24, 10, Math.PI, 0, 2 * Math.PI)
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(78, 54);
  ctx.lineTo(78, 104)
  ctx.moveTo(128, 54);
  ctx.lineTo(128, 104)
  ctx.stroke();
}

function drawSecond() {
  const WIDTH = 300;
  const HEIGHT = 200;
  const secondPicture = document.querySelector('.second');
  const ctx = secondPicture.getContext('2d');

  secondPicture.style.width = WIDTH + 'px';
  secondPicture.style.height = HEIGHT + 'px';
  secondPicture.width = WIDTH * 2;
  secondPicture.height = HEIGHT * 2;

  ctx.fillStyle = 'rgb(110, 212, 221)';
  ctx.strokeStyle = 'rgb(62, 130, 135)';
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(170, 300, 60, 0, Math.PI * 2, 0);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(170, 300, 60, 0, Math.PI * 2, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(420, 300, 60, 0, Math.PI * 2, 0);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(420, 300, 60, 0, Math.PI * 2, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(280, 300, 20, 0, Math.PI * 2, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(267, 284);
  ctx.lineTo(255, 270);
  ctx.moveTo(294, 315);
  ctx.lineTo(309, 330);
  ctx.moveTo(170, 300);
  ctx.lineTo(280, 300);
  ctx.lineTo(245, 220);
  ctx.lineTo(170, 300);
  ctx.moveTo(245, 220);
  ctx.lineTo(235, 195);
  ctx.moveTo(210, 195);
  ctx.lineTo(260, 195);
  ctx.moveTo(420, 300);
  ctx.lineTo(400, 190);
  ctx.lineTo(360, 205);
  ctx.moveTo(400, 190);
  ctx.lineTo(425, 160);
  ctx.moveTo(245, 220);
  ctx.lineTo(403, 220);
  ctx.lineTo(280, 300);

  ctx.stroke();
}

function drawHome() {
  const WIDTH = 400;
  const HEIGHT = 400;
  const thirdPicture = document.querySelector('.honey-im-home');
  const ctx = thirdPicture.getContext('2d');

  thirdPicture.style.width = WIDTH + 'px';
  thirdPicture.style.height = HEIGHT + 'px';
  thirdPicture.width = WIDTH * 2;
  thirdPicture.height = HEIGHT * 2;

  ctx.fillStyle = 'rgb(137, 61, 61)';
  ctx.strokeStyle = 'rgb(0, 0, 0)';
  ctx.lineWidth = 4;

  ctx.fillRect(100, 350, 600, 400);
  ctx.strokeRect(100, 350, 600, 400);
  ctx.beginPath();
  ctx.moveTo(100, 350);
  ctx.lineTo(400, 100);
  ctx.lineTo(700, 350);
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(500, 280);
  ctx.lineTo(500, 130);
  ctx.moveTo(550, 280);
  ctx.lineTo(550, 130);
  ctx.moveTo(100, 350);
  ctx.lineTo(700, 350);
  ctx.stroke();
  ctx.fillRect(500, 130, 50, 150);
  ctx.beginPath();
  ctx.ellipse(525, 130, 25, 5, 0, 2 * Math.PI, 0)
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(525, 130, 25, 5, 0, 2 * Math.PI, 0)
  ctx.fill();
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(150, 400, 100, 55);
  ctx.fillRect(255, 400, 100, 55);
  ctx.fillRect(150, 460, 100, 55);
  ctx.fillRect(255, 460, 100, 55);

  ctx.fillRect(450, 400, 100, 55);
  ctx.fillRect(555, 400, 100, 55);
  ctx.fillRect(450, 460, 100, 55);
  ctx.fillRect(555, 460, 100, 55);

  ctx.fillRect(450, 550, 100, 55);
  ctx.fillRect(555, 550, 100, 55);
  ctx.fillRect(450, 610, 100, 55);
  ctx.fillRect(555, 610, 100, 55);

  ctx.beginPath();
  ctx.ellipse(250, 590, 80, 30, 0, Math.PI, 0);
  ctx.moveTo(170, 590);
  ctx.lineTo(170, 750);
  ctx.moveTo(330, 590);
  ctx.lineTo(330, 750);
  ctx.moveTo(250, 560);
  ctx.lineTo(250, 750);
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(230, 680, 5, 5, 0, 2 * Math.PI, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(270, 680, 5, 5, 0, 2 * Math.PI, 0);
  ctx.stroke();

}
drawFirst();
drawSecond();
drawHome();
import './reset.css'; // our usual reset
import './provided.css'; // styles I'm giving you for the test
import './styles.css'; // write your additional styles there

// Add the majority of your work below:

// Step 2 - Page Layout
const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
canvas.width = 600;
canvas.height = 600;

// Step 3 - Sign Your Name
const name = document.querySelector('#studentName') as HTMLParagraphElement;
name.innerText = 'Joe Pietruch';

// Step 4 - Draw the Canvas (refactored into methods for Step 5)

// get the context
const context = canvas.getContext('2d') as CanvasRenderingContext2D;

// Step 5A & 5B Switcher
let bgFill: 'gradient' | 'pattern' = 'gradient';

document.addEventListener('keypress', (evt) => {
  if (evt.key === 'a') {
    bgFill = 'pattern';
  }
  if (evt.key === 'b') {
    bgFill = 'gradient';
  }
});

// Step 5A - Pattern
let pattern: CanvasPattern;
const patternImg = new Image();

patternImg.onload = () => {
  pattern = context.createPattern(patternImg, 'repeat') as CanvasPattern;
};

patternImg.src = './assets/pattern.png';

// Step 5B - Gradient
const gradient: CanvasGradient = context.createConicGradient(
  (3 * Math.PI) / 2,
  300,
  300,
);
gradient.addColorStop(0.0, 'red');
gradient.addColorStop(0.166, 'orange');
gradient.addColorStop(0.333, 'yellow');
gradient.addColorStop(0.5, 'green');
gradient.addColorStop(0.666, 'blue');
gradient.addColorStop(0.833, 'purple');
gradient.addColorStop(1.0, 'red');

const clear = () => {
  context.resetTransform();
  if (bgFill === 'gradient') {
    context.fillStyle = gradient;
  } else if (bgFill === 'pattern') {
    context.fillStyle = pattern;
  } else {
    context.fillStyle = 'white';
  }

  context.fillRect(0, 0, 600, 600);
};

const draw = () => {
  // draw the circle
  context.translate(300, 300);
  context.strokeStyle = bgFill === 'pattern' ? 'white' : 'black';
  context.lineWidth = 1;
  context.arc(0, 0, 75, 0, 2 * Math.PI);
  context.stroke();

  // draw the text
  context.translate(25, 20);
  context.fillStyle = bgFill === 'pattern' ? 'white' : 'black';
  context.font = '14px Arial';
  context.fillText('A', 0, 0);

  context.rotate(Math.PI / 2);
  context.font = '28px Arial';
  context.fillText('A', 0, 0);

  context.rotate(Math.PI / 2);
  context.font = '56px Arial';
  context.fillText('A', 0, 0);

  context.rotate(Math.PI / 2);
  context.font = '112px Arial';
  context.fillText('A', 0, 0);
};

const render = () => {
  clear();
  draw();
  requestAnimationFrame(render);
};

render();

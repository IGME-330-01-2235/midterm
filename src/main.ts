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

// Step 4 - Draw the Canvas

// get the context
const context = canvas.getContext('2d') as CanvasRenderingContext2D;

// clear the background
context.fillStyle = 'white';
context.fillRect(0, 0, 600, 600);

// draw the circle
context.translate(300, 300);
context.strokeStyle = 'black';
context.lineWidth = 1;
context.arc(0, 0, 75, 0, 2 * Math.PI);
context.stroke();

// draw the text
context.translate(25, 20);
context.fillStyle = 'black';
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

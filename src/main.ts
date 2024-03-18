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

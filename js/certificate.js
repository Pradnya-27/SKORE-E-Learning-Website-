const canvas = document.getElementById('certificate');
const ctx = canvas.getContext('2d');

// Set the canvas size and background color
canvas.width = 800;
canvas.height = 600;
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Set the certificate text
const text = 'Certificate of Completion';
ctx.fillStyle = '#000000';
ctx.font = 'bold 48px Arial';
ctx.textAlign = 'center';
ctx.fillText(text, canvas.width / 2, 200);

// Set the name of the recipient
const recipient = 'John Doe';
ctx.font = 'bold 36px Arial';
ctx.fillText(recipient, canvas.width / 2, 300);

// Set the date of the certificate
const date = 'April 21, 2023';
ctx.font = 'bold 24px Arial';
ctx.fillText(date, canvas.width / 2, 400);

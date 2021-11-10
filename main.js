canvas  = document.getElementById("mycanvas");
ctx= canvas.getContext("2d");

ctx.beginPath()
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.rect(90, 143, 630, 400);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(200, 210, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.lineWidth = 5;
ctx.arc(260, 270, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(320, 210, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(380, 270, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(430, 210, 50, 0, 2*Math.PI);
ctx.stroke();

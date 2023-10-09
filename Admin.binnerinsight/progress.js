// progress.js

// Function to update the trash collection progress
function updateProgress(progressPercentage) {
    const progressElement = document.getElementById("progress");
    progressElement.style.width = progressPercentage + "%";

    // Update the graph as well
    updateGraph(progressPercentage);
}

// Function to update the line graph
function updateGraph(progressPercentage) {
    const canvas = document.getElementById("graph");
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the graph
    const graphHeight = canvas.height;
    const graphWidth = canvas.width;
    const progressWidth = (graphWidth * progressPercentage) / 100;

    // Set the line color
    ctx.strokeStyle = "#007BFF"; // Blue color
    ctx.lineWidth = 2;

    // Draw the line graph
    ctx.beginPath();
    ctx.moveTo(0, graphHeight);
    ctx.lineTo(progressWidth, graphHeight - (progressHeight * graphHeight) / 100);
    ctx.stroke();
}

// Simulated trash collection progress (for demonstration purposes)
let currentProgress = 0;
const totalProgress = 100;

// Simulate progress updates (you should replace this with real data)
function simulateProgressUpdate() {
    setInterval(() => {
        currentProgress += Math.random() * 10; // Simulate progress increase
        if (currentProgress > totalProgress) {
            currentProgress = totalProgress;
        }
        updateProgress(currentProgress);
    }, 1000); // Update progress every 1 second (adjust as needed)
}

// Start simulating progress updates
simulateProgressUpdate();

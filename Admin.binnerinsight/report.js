document.addEventListener('DOMContentLoaded', function() {
    // Sample data for demonstration purposes
    const collectionEfficiencyData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Collection Efficiency',
            data: [85, 92, 88, 94, 90],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }],
    };

    const binmenPerformanceData = {
        labels: ['Binman A', 'Binman B', 'Binman C', 'Binman D', 'Binman E'],
        datasets: [{
            label: 'Performance',
            data: [90, 85, 88, 92, 87],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }],
    };

    const userSatisfactionData = {
        labels: ['Excellent', 'Good', 'Average', 'Poor'],
        datasets: [{
            label: 'Satisfaction Level',
            data: [25, 45, 20, 10],
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
        }],
    };

    // Create and populate the Collection Efficiency chart
    const collectionEfficiencyChart = new Chart(document.getElementById('collection-efficiency-chart'), {
        type: 'line',
        data: collectionEfficiencyData,
    });

    // Create and populate the Binmen Performance chart
    const binmenPerformanceChart = new Chart(document.getElementById('binmen-performance-chart'), {
        type: 'bar',
        data: binmenPerformanceData,
    });

    // Create and populate the User Satisfaction chart
    const userSatisfactionChart = new Chart(document.getElementById('user-satisfaction-chart'), {
        type: 'doughnut',
        data: userSatisfactionData,
    });
});

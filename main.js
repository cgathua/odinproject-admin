const ctx = document.getElementById('myChart');

let newChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: 'Confirmed Appointments',
            backgroundColor: ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
            data: [125, 100, 75, 180, 150, 145, 100],
            borderWidth: 1,

        }, {
            label: 'Cancelled Appointments',
            backgroundColor: ['#fca311', '#fca311', '#fca311', '#fca311', '#fca311', '#fca311'],
            data: [25, 35, 50, 10, 40, 120, 20],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: false,
                }
            }

        },
        animation: false,
        maintainAspectRatio: false,

    }
});

document.addEventListener('DOMContentLoaded', function() {
    const weeklySleepData = [7, 6, 8, 5, 7, 6, 7]; 
    const weeklyEatingData = ['Good', 'Excellent', 'Good', 'Good', 'Good', 'Excellent', 'Good'];
    const weeklyExerciseData = [30, 45, 25, 20, 35, 40, 50]; 

    const avgSleep = calculateAverage(weeklySleepData);
    const avgEating = calculateEatingQuality(weeklyEatingData);
    const avgExercise = calculateAverage(weeklyExerciseData);

    document.getElementById('sleep-data').textContent = ${avgSleep} hours;
    document.getElementById('eating-data').textContent = avgEating;
    document.getElementById('exercise-data').textContent = ${avgExercise} minutes;
    const healthStatus = calculateHealthStatus(avgSleep, avgEating, avgExercise);

    const ctx = document.getElementById('healthChart').getContext('2d');
    const healthChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sleep', 'Eating', 'Exercise'],
            datasets: [{
                label: 'Weekly Health Status',
                data: healthStatus,
                backgroundColor: [
                    getStatusColor(healthStatus[0]), 
                    getStatusColor(healthStatus[1]), 
                    getStatusColor(healthStatus[2])  
                ],
                borderColor: '#333',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 3,
                    ticks: {
                        callback: function(value) {
                            return getHealthLabel(value); 
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    function calculateHealthStatus(sleep, eating, exercise) {
        const sleepScore = sleep >= 7 ? 2 : sleep >= 6 ? 1 : 0; 
        const eatingScore = eating === 'Excellent' ? 2 : eating === 'Good' ? 1 : 0;
        const exerciseScore = exercise >= 30 ? 2 : exercise >= 20 ? 1 : 0; 
        return [sleepScore, eatingScore, exerciseScore];
    }


    function calculateAverage(data) {
        const total = data.reduce((acc, value) => acc + value, 0);
        return (total / data.length).toFixed(2); 
    }

    function calculateEatingQuality(data) {
        const qualityScores = data.map(quality => quality === 'Excellent' ? 2 : quality === 'Good' ? 1 : 0);
        const avgScore = calculateAverage(qualityScores);

        return avgScore >= 1.5 ? 'Excellent' : avgScore >= 0.5 ? 'Good' : 'Bad';
    }

    function getStatusColor(score) {
        return score === 2 ? 'green' : score === 1 ? 'yellow' : 'red';
    }

    function getHealthLabel(score) {
        return score === 2 ? 'Excellent' : score === 1 ? 'Good' : 'Bad';
    }
});

//Harish Kumar
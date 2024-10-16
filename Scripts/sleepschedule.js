document.getElementById('sleep-form').addEventListener('input', function() {
    const bedtime = document.getElementById('bedtime').value;
    const waketime = document.getElementById('waketime').value;

    if (bedtime && waketime) {
        const totalHours = calculateSleepHours(bedtime, waketime);
        document.getElementById('total-hours').value = totalHours;
    }
});

function calculateSleepHours(bedtime, waketime) {
    const bedtimeDate = new Date('1970-01-01T' + bedtime + 'Z');
    const waketimeDate = new Date('1970-01-01T' + waketime + 'Z');

    if (waketimeDate <= bedtimeDate) {
        waketimeDate.setDate(waketimeDate.getDate() + 1);
    }

    const differenceInMilliseconds = waketimeDate - bedtimeDate;
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

    return differenceInHours.toFixed(2);
}
/*Harish Kumar*/
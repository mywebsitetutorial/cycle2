
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementsByClassName("tablinks")[0].click();

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

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementsByClassName("tablinks")[0].click();
/*Harish Kumar*/
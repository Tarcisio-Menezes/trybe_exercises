let header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

let emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = '#e5989b';

let h3EmegerncyTasks0 = document.querySelectorAll('.emergency-tasks div h3')[0];

let h3EmegerncyTasks1 = document.querySelectorAll('.emergency-tasks div h3')[1];

h3EmegerncyTasks0.style.backgroundColor = '#8338ec';

h3EmegerncyTasks1.style.backgroundColor = '#8338ec';

let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];

noEmergencyTasks.style.backgroundColor = '#fcbf49';

let h3noEmergencyTasks0 = document.querySelectorAll('.no-emergency-tasks div h3')[0];

let h3noEmergencyTasks1 = document.querySelectorAll('.no-emergency-tasks div h3')[1];

h3noEmergencyTasks0.style.backgroundColor = 'black';

h3noEmergencyTasks1.style.backgroundColor = 'black';

let footer = document.getElementsByTagName('footer')[0];

footer.style.backgroundColor = '#003049';

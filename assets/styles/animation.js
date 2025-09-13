// Counter Animation
let valueDisplays = document.querySelector('.stat-number');let interval = 2000;
let startValue = 0;
let endValue = 1800000;
let counter = setInterval( function ()  {
    startValue += 5000;
    valueDisplays.textContent = startValue.toLocaleString();
    
    if (startValue >= endValue) {
        clearInterval(counter);
        valueDisplays.textContent = (endValue/1000000).toLocaleString() + ' MILLION';
    }
}, 3);


const lawSection = document.querySelector('#lawSection');
const lawContents = document.querySelectorAll('.law-content');
const contentContainer = document.querySelector('.content-container');
const lawIcon = document.querySelector('.law-icon');

lawSection.addEventListener('click', () => {
    lawIcon.classList.toggle('active');
    contentContainer.classList.toggle('active');
        lawContents.forEach(function (content) {
        content.classList.toggle('show');
        });
}); 

const reasonBreakdowns = document.querySelectorAll('.reason-breakdown');

reasonBreakdowns.forEach(function(breakdown) {
    breakdown.addEventListener('click', function() {
        const reasonItem = breakdown.querySelectorAll('.reason-item'); 
        reasonItem.forEach(function(item) {
            item.classList.toggle('show');
        });
    });
});


const whatifBreakdowns = document.querySelectorAll('.whatif-breakdown');

whatifBreakdowns.forEach(function(breakdown) {
    breakdown.addEventListener('click', function() {
        const whatifItem = breakdown.querySelectorAll('.whatif-item'); 
        whatifItem.forEach(function(item) {
            item.classList.toggle('show');
        });
    });
});

const checklistItem = document.querySelectorAll('.checklist-item');

checklistItem.forEach(function(breakdown) {
    breakdown.addEventListener('click', function() {
        const itemDescription = breakdown.querySelectorAll('.item-description '); 
        itemDescription.forEach(function(item) {
            item.classList.toggle('show');
        });
    });
});
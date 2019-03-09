$(function() {

//we have a counter
//we click add, we need to increase by 1
//when we click subtract, we need to decrease by 1

let count = 0;
let goal = null;
function checkGoal() {
    if (count === goal) {
        console.log('You are winner!')
    };
    };

const $counter = $('span.counter')

$('#subtract').on('click', function() {
    
    count = count - 1;
    $counter.text(count);

    checkGoal();
});




$('#add').on('click', function() {
    
    count = count + 1;
    $counter.text(count);



console.log(goal, count);

checkGoal();

});

//when the form is submitted
//get the user input from the text field
//Set that value as our goal




$('form').on('submit', function(event) {
    
    event.preventDefault();

     goal = parseInt($('#goal').val());
});

});
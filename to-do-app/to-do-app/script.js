$(function() {
    //watch for form submit

const formField = $('item');
const todoList = $('ul');

    $('form').on('submit', function(event) {
    event.preventDefault();

 //get the value of the text imput

 const todo = $('#item').val();

 $('#item').val('');
 //create a new <li> element with the text 

 const listItem = `<li><span class='check todo'></span>${todo}</li>`;
 // <li> will also have a span.check.todo



 //add that to the ul

 $('ul').append(listItem);

    });
   

    //if we click on the <li> we should add class 'complete, and update span,check to .done

    $('ul').on('click', 'li', function(){

        const this = $(this)
 $(this).toggleClass('completed'); 

 $(this).find('span.check').toggleClass('todo done');
    });

});
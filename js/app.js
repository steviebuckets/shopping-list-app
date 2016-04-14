$(document).ready(function () {

    /*Defining global variables*/
    console.log('Welcome to console');
    var submissions = 0;
    var checkMark = '<span class="fa fa-check"></span>'
    var xMark = '<span class="fa fa-times"></span>'

    /*Gives the user the instructions for this app*/
    $('#outer-area').prepend('<p class="dashed">Enter each item in the textbox below, then press enter</p>');
    $('#outer-area').prepend('<p class="dashed">Time to make that grocery list!</p>');

    /*Allows an "Enter" keystroke to work as a submit button for input field*/
    // function getItem() {
    //     console.log('text test') 
    //     $('#add-items').keydown(function (enter) {
    //         if (enter.keyCode == 13) {
    //             postItem();
    //         }
    //     });
    // }

    // getItem();
    $('#adding').submit (function(event){
        event.preventDefault()
        alert('testing')
    })


    /*Takes returned value from previous function and manipulates it*/
    function postItem() {
        var item = $('#add-items').val();
        var work = '<p class="full-width no-strikethrough">'+ xMark + item + checkMark + '</p>';
        $('#list-area').prepend(work);
        $('#add-items').val('');
        $('#list-area p:first-child')
        .css("margin-top", "-20px")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );
    }

    function crossOff(){
        $('.fa-times').toggle(function () {
            $(this).closest('p').addClass("strikethrough");
            console.log("Stricken")
        }, function () {
            $(this).closest('p').removeClass("active");
        });
    }

});

/*Clears all items on list*/
$(document).on("click", "#startover", function(){
    $("#list-area").empty();
    submissions = 0;
});

/*Allows user to delete items*/
$(document).on("click", ".fa-times", function(){
    $(this).closest('p').fadeOut(300);
});

/*Allows user to check off items*/
$(document).on("click", ".fa-times", function(){
    if (!$(this).closest('p').hasClass('strikethrough')) {
        console.log("I am going to add a strikethrough");
        $(this).closest('p').addClass("strikethrough");
        $(this).siblings('.fa-times').addClass("alt-delete");
        $(this).addClass("alt-cross-off");
   }
   else {
        console.log("I am going to remove a strikethrough");
        $(this).closest('p').removeClass("strikethrough");
        $(this).siblings('.fa-times').removeClass("alt-delete");
        $(this).removeClass("alt-cross-off");
   }
});

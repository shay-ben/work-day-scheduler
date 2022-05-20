//get the current day 
$("#currentDay").text(moment().format("dddd, MMMM Do")); 

// click save button 
$(".saveBtn").on("click", function() {
    var planner = $(this).siblings(".planner").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, planner);
});



$(".time-block").each(function() {
    var currentHour = moment().hour();
    var time = $(this).parent().attr("id");
        if (time < currentHour) {
            $(this).addClass("past");
        } else if (time === currentHour){
            $(this).addClass("present");
            $(this).removeClass("past");
        } else {$(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
    }
 })

 $("#1 .planner").val(localStorage.getItem("1"));
 $("#2 .planner").val(localStorage.getItem("2"));
 $("#3 .planner").val(localStorage.getItem("3"));
 $("#4 .planner").val(localStorage.getItem("4"));
 $("#5 .planner").val(localStorage.getItem("5"));
 $("#6 .planner").val(localStorage.getItem("6"));
 $("#7 .planner").val(localStorage.getItem("7"));
 $("#8 .planner").val(localStorage.getItem("8"));
 $("#9 .planner").val(localStorage.getItem("9"));
 $("#10 .planner").val(localStorage.getItem("10"));
 $("#11 .planner").val(localStorage.getItem("1"));
 $("#12 .planner").val(localStorage.getItem("12"));
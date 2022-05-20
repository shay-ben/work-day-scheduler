//get the current day 
$("#currentDay").text(moment().format("dddd, MMMM Do")); 

// click save button 
$(".saveBtn").on("click", function() {
    var planner = $(this).siblings(".planner").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, planner);
});

var present = moment().add(1, "h");
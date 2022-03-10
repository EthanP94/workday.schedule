myStorage = window.localStorage;

var hour = moment().format("H");
var currentDay = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var userInput;
var hourSpan;

var hour8 = $("#8:00am");
var hour9 = $("#9:00am");
var hour10 = $("#10:00am");
var hour11 = $("#11:00am");
var hour12 = $("#12:00pm");
var hour13 = $("#1:00pm");
var hour14 = $("#2:00pm");
var hour15 = $("#3:00pm");
var hour16 = $("#4:00pm");
var hour17 = $("#5:00pm");
var hour18 = $("#6:00pm");

var workHours = [hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18];
$('#currentDay').text(currentDay);

function scheduleEvents() {
    var event8 = JSON.parse(localStorage.getItem("8:00 am"));
    hour8.val(event8);
    var event9 = JSON.parse(localStorage.getItem("9:00 am"));
    hour9.val(event9);
    var event10 = JSON.parse(localStorage.getItem("10:00 am"));
    hour10.val(event10);
    var event11 = JSON.parse(localStorage.getItem("11:00 am"));
    hour11.val(event11);
    var event12 = JSON.parse(localStorage.getItem("12:00 pm"));
    hour12.val(event12);
    var event13 = JSON.parse(localStorage.getItem("1:00 pm"));
    hour13.val(event13);
    var event14 = JSON.parse(localStorage.getItem("2:00 pm"));
    hour14.val(event14);
    var event15 = JSON.parse(localStorage.getItem("3:00 pm"));
    hour15.val(event15);
    var event16= JSON.parse(localStorage.getItem("4:00 pm"));
    hour16.val(event16);
    var event17 = JSON.parse(localStorage.getItem("5:00 pm"));
    hour17.val(event17);
    var event18 = JSON.parse(localStorage.getItem("6:00 pm"));
    hour18.val(event18);
}

function backgroundColor (){
    $(".form-control").each(function () {
        var timeSlot = +($(this).attr("time"));
        console.log(timeSlot)
        hour = +(hour);
        console.log(timeSlot);
        console.log(hour);
        if (hour > timeSlot) {
            $(this).addClass("past");
        } else if (hour < timeSlot) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

$(document).ready(function(){
    scheduleEvents()
    backgroundColor()
    $(".saveBtn").on("click", function(){
        userInput = $(this).siblings(".form-control").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, userInput);
     })
 });
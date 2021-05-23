//Current day displayed when the planner is opened
function displayDate() {
    var displayDayEl = document.querySelector("#currentDay");

    var currentDay = moment().format("dddd[,] MMMM Do[,] YYYY");
    displayDayEl.textContent = currentDay;
    console.log(currentDay);
    
}
//Standard time blocks for business hours
var hoursOfDay = [{
    time: 8,
    meridiem: "AM",
    military: 8
}, {
    time: 9,
    meridiem: "AM",
    military: 9,
}, {
    time: 10,
    meridiem: "AM",
    military: 10
}, {
    time: 11,
    meridiem: "AM",
    military: 11
}, {
    time: 12,
    meridiem: "PM",
    military: 12
}, {
    time: 1,
    meridiem: "PM",
    military: 13
}, {
    time: 2,
    meridiem: "PM",
    military: 14
}, {
    time: 3,
    meridiem: "PM",
    military: 15
}, {
    time: 4,
    meridiem: "PM",
    military: 16
}, {
    time: 5,
    meridiem: "PM",
    military: 17
},  {
    time: 6,
    meridiem: "PM",
    military: 18
},{
    time: 7,
    meridiem: "PM",
    military: 19
}];

// Each time block is color coded to indicate past, present or futire appointment

//Click on the block to create the event
function plannerLayout() {
    for (var i = 0; i < hoursOfDay.length; i++) {
        var calendarContainer = document.querySelector("#container");
        //create div to hold HOUR and TASK
       var timeBlockContainer = document.createElement("div")
        timeBlockContainer.className = "row time-block";

        //create div to display HOUR
        var timeElDisplay = document.createElement("div")
        timeElDisplay.className = "col-2 time-block hour";
        timeElDisplay.id = "time-hour-" + hoursOfDay[i].time;
        timeElDisplay.textContent = hoursOfDay[i].time + hoursOfDay[i].meridiem;
        timeBlockContainer.appendChild(timeElDisplay);

        //create div for TASK container
        var taskElDisplay = document.createElement("div")
        taskElDisplay.className = "col-9 time-block task-container";
        taskElDisplay.id = "task-container-" + hoursOfDay[i].time;


        //create text area for TASKS
        var taskEl = document.createElement("textarea")
        taskEl.setAttribute("type", "text")
        taskEl.setAttribute("name", "task")
        taskEl.className = "text-area"
        taskEl.id = "task-item-" + hoursOfDay[i].time
        taskEl.textContent = localStorage.getItem("save"+ hoursOfDay[i].time);
        taskElDisplay.appendChild(taskEl);
//Click to save event

//Saved events persist when the page is refreshed.
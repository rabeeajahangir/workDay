//Current day displayed when the planner is opened
function displayDate() {
    var displayDayEl = document.querySelector("#currentDay");

    var currentDay = moment().format("dddd[,] MMMM Do[,] YYYY");
    displayDayEl.textContent = currentDay;
    console.log(currentDay);
    
}
//Standard time blocks for business hours

// Eacg time block is color coded to indicate past, present or futire appointment

//Click on the block to create the event

//Click to save event

//Saved events persist when the page is refreshed.
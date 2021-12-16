var date = moment().format('dddd, MMMM Do, YYYY')

$("#currentDay").text(date)

var currentHour = moment().hours()
var timeBlock = $('.time-block')

setColor()

// allows color coded for past, present, and future 
function setColor() {
    timeBlock.each(function() {
        var hour = $(this).attr('id')

        if (currentHour > hour) {
            $(this).addClass('past')
        } else if (currentHour == hour) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}

// created a function to save tasks to local storage
$('.saveBtn').on('click', function(event) {
    event.preventDefault()
    var id = $(this).attr('id')
    var task = $(this).siblings('textarea').val()
    localStorage.setItem(id, task)
    console.log(id, task);
    showTasks()
})

showTasks()
// created a function to show taks to local storage 
function showTasks() {
    for (var i = 9; i < 18; i++) {
        var currentTask = localStorage.getItem(i)
        $('#' + i).text(currentTask)
    }
}
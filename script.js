var date = moment().format('dddd, MMMM Do, YYYY')

$("#currentDay").text(date)

var currentHour = moment().hours()
var timeBlock = $('.time-block')

setColor()

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

$('.saveBtn').on('click', function(event) {
    event.preventDefault()
    var id = $(this).attr('id')
    var task = $(this).siblings('textarea').val()
    localStorage.setItem(id, task)
    console.log(id, task);
    showTasks()
})

showTasks()

function showTasks() {
    for (var i = 9; i < 18; i++) {
        var currentTask = localStorage.getItem(i)
        $('#' + i).text(currentTask)
    }
}
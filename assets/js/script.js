// Add Global Variables/Arrays
var arrayIndicator = 0;
var storageCount = 0;
var includeTimes = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var calTimes = ['09', '10', '11', '12', '13', '14', '15', '16', '17'];

// Add Current Date
$("#currentDay").text(moment().format("dddd, LL"));
$("#lastUpdate").text(moment().format("hh:mm A"));

// Append Schedule Block
jQuery.each(includeTimes, function appendElements(){
    $('#timeslot').append(
        $('<div/>', {'class': 'row'})
            .append(
            $('<div/>', {'class': 'col-lg col-md col-sm col-xs hour'}).append(
                $('<h2/>', {'class': 'time-block', text: includeTimes[arrayIndicator]})
            ))
            .append(
                $('<div/>', {'id': 'slot' + arrayIndicator, 'class': 'task-group col-lg-9 col-md-8 col-sm-7 col-xs description'}).append(
                    $('<p/>', {'class': 'form-control textarea'})
                ))
            .append(
                    $('<button/>', {'id': 'saveButton' + includeTimes[arrayIndicator], 'class': 'col-lg col-md col-sm col-xs saveBtn'}).append(
                        $('<span/>', {'class': 'oi oi-check'})
            )))

  
    var calT = moment(calTimes[arrayIndicator], 'HH');
    if (moment().diff(calT, 'minutes') < 0) {
        $("#slot" + arrayIndicator).addClass("future");
    } else if (moment().diff(calT, 'minutes') >= 60) {
        $("#slot" + arrayIndicator).addClass("past");
    } else {
        $("#slot" + arrayIndicator).addClass("present");
    };

    arrayIndicator++;
});


// Allow text input/change for task
$(".task-group").on("click", "p", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("form-control").val(text);  
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
  });

// Refresh page every 10 minutes
setInterval(function() {
    window.location.reload();
}, (1000 * 60) * 10);


var tasks = [];

// Save to Local Storage
$('.saveBtn').on('click', function(){
    var calHour = $(this).attr('id');
    var scheduleText = $(this).siblings('div.description').children().val();

    localStorage.setItem(calHour, scheduleText);
})

// Load from Local Storage
for (var i = 0; i < includeTimes.length; i++){
$('#slot'+ storageCount).children().text(localStorage.getItem('saveButton' + includeTimes[storageCount]));
storageCount++;
}



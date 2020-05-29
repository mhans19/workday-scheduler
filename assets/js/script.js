// Add Global Variables/Arrays
var arrayIndicator = 0;
var includeTimes = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM'];
var calTimes = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];
// Add Current Date
$("#currentDay").text(moment().format("dddd, LL"));

// Append Schedule Block
jQuery.each(includeTimes, function appendElements(){
    $('#timeslot').append(
        $('<div/>', {'class': 'row'})
            .append(
            $('<div/>', {'class': 'col hour'}).append(
                $('<h2/>', {'class': 'time-block', text: includeTimes[arrayIndicator]})
            ))
            .append(
                $('<div/>', {'id': 'slot' + arrayIndicator, 'class': 'task-group col-9 description'}).append(
                    $('<textarea/>', {'class': 'form-control'})
                ))
            .append(
                $('<div/>', {'class': 'col'}).append(
                    $('<button/>', {'class': 'saveBtn'}).append(
                        $('<span/>', {'class': 'oi oi-check'})
            )))
    )
    var calT = moment(calTimes[arrayIndicator], 'HH');
    if (moment().diff(calT, 'minutes') < 0) {
        $("#slot" + arrayIndicator).addClass("future");
    } else if (moment().diff(calT, 'minutes') >= 60) {
        $("#slot" + arrayIndicator).addClass("past");
    } else {
        $("#slot" + arrayIndicator).addClass("present");
    }

    arrayIndicator++;
});

// Allow input text for task
$(".task-group").on("click", "textarea", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("form-control").val(text);  
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
  });

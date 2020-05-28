// Add Global Variables/Arrays
var arrayIndicator = 0;
var includeTimes = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

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
                $('<div/>', {'class': 'task-group col-9 description'}).append(
                    $('<p/>', {text: 'hello'})
                ))
            .append(
                $('<div/>', {'class': 'col'}).append(
                    $('<button/>', {'class': 'saveBtn'}).append(
                        $('<span/>', {'class': 'oi oi-check'})
            )))
    )
    arrayIndicator++;
});

// Allow input text for task
$(".task-group").on("click", "p", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("form-control").val(text);  
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
  });

var taskTime = function() {
    // Current Time
    $(this).text(moment().format("HH:mm"));
    var time = moment(this, "L").set("hour", 17);
console.log(this);
}
taskTime();
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
                $('<h2/>', {text: includeTimes[arrayIndicator]})
            ))
            .append(
                $('<div/>', {'class': 'col-9'}).append(
                    $('<p/>', {text: 'description'})
                ))
            .append(
                $('<div/>', {'class': 'col'}).append(
                    $('<button/>', {'class': 'saveBtn'}).append(
                        $('<span/>', {'class': 'oi oi-check'})
            )))
    )
    arrayIndicator++;
});


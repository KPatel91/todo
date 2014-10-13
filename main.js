// JavaScript source code
var counter = 0;

$(document).ready(function () {

});

function capture(event) {
    if (event.keyCode == 13) {
        var item = $('#userInput').val();
        if (item != "") {
            var html = '<tr><td id=\'listItem' + counter + '\'><img src=\"img/tick.png\" onclick=\"tickItem(\'listItem' + counter + '\')\" class=\"tick\" />' + item
                + '<img src=\"img/cross.png\" onclick=\"closeItem(\'listItem' + counter + '\')\" class=\"cross\" /></td></tr>';
            $('#userList > tbody:first').append(html);
            $('#userInput').val('');
            counter++;
        }
    }
}

function closeItem(item) {
    $("#" + item).animate({ opacity: 0.1 }, 1000, function () {
        $(this).remove();
    });
}
function remove(item) {
    $('#' + item).remove();
}
function tickItem(item) {
    if ($('#' + item).css('opacity') == 0.5)
        $('#' + item).fadeTo("slow", 1);
    else
        $('#' + item).fadeTo("slow", 0.5);
}

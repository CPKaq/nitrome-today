let events;
let entryList = document.getElementById("entry-list");

function handleDate() {
    var date = new Date(document.getElementById("datepicker").value);
    var month = date.getMonth();    
    var day = date.getDate();
    var eventList = events[month][day];
    $("#entry-list").empty();

    if(!eventList) {
        $(".no-entry").show();
    } else {
        $(".no-entry").hide();
        eventList.forEach(element => {
                $("#entry-list").append(
                    $("<div>").addClass("entry").append(
                        $("<div>").addClass("entry-date").text(element[0]+" 年"),
                        $("<div>").addClass("entry-detail").text(element[1]+"。")
                    )
                );
            });
    }
}

$(document).ready(function() {
    var today = new Date().toISOString().split('T')[0];
    $("#datepicker")[0].value = today;

    fetch('event.json')
        .then(response => response.json())
        .then(data => {
        // 在这里处理读取到的JSON数据
        events = data
        // console.log(events);
        handleDate();
        })
        .catch(error => {
        // 处理读取错误
        console.error('Error:', error);
        });
});
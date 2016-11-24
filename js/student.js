
$(document).ready(function () {

    var $studentTableBody = $("#studentTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (course) {
            console.log(course);


            course.forEach(function (course) {

                $studentTableBody.append(
                    "<tr>" +
                    "<td>" + course.code + "</td>" +
                    "<td>" + /*course.reviewAverage*/ +"</td>" +
                    "<td>" + /*button*/ +"</td>" +
                    "</tr>"
                );

            });

        },
        error: function (course) {
            alert('Failed!');
        }


    })

});
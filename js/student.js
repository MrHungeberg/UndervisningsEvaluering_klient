$(document).ready(function () {
    var studentTableBody = $("#studentTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (course) {
            var decryptedCourse = $.parseJSON(SDK.Decrypt(course))
            /*console.log(decrypted[0].code)*/


            decryptedCourse.forEach(function (decryptedCourse) {

                studentTableBody.append(
                    "<tr>" +
                    "<td>" + decryptedCourse.code + "</td>" +
                    "<td>" + /*course.reviewAverage*/ +"</td>" +
                    "<td> <button class='btn btn-default' id='toLecture'>Vis</button> </td>" +
                    "</tr>"
                );

            });

        },
        error: function () {
            alert('Failed!');
        }


    })


})


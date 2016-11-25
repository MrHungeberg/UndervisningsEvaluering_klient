$(document).ready(function () {
    var teacherTableBody = $("#teacherTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (course) {
            var decrypted = $.parseJSON(SDK.Decrypt(course))
            /*console.log(decrypted[0].code)*/


            decrypted.forEach(function (decrypted) {

                teacherTableBody.append(
                    "<tr>" +
                    "<td>" + decrypted.code + "</td>" +
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
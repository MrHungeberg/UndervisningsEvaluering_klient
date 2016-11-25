$(document).ready(function () {
    var studentTableBody = $("#studentTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (course) {
            var decrypted = $.parseJSON(SDK.Decrypt(course))
            /*console.log(decrypted[0].code)*/


            decrypted.forEach(function (decrypted) {

                studentTableBody.append(
                    "<tr>" +
                    "<td>" + decrypted.code + "</td>" +
                    "<td>" + /*course.reviewAverage*/ +"</td>" +
                    "<td>" + /*button*/ +"</td>" +
                    "</tr>"
                );

            });

        },
        error: function () {
            alert('Failed!');
        }


    })
})



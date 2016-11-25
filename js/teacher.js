$(document).ready(function () {
    var teacherTableBody = $("#teacherTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (course) {
            var decryptedCourse = $.parseJSON(SDK.Decrypt(course))
            /*console.log(decrypted[0].code)*/


            decryptedCourse.forEach(function (decryptedCourse) {

                teacherTableBody.append(
                    "<tr>" +
                    "<td>" + decryptedCourse.code + "</td>" +
                    "<td>" + /*course.reviewAverage*/ +"</td>" +
                    "<td> <button class='btn btn-default toComment' data-lectureCode=" + decryptedCourse.displaytext + ">Vis</button> </td>" +
                    "</tr>"
                );

            });

        },
        error: function () {
            alert('Failed!');
        }


    })
})
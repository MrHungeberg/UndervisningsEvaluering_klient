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
                    "<td> <button class='btn btn-primary btn-block toLecture' data-lectureCode=" + decryptedCourse.displaytext + ", onclick=(SDK.Storage.persist('lectureCode',getAttribute('data-lectureCode'))),window.location.href='teacherLectureView.html'>Vis</button></td>" +
                    "</tr>"
                );

            });

        },
        error: function () {
            alert('Failed!');
        },



    })


})
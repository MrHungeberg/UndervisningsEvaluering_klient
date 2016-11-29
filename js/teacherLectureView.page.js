$(document).ready(function () {
    var teacherLectureTableBody = $("#teacherLectureTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/lecture/" + SDK.Storage.load("lectureId"),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (lecture) {
            var decryptedLecture = $.parseJSON(SDK.Decrypt(lecture))
            console.log(decryptedLecture)


            decryptedLecture.forEach(function (decryptedLecture) {

                teacherLectureTableBody.append(
                    "<tr>" +
                    "<td>" + decryptedLecture.start + "</td>" +
                    "<td>" + /*Se kommentarer*/ + "</td>" +
                    "<td>" + /*Tilføj bedømmelse og kommentar*/ + "</td>" +
                    "</tr>"
                );

            });

        },
        error: function () {
            alert('Failed!');
        }

    })

})
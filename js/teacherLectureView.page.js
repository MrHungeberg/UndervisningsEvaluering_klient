$(document).ready(function () {
    var teacherLectureTableBody = $("#teacherLectureTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/lecture/" + SDK.Storage.load("lectureCode"),
        dataType: "json",
        success: function (lecture) {
            var decryptedLecture = $.parseJSON(SDK.Decrypt(lecture))


            decryptedLecture.forEach(function (decryptedLecture) {

                teacherLectureTableBody.append(
                    "<tr>" +
                    "<td>" + decryptedLecture.startDate + "</td>" +
                    "<td> <button class='btn btn-primary btn-block toComment' data-lectureId=" + decryptedLecture.id + ", onclick=(SDK.Storage.persist('lectureId',getAttribute('data-lectureId'))),window.location.href='teacherReviewView.html'>Vis</button> </td>" +
                    "</tr>"
                );

            });

        },
        error: function () {
            alert('Failed!');
        }

    })

})
$(document).ready(function () {
    var studentLectureTableBody = $("#studentLectureTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/lecture/" + SDK.Storage.load("lectureCode"),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (lecture) {
            var decryptedLecture = $.parseJSON(SDK.Decrypt(lecture))
            console.log(decryptedLecture)


            decryptedLecture.forEach(function (decryptedLecture) {

                studentLectureTableBody.append(
                    "<tr>" +
                    "<td>" + decryptedLecture.startDate + "</td>" +
                    "<td> <button class='btn btn-default toComment' data-lectureId=" + decryptedLecture.id + ", onclick=(SDK.Storage.persist('lectureId',getAttribute('data-lectureId'))),window.location.href='reviewView.html'>Vis</button> </td>" +
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
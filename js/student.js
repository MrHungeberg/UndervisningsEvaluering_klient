$(document).ready(function () {
    var studentTableBody = $("#studentTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (course) {
            var decryptedCourse = $.parseJSON(SDK.Decrypt(course))
            //console.log(decryptedCourse)


            decryptedCourse.forEach(function (decryptedCourse) {

                studentTableBody.append(
                    "<tr>" +
                    "<td>" + decryptedCourse.code + "</td>" +
                    "<td>" + /*course.reviewAverage*/ +"</td>" +
                    "<td> <button class='btn btn-default toLecture' data-lectureCode=" + decryptedCourse.displaytext + ", onclick=(SDK.Storage.persist('lectureCode',getAttribute('data-lectureCode'))),window.location.href='studentLectureView.html'>Vis</button> </td>" +
                    "</tr>"
                );

            });


        },
        error: function () {
            alert('Failed!');
        }


    })

})


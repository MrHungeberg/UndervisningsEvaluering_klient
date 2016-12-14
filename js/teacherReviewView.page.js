$(document).ready(function () {
    var teacherReviewTableBody = $("#teacherReviewTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/review/" + SDK.Storage.load("lectureId"),
        dataType: "json",
        success: function (review) {
            var decryptedReview = $.parseJSON(SDK.Decrypt(review))
            //console.log(decryptedReview)


            decryptedReview.forEach(function (decryptedReview) {

                teacherReviewTableBody.append(
                    "<tr>" +
                    "<td>" + decryptedReview.comment + "</td>" +
                    "<td>" + decryptedReview.rating + "</td>" +
                    "</tr>"
                );

            });

        },
        error: function () {
            alert('Der er ingen kommentarer til denne forelæsning!');
        }

    })

    });

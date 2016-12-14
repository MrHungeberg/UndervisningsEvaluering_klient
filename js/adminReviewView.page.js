$(document).ready(function () {
    var adminReviewTableBody = $("#adminReviewTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/review/" + SDK.Storage.load("lectureId"),
        dataType: "json",
        success: function (review) {
            var decryptedReview = $.parseJSON(SDK.Decrypt(review))
            //console.log(decryptedReview)


            decryptedReview.forEach(function (decryptedReview) {

                adminReviewTableBody.append(
                    "<tr>" +
                    "<td>" + decryptedReview.comment + "</td>" +
                    "<td>" + decryptedReview.rating + "</td>" +
                    "<td class='btn-row'> <button class='btn btn-danger toDelete' data-user=" + decryptedReview.userId +" data-id=" + decryptedReview.id+ ">Slet upassende kommentar</button></td>" +
                    "</tr>"
                );

            });

        },
        error: function () {
            alert('Der er ingen kommentarer til denne forelæsning!');
        }

    })

    $("#adminReviewTableBody").on('click', '.toDelete', function (e) {
        var id = $(this).data("id");
        var userId = $(this).data("user");

        $.ajax({
            type: "DELETE",
            url: SDK.serverURL + "/student/review",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                id: id,
                userId: userId
            }),
            success: function (res) {
                location.reload()
            },
            error: function (err) {
                console.log(err);
            }

        })

    })

})

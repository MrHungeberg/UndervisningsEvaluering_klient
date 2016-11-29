$(document).ready(function () {
    var reviewTableBody = $("#reviewTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/review/" + SDK.Storage.load("lectureId"),
        dataType: "json",
        success: function (review) {
            var decryptedReview = $.parseJSON(SDK.Decrypt(review))
            console.log(decryptedReview)


            decryptedReview.forEach(function (decryptedReview) {

                reviewTableBody.append(
                    "<tr>" +
                    "<td>" + decryptedReview.comment + "</td>" +
                    "<td>" + decryptedReview.rating + "</td>" +
                    "</tr>"
                );

            });

        },
        error: function () {
            alert('Failed!');
        }

    })

})
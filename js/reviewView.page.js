$(document).ready(function () {
    var reviewTableBody = $("#reviewTableBody");

    $.ajax({
        type: 'GET',
        url: SDK.serverURL + "/review/" + SDK.Storage.load("lectureId"),
        dataType: "json",
        success: function (review) {
            var decryptedReview = $.parseJSON(SDK.Decrypt(review))
            //console.log(decryptedReview)


            decryptedReview.forEach(function (decryptedReview) {

                var btn;
                if(decryptedReview.userId == SDK.Storage.load("userId")) {
                    btn = "<button class='btn btn-primary btn-block toDelete' data-id=" + decryptedReview.id+ ">Slet din kommentar</button>"
                } else {
                    btn = "<button class='btn btn-danger btn-block' data-id=" + decryptedReview.id+ ">Ikke din kommentar</button>"
                }

                reviewTableBody.append(
                    "<tr>" +
                    "<td>" + decryptedReview.comment + "</td>" +
                    "<td>" + decryptedReview.rating + "</td>" +
                    "<td>" + btn + "</td>" +
                    "</tr>"
                );

            });

        },
        error: function () {
            alert('Der er ingen kommentarer til denne forelæsning!');
        }

    })

    $("#reviewTableBody").on('click','.toDelete',function(e){
        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: SDK.serverURL + "/student/review",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                id: id,
                userId: SDK.Storage.load("userId")
            }),
            success: function(res){
                location.reload()
            },
            error: function(err) {
                console.log(err);
            }
        })
    });

    $("#addReviewBtn").click(function(e) {
        e.preventDefault()
        var rating = $("#rating").val()
        var comment = $("#comment").val()
        var lecture = SDK.Storage.load("lectureId");

        $.ajax({
            type: "POST",
            url: SDK.serverURL + "/student/review",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                rating: rating,
                comment: comment,
                lectureId: lecture,
                userId: SDK.Storage.load("userId")
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
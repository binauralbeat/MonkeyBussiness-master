this.photoInput = $("<form></form>")
    .addClass("box")
    .addMethod("post")
    .addAction("")
    .addEnctype("multipart/form-data")
        .append($("<div></div>")
            .addClass("box_input")
                .append($("<input></input>")
                    .addClass("box__file")
                    .addType("file")
                    .addName("files[]")
                    .addId("file")


            )


    )
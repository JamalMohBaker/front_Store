$(document).ready(function () {
    $(".a1a1").addClass("actact");
    $(".hf ").click(function () {
        $(".hff").hide();
        $(".a1a1").removeClass("actact")
    })
    $(".a1a1").on("click", function () {
        $(this).addClass("actact");
        $(".hff").show(); 
    })
    $(".c").on("click" , function(){
        $(this).addClass("tr").siblings().removeClass("tr");
    })
});


$(window).on("load", function () {
    $(".loader").fadeOut(2000, function () {
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
    });

})

$(window).on("load", function () {
    $(".lds-circle").fadeOut(2000, function () {
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
    });

})
$(window).on("load", function () {
    $(".lds-dual-ring").fadeOut(2000, function () {
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
    });

})
$(window).on("load", function () {
    $(".lds-facebook").fadeOut(4000, function () {
        $(this).parent().fadeOut(3000, function () {
            $(this).remove();
        });
    });

})
$(window).on("load", function () {
    $(".lds-hourglass").fadeOut(4000, function () {
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
    });

})

$(window).on("load", function () {
    $(".lds-ring").fadeOut(4000, function () {
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
    });

})
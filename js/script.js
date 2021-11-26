$(function () {
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 500);
        return false;
    });

    $("input[name=input_in]").ForceNumericOnly().keyup(function () {
        let amount = parseFloat($(this).val().replaceAll(/\D/g, ""));
        let now_amount = parseFloat($(this).val().replaceAll(/\D/g, ""));

        now_amount = !isNaN(now_amount) ? now_amount : 0;
        amount = !isNaN(amount) ? amount * 2 : 0;

        $("input[name=input_in]").val(now_amount.toLocaleString());
        $("input[name=input_out]").val(amount.toLocaleString());
    });

    $("input[name=input_out]").ForceNumericOnly().keyup(function () {
        let amount = parseFloat($(this).val().replaceAll(/\D/g, ""));
        let now_amount = parseFloat($(this).val().replaceAll(/\D/g, ""));

        now_amount = !isNaN(now_amount) ? now_amount : 0;
        amount = !isNaN(amount) ? amount / 2 : 0;

        $("input[name=input_in]").val(amount.toLocaleString());
        $("input[name=input_out]").val(now_amount.toLocaleString());
    });

    $(".calculator-query button").click(function () {
        let amount = $(this).data("value");

        if($(this).data('type') == "in") {
            $("input[name=input_in]").val(amount.toLocaleString());

            amount = !isNaN(amount) ? amount * 2 : 0;
            $("input[name=input_out]").val(amount.toLocaleString());
        } else if($(this).data('type') == "out") {
            $("input[name=input_out]").val(amount.toLocaleString());

            amount = !isNaN(amount) ? amount / 2 : 0;
            $("input[name=input_in]").val(amount.toLocaleString());
        }
    });

    $(".notify-close").click(function () {
        $(".notify").slideUp(200);
    });
});

function randomString(len, charSet) {
    charSet =
        charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var randomString = "";
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function copy(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    if (result) {
        $('.address_check').fadeIn();
        setTimeout(function () {
            $('.address_check').fadeOut();
        }, 1000);
    }
}

jQuery.fn.ForceNumericOnly = function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            var key = e.charCode || e.keyCode || 0;
            return (key == 8 || key == 46 || key == 188 || key == 190 || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
        });
    });
};
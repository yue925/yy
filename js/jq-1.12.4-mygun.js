!(function ($) {
    $.fn.myGun = function () {
        var ul = this;

        // var step = ul.children().innerHeight();
        //  var step = 18.2vw

        var maxLength = ul.children().length;

        ul.html(ul.html()+ul.html());
        //补位
        // var $height = ul.height();
        // while (ul.height() - $height < windowHeight) {
        //
        // };


        var index = 0;

        aa();
        function aa() {
            index++;
            ul.delay(3000).animate({marginTop:-step*index},600,function () {
                index = index%maxLength;
                ul.css({marginTop:-step*index});
                aa();
            })
        }


        return this;
    }
})(jQuery);
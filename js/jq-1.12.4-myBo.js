!(function ($) {
    $.fn.myBo = function () {
        var ul = this;

        var maxLength = ul.children().length
        var index = 0;
        var step = ul.children().eq(1).position().left;
        var time;

        var btn = $('#btns btn');
        btn.click(function () {
               clearTimeout(time);
               index = $(this).index();
               changeBtn(index);

               ul.stop(true,false).animate({
                   marginLeft:-step*index
               },1000,aa);
           });

        aa();
        function aa() {
            changeBtn(index);
            index = (++index)%maxLength;
            time = setTimeout(function () {
                changeBtn(index);
                ul.animate({marginLeft:-step*index},1000,aa)
            },3000);
        }

        function changeBtn(n) {
            btn.eq(n).css({backgroundColor:'white'})
                .siblings().css({backgroundColor:'#d6dfea'})
        }
    }


return this;


})(jQuery);
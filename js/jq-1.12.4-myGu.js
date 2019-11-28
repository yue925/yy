!(function($){
    $.fn.myGu = function () {
       var header = this;


       $(window).scroll(function () {
            var scrollTop = window.scrollY;
            if(scrollTop <= 0){
                header.css({top:0});
                // this.css('top') = '0px'
            }else{
                header.css({top:scrollTop});
                // this.css.top = scrollTop - _height + 'px';
            }
        });

        return this;
    }

})(jQuery);
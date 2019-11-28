!(function ($) {
    $.fn.myPic = function (userArg) {
        var obj = this.eq(0);
        var arg = {
            imgList:[],
            step:3000,
        };
        // $.extend(obj1,obj2);
        // 以obj1为基准，将obj2中的值更新到obj1中。
        $.extend(arg,userArg);
        obj.empty();
        if(obj.css('position')=='static'){
            obj.css({position:'relative'})
        }
        // if(obj.css('position')=='static'){



        var w = obj.innerWidth();
        var h = obj.innerHeight();

        var oldImg = $('<img>').appendTo(obj).css({
            width:w,
            height:h,
            position: 'absolute',
            left:0,
            top:0,
            zIndex:2
        });
        var newImg = $('<img>').appendTo(obj).css({
            width:w,
            height:h,
            position: 'absolute',
            left:0,
            top:0,
            zIndex:1
        });

        var index = 0;
        aa();
        function aa() {
            // stop和delay最好不要一起使用

            oldImg.css({opacity: 1}).attr('src',arg.imgList[index]).delay(arg.step).animate({opacity:0},200,aa);
            index = ++index%arg.imgList.length;
            newImg.attr('src',arg.imgList[index]);
        }






        return this;
    }
})(jQuery);
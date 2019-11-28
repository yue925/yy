$(function($){
    $.fn.myPlugIn = function (userArg){

        var obj = this.eq(0);
        var arg = {
            imgList:[],
            step:3000,
        };

        $.extend(arg,userArg);
        obj.empty();
        if(obj.css('position')=='static'){
            obj.css({position:'relative'})
        }
        var maxLength =arg.imgList.length;
        var index = 0;
        var w = obj.innerWidth();
        var h = obj.innerHeight();

        obj.imgList.each(function (i,ele) {
            var Img =$('<img>').appendTo(obj).css({
                width:w,
                height:h,
                position: 'absolute',
                left:0,
                top:0,
                // zIndex:2
            });

        })


        aa();
        function aa() {
            index = (index++)%maxLength;
            setTimeout(function () {
                obj.animate({marginLeft:Img(index).position().left},1000,aa)
            },arg.step)
        }





        return this;
    }

})(jQuery);
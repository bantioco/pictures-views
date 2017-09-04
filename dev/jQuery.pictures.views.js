(function( $ ){

    $.fn.viewsPictures = function( options ) {

        /*************************************
            Options plugin..
        *************************************/
        var config= {
            "bgColor"   : "#BABABA",
            "speedImg"     : 800,
            "callback"  : null
        };
        var params = $.extend(config, options);
        /************************************/


        /*************************************
            Add background..
        *************************************/
        var block_background = '<div class="screen_bg" style="background-color:'+params.bgColor+'"></div>';
        $('body').append(block_background);
        /************************************/


        /*************************************
            Add block slide picture
        *************************************/
        var block_picture ='<div class="screen_root"><div class="screen_nav_left"></div><ul class="screen_block"></ul><div class="screen_nav_right"></div></div>';
        $('body').append(block_picture);
        /************************************/



        return this.find('img').each(function(i, e){

            var d = i+1;

            $(this).attr('data-screen', d)

            var src = $(e).attr('src');
            var id = i+1;

            $(document).find('.screen_root').children('ul.screen_block').append('<li data-screen="'+d+'" id="screen_'+id+'" class="screen_list"><img class="screen_img" src="'+src+'" /></li>');


            $('#screen_picture').find('img').off('click').on('click', function(){

                var c = $(this).attr('data-screen');

                $('.screen_bg').fadeIn(300, function(){
                    $('.screen_root').fadeIn(300, function(){ $('ul.screen_block').children('li[data-screen="'+c+'"]').slideDown(params.speedImg); })
                });
            })

            $(document).off('click', '.screen_bg').on('click', '.screen_bg', function(){
                $('ul.screen_block').children('li').fadeOut(300, function(){
                    $('.screen_root').fadeOut(300, function(){ $('.screen_bg').fadeOut(300); })
                })
            })

            $(document).off('click', '.screen_nav_right').on('click', '.screen_nav_right', function(){

                var g = $('ul.screen_block').children('li:visible').attr('data-screen')
                var o = parseInt(g)+1;

                $('ul.screen_block').children('li[data-screen="'+g+'"]').slideUp(params.speedImg)

                timeOut = params.speedImg + 100;

                if( o <= $('li.screen_list').length ){
                    setTimeout(function(){ $('ul.screen_block').children('li[data-screen="'+o+'"]').slideDown(params.speedImg); },timeOut)
                }
                else{
                    setTimeout(function(){ $('ul.screen_block').children('li:first').slideDown(params.speedImg); },timeOut)
                }

            })

            $(document).off('click', '.screen_nav_left').on('click', '.screen_nav_left', function(){

                var g = $('ul.screen_block').children('li:visible').attr('data-screen')
                var o = parseInt(g)-1;

                $('ul.screen_block').children('li[data-screen="'+g+'"]').slideUp(300)

                if( o >= 1 ){
                    setTimeout(function(){ $('ul.screen_block').children('li[data-screen="'+o+'"]').slideDown(300); },400)
                }
                else{
                    setTimeout(function(){ $('ul.screen_block').children('li:last').slideDown(300); },400)
                }

            })

       });



    }

})( jQuery );


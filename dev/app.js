import css from './pictures.views.css';

console.log( css )

jQuery( function( $ ){

    $(document).ready(function(){

        $('#screen_picture').viewsPictures({
            bgColor: "#FAFAFA",
            speedImg: 300,
            effectImg : "slide",
            navColor : "#555555"
        })
    })

})

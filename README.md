# pictures-views

Use example :
index.html
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <link rel="stylesheet" href="../build/assets/js/main.css">

</head>
<body>

    <div id="screen_picture">
        <div class="content-picture"><div class="in-content-picture"><img src="./A.jpg" alt=""></div></div>
        <div class="content-picture"><div class="in-content-picture"><img src="./B.jpg" alt=""></div></div>
        <div class="content-picture"><div class="in-content-picture"><img src="./C.jpg" alt=""></div></div>
        <div class="content-picture"><div class="in-content-picture"><img src="./D.jpg" alt=""></div></div>
    </div>


    <script src="./jquery.js"></script>
    <script src="../build/assets/js/lib.pack.js"></script>
    <script src="./app.js"></script>
</body>
</html>

```

app.js
```

jQuery( function( $ ){

    $(document).ready(function(){

        $('#screen_picture').viewsPictures({
            bgColor: "#FAFAFA",
            speedImg: 300,
            effectImg : "clip",
            navColor : "#555555"
        })
    })

})


```




Options :
```
//Implement jQuery ui effect..

$('#screen_picture').viewsPictures({
    bgColor: "#FAFAFA",
    speedImg: 300,
    effectImg : "slide",// slide, fade, bounce, clip, fold, puff
    navColor : "#555555"
})
```

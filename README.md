# pictures-views




Includes :
```
...
<head>
<link rel="stylesheet" href="./build/assets/css/pictures.views.css">
</head>
...

<script src="./build/assets/lib/jquery.js"></script>
<script src="./build/assets/js/jQuery.pictures.views.pack.js"></script>
</body>
```

Use example :
```
<div id="screen_picture">
    <div class="content-picture"><img src="./A.jpg" alt=""></div>
    <div class="content-picture"><img src="./B.jpg" alt=""></div>
    <div class="content-picture"><img src="./C.jpg" alt=""></div>
    <div class="content-picture"><img src="./D.jpg" alt=""></div>
</div>

$('#screen_picture').viewsPictures()
```


Options :
```
$('#screen_picture').viewsPictures({
    bgColor     : "red",
    speedImg    : 300,
    effectImg : "slide"// slide, fade, bounce
})
```

<!doctype html>
<html>
    <head>
        <title>Learning Javascript</title>
        <meta charset="utf-8" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <button id="textChanger">Change first div text</button>
        <div id="firstDiv">This is some text</div>
        <button id="textAppender">Append some text</button>
        <div id="secondDiv">Javascript is...</div>
        <button id="textCreator">Create some text</button>
        <div id="emptyDiv"></div>
        <script type="text/javascript">
            document.getElementById("textChanger").onclick=function() {
                document.getElementById("firstDiv").innerHTML="This is awesome!";
            }
document.getElementById("textAppender").onclick=function() {
document.getElementById("secondDiv").innerHTML=document.getElementById("secondDiv").innerHTML + "great!";
}
document.getElementById("textCreator").onclick=function() {
document.getElementById("emptyDiv").innerHTML="<ul><li>Cat</
li><li>Dog</li></ul>";
}
            </script>
    </body>
</html>
// Versioning CSS & Javascript with timestamp
function addTimestampToFile() {
    var timestamp = new Date().getTime();
    var cssFile = document.getElementById('css-file');
    var jsFile = document.getElementById('js-file');

    cssFile.href = cssFile.href + '?v=' + timestamp;
    jsFile.src = jsFile.src + '?v=' + timestamp;
}

addTimestampToFile()

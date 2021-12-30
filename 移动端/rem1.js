(function () {
    var styleNode = document.createElement("style");
    var Ww = document.documentElement.clientWidth;
    styleNode.innerHTML = "html{font-size:" + Ww / 10 + "px !important}"
    document.head.appendChild(styleNode)
})();
const {
    exec
} = require("child_process");

module.exports = function (url) {
    let open = "";
    switch (process.platform) {
        case "win32":
            open = "start";
            break;
        case "darwin":
            open = "open";
            break;
        case "linux":
            open = "xdg-open";
            break;
    }
    exec(open + " " + url)
}
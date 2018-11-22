const path = require('path');
const fs = require('fs');


let ext = process.argv[2];
let text = process.argv[3];
let res = 0;
if (ext && text) {
    fromDir('./', ext, text);
    if (res === 0) {
        console.log("No file was found");
    }
    else {
        console.log(results + " Result/s");
    }
} else {
    console.log("USAGE: node search [EXT] [TEXT]");
}

function fromDir(startPath, ext, text) {
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }
    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, ext, sTerm); //recurse
        }
        else if (filename.indexOf(ext) >= (filename.length - 3)) {
            var content = fs.readFileSync(filename, "utf8");
            if (content.includes(text)) {
                console.log("-Found - " + __dirname + "\\" + filename)
                results++;
            }
        };
    };
};
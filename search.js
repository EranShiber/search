const path = require('path');
const fs = require('fs');

let results = 0;
let ext = process.argv[2];
let sTerm = process.argv[3];
if(ext && sTerm) {
  fromDir('./',ext,sTerm);
  if( results===0) {
      console.log("No file was found");
  }
  else { console.log(results+" Result/s");

  }

} else {
  console.log("USAGE: node search [EXT] [TEXT]");
}

function fromDir(startPath,ext,sTerm){
    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);

    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,ext, sTerm); //recurse
        }
        else if (filename.indexOf(ext)>=(filename.length-3)) {
          var content = fs.readFileSync(filename,"utf8");
  if(content.includes(sTerm)) {
console.log("-Found - "+__dirname+"\\"+filename)
results++;
          }
       };
      };
   };

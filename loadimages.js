const fs = require('fs');

function getFILES() {
fs.readdir("./images" , (err , files) => {
    if (err) {
        console.log(err);
    }
    files.forEach(file => console.log(`Sucessfully loaded image ${file}`));
    
});
}


function writeJSON(file) {
}

module.exports = {getFILES}
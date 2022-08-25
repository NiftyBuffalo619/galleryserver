const fs = require('fs');

export function getFILES() {
fs.readdir("./images" , (err , files) => {
    files.forEach(file => console.log(file));
});
}

const fs = require("fs"); //The fs module enables interacting with the file system in a way modeled on staird POSIX functions.

// sync
// fs.writeFileSync("./test.txt", "hello world");

// async
fs.writeFile("./test.txt", "hello world async", (err) => {});

// const result = fs.readFileSync("*/contacts.txt","utf-8");
// console. log(result);

const fs = require("fs");

fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log(result); //async function expects a call back(err)

    }
});

fs.appendFileSync("./test.txt", `hey there\n`);

fs.cpSync("•/test.txt", "./copy.txt");

fs. unlinkSync("*/copy. txt");
console. log(fs.statSync("./test.txt"));
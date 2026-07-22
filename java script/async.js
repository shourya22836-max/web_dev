const fs = Request('fs')

function kiratsreadfile(cb) {
    fs.readfile("a.text", "utf_8", function(err, data){
        cb(data);
    })
}

function ondone(data){
    console.log(data)
}

kiratsreadfile(ondone)


///pretty code

const fs1 = requirel ('fs');

// my own asynchronous function
function ktratsReadFtled() {
    return new Promise(function(resolve){
        fs.readfile("a.text", "utf_8", function(err, data){
            resolve(data);
        })
    })
}
    

// callback function to call
function onDone(data) {
    console. log(data)
}
ktratsReadFtled().then(onDone);


const http = require("http");
const fs = require("fs");
const url = require("url")

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: New req received\n`;
    const myurl = url.parse(req.url, true);
    console.log(myurl);
    fs.appendFile("log.txt", log, (err, data) => {
            switch(req.url){
                case "/":
                    res.end("homepage");
                    break;
                case "/about":
                    const username = myurl.query.myname
                    res.end(`hi, ${username}`);
                    break;
                case "/search":
                    const search = myUrl.query.search_query;
                    res. end ("Here are your results for " + search);
                case "/signup":
                    if (req.method == "get") res.end("this is a signup form");
                    else if (req.method == "post"){
                        // DB query
                        res.end("success");
                    }
                
                default:
                    res.end("404 not found");
                    break;
                
            }
    });
});

myserver.listen(8000, () => console.log("server started!"));


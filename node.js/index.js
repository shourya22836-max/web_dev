// const http = require("http");
// const fs = require("fs");

// const myserver = http.createServer((req, res) => {
//     const log = `${Date.now()}: New req received\n`;
//     fs.appendFile("log.txt", log, (err, data) => {
//             switch(req.url){
//                 case "/":
//                     res.end("homepage");
//                     break;
//                 case "/about":
//                     res.end("i and shourya");
//                     break;
//                 default:
//                     res.end("404 not found");
//                     break;
//             }

//     });
//     // console.log("new req rec.");
//     // console.logr(req);
//     // console.log(req.headers);

//     // res.end("hello from server");
// });

// myserver.listen(8000, () => console.log("server started!"));


const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// middleware - plugin
app.use(express.urlencoded({extended: false}));

// handlar function
app.use((req, res, next) => {
    console.log("hello from middleware1")
    req.myusername = "shourya";
    next();
});

app.use((req, res, next) => {
    console.log("hello from middleware1")
    console.log("hello from middleware 2", req.myusername)
    next();
});

app.get("/api/users", (req, res)=> {
    return res.json(users);
});

// app.get("/api/users/:id", (req, res)=> {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id == id);
//     return res.json(user);
// });

// app.post("/api/users", (req, res)=> {
//     // TOOD: Edit the user with id 
//     return res.json({status: "pending"});
// });

// app.patch("/api/users", (req, res)=> {
//     // TOOD: Edit the user with id 
//     return res.json({status: "pending"});
// });

// app.delete("/api/users", (req, res)=> {
//     // TOOD: Edit the user with id 
//     return res.json({status: "pending"});
// });

app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        res.json(user);
    })
    .patch((req, res) => {
        // TOOD: Edit the user with id 
        res.json({ status: "pending" });
    })
    .delete((req, res) => {
        res.json({ status: "pending" });
    });


// app-get ("/users", (req, res) =>{
//     const html =
//     <ul>
//       ${users-map ((user) => `<li> ${user.first_name}</li>`
//     </ul>
    
//     res.send (html);
// });


app.listen(PORT, () => console.log(`server started at port ${PORT}`));


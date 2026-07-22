const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

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


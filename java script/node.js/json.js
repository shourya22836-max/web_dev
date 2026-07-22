const users1 = '("nane": "harkirat","age": "24", "gender":"mate"}' 
//this not a object anymore but a string now

console.log(users1["name"])
// we can not call name, now we need to show the index


////// now we need to use json - it convet this into like objects 

const users = '{"name": "harkirat", "age": "24", "gender": "male"}';
const user = JSON.parse(users);

console.log(user["gender"]);
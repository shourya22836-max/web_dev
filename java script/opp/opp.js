const user = {
    username: "shourya",
    logincount: 4,
    signin: true,
    
    getuserdetails: function(){
        console.log(`username: ${this.username}`);
        console.log(this);

    }
}

console.log(user.username);
console.log(user.getuserdetails());
console.log(this);


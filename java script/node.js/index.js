// const all_users = [{
//     first_name : "shourya",
//     gender : "male"
// },{
//     second_name : "utkarsh",
//     gender : "female"
// }
// ]
// for(let i = 0; i < all_users.length; i++){
//     if(all_users[i]["gender"] == "female")
//         console.log(all_users[i]["first_name"])
// }

////// THERE IS A ISSUE IN THE SECOND OBJECT //////

const all_users = [{
    first_name : "shourya",
    gender : "male"
},{
    first_name : "utkarsh",
    gender : "female"
}]

for(let i = 0; i < all_users.length; i++){
    if(all_users[i]["gender"] == "female")
        console.log(all_users[i]["first_name"])
}

const mongoose = require('mongoose');

const Chat=require("./models/chat.js");

main()
.then(()=>{
    console.log('connection succcessfull');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

Chat.insertMany([
    {
    from:"tarun",
    to:"rahul",
    msg:"I want money",
    created_at:new Date()
   },
   {
    from:"sham",
    to:"mohan",
    msg:"How are you ?",
    created_at:new Date()
   },
   {
    from:"Rohan",
    to:"adam",
    msg:"all the best !!",
    created_at:new Date()
   },
   {
    from:"Tony",
    to:"teena",
    msg:"Let's play",
    created_at:new Date()
   },
]);


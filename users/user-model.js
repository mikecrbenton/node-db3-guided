const db = require("../data/db-config")


// NO ERROR HANDLING IN MODEL FUNCTION - ONLY IN ROUTER/SERVER FILE CALLING THE 
// FUNCTION

function findPostsByUserId(userId) {

     // SELECT posts.id, posts.contents, users.username
      // FROM posts
      // JOIN users ON users.id = posts.user_id   // PRIMARY KEY = FOREIGN KEY
      // WHERE posts.user_id = <?>


      //  const posts = await db("posts as p")
      //  .innerJoin("users as u", "u.id", "p.user_id") // TABLE,  LEFT SIDE OF CONDITION, 
      //  .where("p.user_id", req.params.id)
      //  .select("p.id", "p.contents", "u.username")
      //DON'T NEED AWAIT 
         return db("posts as p")
         .innerJoin("users as u", "u.id", "p.user_id") // TABLE,  LEFT SIDE OF CONDITION, 
         .where("p.user_id", userId)
         .select("p.id", "p.contents", "u.username")

 }

module.exports = {
   findPostsByUserId
}
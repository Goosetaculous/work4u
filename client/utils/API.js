import axios from "axios";

const API = {
  // add new user
  addUser: function() {
    return axios.post("/user/add");
  },
  // add post to user array 
  // Object must be req.body.post  and  req.body.user_id
  addUserPost: function(obj) {
    return axios.post("/user/addpost", { text });
  }

export default API;


//NOTES

//     var newPost = req.body.post; 
//         var user = req.body.user_id;

//         ,
//   // Deletes a quote from the db
//   deleteQuote: function(id) {
//     return axios.delete(`/api/quotes/${id}`);
//   },
//   // Toggles a quote's favorite property in the db
//   favoriteQuote: function(quote) {
//     quote.favorited = !quote.favorited;
//     const { _id, favorited } = quote;
//     return axios.patch(`/api/quotes/${_id}`, { favorited });
//   }
// };

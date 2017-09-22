import axios from "axios";

const API = {

  addUser: (user)=> {
    return axios.post("/user/add", { user });
  },
  // add post to user array 
  // Object must be req.body.post  and  req.body.user_id

  addUserPost: (obj)=> {
    return axios.post("/user/addpost", { obj });
  },

  addSkill: (skill)=>{
    return axios.post("/user/addskill", { skill });
  }
}
export default API;

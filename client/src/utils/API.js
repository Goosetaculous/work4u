import axios from "axios";

const API = {

  addUser: (user)=> {
    return axios.post("/user/add", { user });
  },
  // add post to user array 
  // Object must be req.body.post  and  req.body.user_id

  addUserPost: (obj)=> {
    return axios.put("/user/addpost", { obj });
  },

  addSkill: (skill)=>{
    return axios.put("/user/addskill", { skill });
  },

  removeSkill: (skill)=>{
    return axios.put("user/removeskill", { skill });
  },

  addSkillArray: (skillarray)=>{
    return axios.put("user/addskillarray", { skillarray });
  },

  getUser: (user_id) =>{
    return axios.get(`user/getuser/${user_id}`)
  }
}
export default API;

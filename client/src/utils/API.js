import axios from "axios";

const API = {

  addUser: (user)=> {
    return axios.post("/user/add", { user });
  },

  addSkillArray: (skillarray)=>{
    return axios.put("/user/addskillarray", { skillarray });
  },

  getUserSkill: (user_id)=>{
    return axios.get(`/user/getuserskill/${user_id}`)
  },

  getUser: (user_id) =>{
    return axios.get(`/user/${user_id}`)
  },

  // Posts
  applyToPost: (user_id, job_id) => {
    return axios.patch("/job/apply", { user_id, job_id})
  },

  confirmPost: (job_id) => {
    return axios.patch("/job/confirm", { job_id})
  }


}
export default API;

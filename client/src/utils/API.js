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

  getAppliedJobs: (_id) => {
    return axios.get(`user/applied/${_id}`)
  },

  getAllJobs:(_id)=>{
    return axios.get(`/job/get/${_id}`)
  },

  // call to remove applicant from post. _id is post ID.
  removeApplicant: (job_id, user_id) => {
    return axios.patch("user/removeapplicant" , { job_id, user_id})
  },


  // Posts
  applyToPost: (user_id, job_id) => {
    return axios.patch("/job/apply", { user_id, job_id})
  },

  confirmPost: (job_id) => {
    return axios.patch("/job/confirm", { job_id})
  },

  findJobsByPosterId: (poster_id) => {
    console.log("135");
    console.log("Poster Id is " + poster_id);
    let a =  axios.post("/job/findByPosterId", {poster_id});
    console.log("item");
    console.log(a);
    return a;
  }

  

}
export default API;

import axios from "axios";

const API = {

  addUser: (user)=> {
    return axios.post("/user/add", { user });
  },

  addAJob: (job) => {
    return axios.post("/job/add", job);
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

  getUserbyId: (user_id) =>{
     return axios.get(`/user/byid/${user_id}`)
  },

  getAppliedJobs: (_id) => {
    return axios.get(`user/applied/${_id}`)
  },

  getAllJobs:(_id)=>{
    return axios.get(`/job/get/${_id}`)
  },

  getSearchJobs:(term,id)=>{

    return axios.post('/job/search', {term,id})
  },

  // call to remove applicant from post. _id is post ID.
  removeApplicant: (job_id, user_id) => {
    return axios.patch("user/removeapplicant" , { job_id, user_id})
  },

  applyToJob: (job_id, user_id) => {
    return axios.patch("user/apply", {job_id, user_id})
  },


  //==============================
  //  POSTS ROUTES
  //==============================

  getRecommendedJobs: (user_id,skills) => {
    return axios.post("job/recommended" , {user_id, skills})
  },


  applyToPost: (user_id, job_id) => {
    return axios.patch("/job/apply", { user_id, job_id})
  },

  confirmPost: (job_id) => {
    return axios.patch("/job/confirm", job_id)
  },

  findJobsByPosterId: (poster_id) => {
    return axios.post("/job/findByPosterId", {poster_id});
  },

  findJobsConfirmedByMe: (poster_id) => {
    console.log("API findJobsConfrimedByMe called" + poster_id);
    console.log(">>>>>>>>>");
    let a = axios.post("/job/findJobsConfirmedByMe", {poster_id});
    console.log(a);
    return a;
  },

  removeJobByIdAndRemoveApplicationById: (jobId, applicant) => {
    return axios.post("/job/cancel_posting_and_applicant", {jobId, applicant});
  },

  removeOnlyJobById: (jobId) => {
    console.log("API cancel job only hit");
    return axios.post("/job/cancel_posting", {jobId});
  },

  confirmJobById: (jobId) => {
    return axios.post("job/confirm", {jobId});
  },

  declineApplicantById: (jobId, applicantId) => {
    return axios.post("job/decline_application", {jobId, applicantId});
  },
  giveGoodReview: (jobId) => {
    return axios.post("/job/goodReview", {jobId});
  },
  giveBadReview: (jobId) => {
    return axios.post("/job/badReview", {jobId});
  }
}
export default API;

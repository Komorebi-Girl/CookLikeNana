import axios from "axios";

export default {
  checkLogin: async function(eaddress, pass){
    return axios.post("/api/login", {email:eaddress, password:pass});
  },
  grabNanaData: function(){
    return axios.post("/api/getnanadata");
  },
  grabUserData: function(){
    return axios.post("/api/getuserdata");
  },
  getNanabyID: function(id) {
    return axios.get("/api/nana/" + id);
  },  
  getUserbyID: function(id) {
    return axios.get("/api/user/" + id);
  },
  getNanaCalendar: function(id) {
    return axios.get("/api/nanacalendar/" + id);
  },
  getNanas: function(searchparams) {
    console.log("Search Parameters");
    console.log(searchparams);
    return axios.post("/api/nanas", searchparams);
  },
  saveNana: function(savedata) {
    console.log("Save Nana data");
    console.log(savedata);
    return axios.post("/api/nana", savedata);
  },
  saveUser: function(savedata) {
    console.log("Save User data");
    console.log(savedata);
    return axios.post("/api/user", savedata);
  }
}


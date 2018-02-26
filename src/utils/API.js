import axios from "axios";

export default {
  signUp: function(eaddress, pass){
    return axios.post("/api/signup", {email:eaddress, password:pass});
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
  },
  getNanabyID: function(id) {
    return axios.get("/api/nana/" + id);
  }
}


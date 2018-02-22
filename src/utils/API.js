import axios from "axios";

export default {
  signUp: function(eaddress, pass){
    return axios.post("/api/signup", {email:eaddress, password:pass});
  },

  getNana: function(id) {
    return axios.get("/api/nana/" + id);
  },
  saveNana: function(nanaData) {
    return axios.post("/api/nanas", nanaData);
  },
  getNanas: function(searchparams) {
    console.log("Search Parameters");
    console.log(searchparams);
    return axios.post("/api/nanas", searchparams);
  }  
}


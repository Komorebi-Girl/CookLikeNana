import axios from "axios";

export default {

  getNanas: function() {
    return axios.get("/api/nanas");
  },
  getNana: function(id) {
    return axios.get("/api/nana/" + id);
  },
  saveNana: function(nanaData) {
    return axios.post("/api/nanas", nanaData);
  }
};


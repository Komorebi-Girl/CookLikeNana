import axios from "axios";

export default {
  checkLogin: async function(eaddress, pass) {
    return axios.post("/api/login", { email: eaddress, password: pass });
  },
  grabNanaData: function() {
    return axios.post("/api/getnanadata");
  },
  grabUserData: function() {
    return axios.post("/api/getuserdata");
  },

  findTimeSlot: function(day, time) {
    return axios.post("/api/findtimeslot", {
      availableday: day,
      availabletime: time
    });
  },

  createTimeSlot: function(day, time, id) {
    return axios.post("/api/createtimeslot", {
      nanaid: id,
      availableday: day,
      availabletime: time
    });
  },

  deleteTimeSlot: function(day, time, id) {
    return axios.post("/api/deletetimeslot", {
      nanaid: id,
      availableday: day,
      availabletime: time
    });
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
  saveBooking: function(savebooking) {
    return axios.post("/api/savebooking", savebooking);
  },
  deleteBooking: function(deletebooking) {
    return axios.post("/api/deletebooking", deletebooking);
  },
  getBookings: function(id) {
    return axios.get("/api/bookings/" + id);
  },
  getNanas: function(searchparams) {
    console.log("Search Parameters here");
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
};

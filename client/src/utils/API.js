import axios from "axios";

//REMINDER: parameters are index #s

export default {
  getMonster: function(monsters) {
    return axios.get("http://dnd5eapi.co/api/monsters/" + monsters);
  },
  getSpell: function(spells) {
    return axios.get("http://dnd5eapi.co/api/spells/" + spells);
  },
  getClass: function(classes) {
    return axios.get("http://dnd5eapi.co/api/classes/" + classes);
  },
  getfeautre: function(features) {
    return axios.get("http://dnd5eapi.co/api/features/" + features);
  },
  // Gets all character sheets
  getCharsheet: function() {
    return axios.get("/api/charsheet");
  },
  // Gets the character sheet with the given id
  getCharsheet: function(id) {
    return axios.get("/api/charsheet/" + id);
  },
  // Deletes the character sheet with the given id
  deleteCharsheet: function(id) {
    return axios.delete("/api/charsheet/" + id);
  },
  // Saves a character sheet to the database
  saveCharsheet: function(CharSheetData) {
    return axios.post("/api/charsheet", CharSheetData);
  }
};

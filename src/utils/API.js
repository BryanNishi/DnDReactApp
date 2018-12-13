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
  }
};

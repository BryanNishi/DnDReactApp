import axios from "axios";

//REMINDER: parameters are index #s

function determineEnv() {
  if (window.location.hostname === 'localhost') {
    return 'DEV';
  } else if (window.location.hostname === 'http://stark-spire-22309.herokuapp.com/') {
    return 'PROD';
  }
}

function determineBackendHost() {
  if (determineEnv() === 'DEV') {
    return 'http://localhost:3001';
  } else if (determineEnv() === 'PROD') {
    return 'http://stark-spire-22309.herokuapp.com/';
  }
}

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
  getStartingEquipment: function(classIndex){
    return axios.get("http://www.dnd5eapi.co/api/startingequipment/" + classIndex)
  },
  getfeature: function(features) {
    return axios.get("http://dnd5eapi.co/api/features/" + features);
  },
  getInn: function() {
    return axios.get("/api/inn");
  },
  getLand: function() {
    return axios.get("/api/land");
  },
  getDungeon: function() {
    return axios.get("/api/dungeon");
  },
  getTreasure: function() {
    return axios.get("/api/treasure");
  },
  getName: function() {
    return axios.get("/api/name");
  },
  getUser: function(){
    return axios.get("/api/user")
  },  
  postUser: function(data){
  return axios.post(`${determineBackendHost()}/api/user`,data)
  } 

};


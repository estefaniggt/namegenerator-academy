/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["el", "ella", "su", "tu", "nuestro", "mi"];
  let adj = [
    "amable",
    "responsable",
    "sincero",
    "generoso",
    "afectuosa",
    "simpático"
  ];
  let noun = ["perro", "lujuria", "botella", "reloj", "taladro", "pez"];
  let dotSom = [".com", ".ve", ".lov", ".devs", ".my", ".net"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let ds = 0; ds < dotSom.length; ds++) {
          console.log(pronoun[p] + adj[a] + noun[n] + dotSom[ds]);
        }
      }
    }
  }
};

//let excuseP = document.querySelector("#excuse");
//excuseP.textContent =
//pronoun[Math.floor(Math.random() * 6)] +
// adj[Math.floor(Math.random() * 6)] +
//noun[Math.floor(Math.random() * 6)] +
//dotSom[Math.floor(Math.random() * 6)];

//console.log(excuseP);

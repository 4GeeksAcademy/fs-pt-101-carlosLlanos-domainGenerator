import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 // declarar variables
const noun = ['pc', 'component', 'domain', 'generator']
const adj = ['fast', 'tecnic', 'unique', 'dinamic']
const exten = ['.com', '.es', '.net', '.org', '.io']

// funcion de bucle for...in
for (let i in noun) {
  for (let j in adj) {
    for (let k in exten) {
      console.log('for in', noun[i] + adj[j] + exten[k])
    }
  }
}
};

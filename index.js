let rootEl = document.getElementById("root");

let paraEl = document.createElement("p");
paraEl.textContent = "Dynamically created para element";
paraEl.style.color = "green";

function addElement(){
    
    rootEl.appendChild(paraEl);
}

function removeElement() {
  rootEl.removeChild(paraEl);
}
const h2 = document.createElement("h2");
h2.textContent = " ";
document.querySelector("body").appendChild(h2);

const b=document.getElementById("description");
const info=document.getElementsByClassName("Info");
const state=document.getElementsByClassName("State");
b.addEventListener("click", displayDate);
filter=0; 

function displayDate() {
    if (filter===0) {
        filter=1;
        b.textContent="Show description";
        for (const element of info) {
            element.style.visibility="hidden";
        }
        for (const element of state) {
            element.style.height = "400px";
        }
        /*info[0].style.visibility="hidden";*/
        
    }
    else {
        filter=0;
        b.textContent="Hide description";
        for (const element of info) {
            element.style.visibility="visible";
        }  
        for (const element of state) {
            element.style.height = "initial";
        }
    }
}



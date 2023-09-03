function addNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")

    let weAddButtonOb = document.getElementById("weAddButton");
    weAddButtonOb.parentNode.insertBefore(newNode,weAddButtonOb);

}

function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")

    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqAddButtonOb.parentNode.insertBefore(newNode,aqAddButtonOb);

}

// generateCV

function generateCV(){

    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = nameField;
    nameT1.innerHTML = nameField;

    let contactField = document.getElementById("contactField").value;
    document.getElementById("contactT").innerHTML = contactField;

    let addressField = document.getElementById("addressField").value;
    document.getElementById("addressT").innerHTML = addressField;

    let githubField = document.getElementById("githubField").value;
    document.getElementById("gitT").innerHTML = githubField;

    let linkedinField = document.getElementById("linkedinField").value;
    document.getElementById("linkedT").innerHTML = linkedinField;

    let instaField = document.getElementById("instaField").value;
    document.getElementById("instaT").innerHTML = instaField;

    let objectiveField = document.getElementById("objectiveField").value;
    document.getElementById("objectiveT").innerHTML = objectiveField;

    // we

    let we = document.getElementsByClassName("weField");

    let str = "";
    for(let e of we){
        str = str + `<li> ${e.value} </li>` ;
    }

    document.getElementById("weT").innerHTML = str;

    // aq

    let aq = document.getElementsByClassName("eqField");

    let tr = "";
    for(let e of aq){
        tr = tr + `<li> ${e.value} </li>` ;
        console.log(e.value);
    }

    document.getElementById("aqT").innerHTML = tr;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

}

// printcv
function printcv(){
    window.print();
}
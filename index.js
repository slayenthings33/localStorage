/*************DOM LINKING**************/

let uploadButton = document.getElementById("uploadButton");
let clearButton = document.getElementById("clearButton");
// let removeButton = document.getElementById("removeButton");
// let removeInput = document.getElementById("removeInput");
let uploadSection = document.getElementById("uploadSection");

/*************EVENT LISTENERS**************/

// uploadButton.addEventListener("click", upload);
// uploadButton.addEventListener("click", displayInput);
removeButton.addEventListener("click", removeItem);
clearButton.addEventListener("click", clearLocal)
uploadButton.addEventListener("click", () => {
    upload();     
    displayInput();
    console.log("event listener"); 
});


/*************FUNCTIONS**************/

function removeItem() {
    let toDelete = document.getElementById("removeInput").value;
    localStorage.removeItem(toDelete);
    // console.log("function: removeItem");
}

function upload() {
    console.log("function: upload")
    let fullNameInput = document.getElementById("fullName").value;
    let emailInput = document.getElementById("email").value;
    let phoneInput = document.getElementById("phoneNumber").value;

    localStorage.setItem("fullName", fullNameInput);
    localStorage.setItem("email", emailInput);
    localStorage.setItem("phone", phoneInput);    
};

function displayInput() {
    let fullName = localStorage.getItem("fullName");
    let email = localStorage.getItem("email");
    let phoneNumber  = localStorage.getItem("phone");
    let info = `
    <li>${fullName}</li>
    <li>${email}</li>
    <li>${phoneNumber}</li>
    `;
    uploadSection.innerHTML += info;
    // console.log("function: displayInput")
};

    function clearLocal() {
    localStorage.clear();
    uploadSection.innerHTML = "";
    // console.log("function: clearLocal");
    };

/*************DOM LINKING**************/

let uploadButton = document.getElementById("uploadButton");
let clearButton = document.getElementById("clearButton");
let uploadSection = document.getElementById("uploadSection");

/*************EVENT LISTENERS**************/

// uploadButton.addEventListener("click", upload);
// uploadButton.addEventListener("click", displayInput);
clearButton.addEventListener("click", clearLocal)
uploadButton.addEventListener("click", () => {
    upload();     
    displayInput();
    console.log("event listener"); 
});


/*************FUNCTIONS**************/


 function upload() {
     console.log("function: upload")
     let fullNameInput = document.getElementById("fullName").value;
     let emailInput = document.getElementById("email").value;
     let phoneInput = document.getElementById("phoneNumber").value;
     console.log(phoneInput);
     localStorage.setItem("fullName", fullNameInput);
     localStorage.setItem("email", emailInput);
     localStorage.setItem("phone", phoneInput);    
    };
    
    function displayInput() {
        let fullNameInput = localStorage.getItem("fullName");
        let emailInput = localStorage.getItem("email");
        let phoneInput  = localStorage.getItem("phone");
        let info = `
        <li>${fullNameInput}</li>
        <li>${emailInput}</li>
        <li>${phoneInput}</li>
        `;
        uploadSection.innerHTML += info;
        console.log("function: displayInput")
    };
    

    function clearLocal() {
    localStorage.clear();
    info;
    uploadSection.innerHTML += info;
    console.log("function: clearLocal");
    };

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
    // console.log("event listener"); 
});


/*************FUNCTIONS**************/

let array = [];
displayInput();

function removeItem() {
    let toDelete = document.getElementById("removeInput").value;
    localStorage.removeItem(toDelete);
    console.log("function: removeItem");
    uploadSection -= toDelete;
};

function displayInput() {
    let form = document.getElementById("form");
    let fullName = localStorage.getItem("fullNameInput");
    // let email = localStorage.getItem("email");
    // let phoneNumber  = localStorage.getItem("phone");
    // let parsedInfo = JSON.parse(localStorage.getItem(localStorage));
    // console.log(parsedInfo);
    let fullNameInput=document.getElementById("fullName").value;
    let parsedData=JSON.parse(localStorage.getItem(fullNameInput))
    
    if(parsedData!=null){
        let userInfo=`<p><b>Name:</b> ${parsedData[0]} <b>Email:</b> ${parsedData[1]} <b>Phone:</b> ${parsedData[2]}</p>`
    uploadSection.innerHTML += userInfo;
    form.reset();
}


//     let userInfo = `
//     <p>${JSON.parse(localStorage.getItem("fullNameInput"))}</p>
//     `;

    // console.log(array);
    // console.log("function: displayInput")
};

function upload() {
    array = [];
    console.log("function: upload")
    let fullNameInput = document.getElementById("fullName").value;
    let emailInput = document.getElementById("email").value;
    let phoneInput = document.getElementById("phoneNumber").value;
    array.push(fullNameInput, emailInput, phoneInput);
    console.log(array);
    localStorage.setItem(fullNameInput,JSON.stringify(array));
    displayInput();
    // localStorage.setItem("email", emailInput);
    // localStorage.setItem("phone", phoneInput);  
};

function clearLocal() {
    localStorage.clear();
    uploadSection.innerHTML = "";
    console.log("function: clearLocal");
};


document.getElementById("blank").addEventListener("click", function(event) {
    event.preventDefault();
    
    window.location.href = "about:blank";
});
document.getElementById("blank2").addEventListener("click", function(event) {
    event.preventDefault();
    
    window.location.href = "about:blank";
});
document.getElementById("blank3").addEventListener("click", function(event) {
    event.preventDefault();
    
    window.location.href = "about:blank";
});

document.getElementById("blank4").addEventListener("click", function(event) {
    
    
    event.preventDefault();
    
    window.location.href = "about:blank";
});
document.getElementById('contactFormSection').style.display = 'block';




function fetchCourse() {
    const courseSelect = document.getElementById('course-select');
    const url = "https://run.mocky.io/v3/e1761697-adf5-494c-bcbe-b1edcd6c7588";
    fetch(url).then(async (res) => {
        const items = await res.json();
        items.forEach(item => { generateOption(item.id, item.course, courseSelect) });
    });
}

function generateOption(value, text, selectDom) {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    selectDom.appendChild(option);
}

window.addEventListener('load', () => {
    fetchCourse();
});

function fetchCity(){
    const citySelect = document.getElementById('city-select')
    const url = "https://run.mocky.io/v3/d12b77cb-86bf-4aa1-a0dc-5ca3fd4cc4e7"
    fetch(url).then(async(res) =>{
        const items = await res.json()
        items.forEach(item => {generateOption(item.id,item.city,citySelect)})
    })
}
function generateOption (value,text,selectDom){
    const option = document.createElement("option")
    option.text = text
    option.value = value
    selectDom.appendChild(option)
}

window.addEventListener('load',()=>{
    fetchCity()
});



var emailInput = document.getElementById("exampleFormControlInput3");

    emailInput.addEventListener("blur", function () {
        if (!isValidEmail(emailInput.value)) {
            emailInput.placeholder = "Enter a valid email";
        }
    });


    document.querySelector('form').addEventListener('submit', function (event) {
        if (!isValidEmail(emailInput.value)) {
            event.preventDefault();
            alert("Please enter a valid email address");
        }
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }



    var phoneNumberInput = document.getElementById("exampleFormControlInput4");

    phoneNumberInput.addEventListener("blur", function () {
        if (!isValidPhoneNumber(phoneNumberInput.value)) {
            phoneNumberInput.placeholder = "Enter a correct phone number";
        }
    });

    document.querySelector('form').addEventListener('submit', function (event) {
        if (!isValidPhoneNumber(phoneNumberInput.value)) {
            event.preventDefault();
            alert("Please enter a correct phone number");
        }
    });

    
    function isValidPhoneNumber(phoneNumber) {
        var phoneRegex = /^(?:\+90|90)\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }

    // function submitForm() {
    //     var emailInput = document.getElementById("exampleFormControlInput3");
    //     var phoneNumberInput = document.getElementById("exampleFormControlInput4");
        

    //     if (isValidEmail(emailInput.value) && isValidPhoneNumber(phoneNumberInput.value)) {
    //         window.location.href = "index2.html";
    //     } else {
    //         alert("Please check your form and be sure everything has filled");
    //     }
    // }
    
    function submitForm() {
    var titleInput = document.getElementById("exampleFormControlInput1");
    var nameInput = document.getElementById("exampleFormControlInput2");
    var emailInput = document.getElementById("exampleFormControlInput3");
    var phoneNumberInput = document.getElementById("exampleFormControlInput4");

    if (titleInput.value.trim() === '') {
        alert('Title cannot be empty');
        return;
    }

    if (nameInput.value.trim() === '') {
        alert('Name cannot be empty');
        return;
    }

    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!isValidPhoneNumber(phoneNumberInput.value)) {
        alert('Please enter a correct phone number');
        return;
    }

    // If all validations pass, redirect to the next page
    window.location.href = "index2.html";
}

document.getElementById("button").addEventListener("click", submitForm);

    
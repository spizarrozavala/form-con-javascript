let form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let cardNumber = document.getElementById('cardNumber');
    let CVC = document.getElementById('CVC');
    let amount = document.getElementById('amount');
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let city = document.getElementById('city');
    let state = document.getElementById('state');
    let postalCode = document.getElementById('postalCode');
    let missing = document.getElementById('missing');
    let missingMessage = "";


    if (cardNumber.value === '' || cardNumber.value == null) {
        // console.log("cardNumber")
        cardNumber.style.backgroundColor = '#f8d7da';
        missingMessage = missingMessage + "Numero de tarjeta <br>";
    } else {
        cardNumber.style.background = "";
    }
    if (CVC.value === '' || CVC.value == null) {
        // console.log("CVC")
        CVC.style.backgroundColor = '#f8d7da';
        missingMessage = missingMessage + "CVC <br>";
    } else {
        CVC.style.background = "";
    }
    if (amount.value === '' || amount.value == null) {
        // console.log("amount")
        amount.style.backgroundColor = '#f8d7da';
        missingMessage = missingMessage + "Monto <br>";
    } else {
        amount.style.background = "";
    }
    if (firstName.value === '' || firstName.value == null) {
        // console.log("firstName")
        firstName.style.backgroundColor = '#f8d7da';
        missingMessage = missingMessage + "Nombres <br>";
    } else {
        firstName.style.background = "";
    }
    if (lastName.value === '' || lastName.value == null) {
        // console.log("lastName")
        lastName.style.backgroundColor = '#f8d7da';
        missingMessage = missingMessage + "Apellidos <br>";
    } else {
        lastName.style.background = "";
    }

    if (city.value === '' || city.value == null) {
        // console.log("city")
        city.style.backgroundColor = '#f8d7da';
        missingMessage = missingMessage + "Ciudad <br>";
    } else {
        city.style.background = "";
    }
    if (state.value === "") {
        // console.log("state")
        state.style.backgroundColor = '#f8d7da';
        console.log(state);
        missingMessage = missingMessage + "Region <br>";

    } else {
        state.style.background = "";
    }
    if (postalCode.value === '' || postalCode.value == null) {
        // console.log("postalCode")
        postalCode.style.backgroundColor = '#f8d7da';
        missingMessage = missingMessage + "Codigo Postal <br>";
    } else {
        postalCode.style.background = "";
    }
    if (missingMessage != "") {
        missing.innerHTML = "los siguientes campos son requeridos: <br>" + missingMessage;
        missing.classList.remove('d-none');
    } else {
        missing.classList.add('d-none');

        form.submit();
    }
})
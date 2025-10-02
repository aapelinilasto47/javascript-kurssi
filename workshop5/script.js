function validateForm() {

    let email = document.querySelector("#email");
    let comment = document.querySelector("#comment");

    let errorEmail = document.querySelector("#emailError");
    let errorComment = document.querySelector("#commentError");


    let emailValue = email.value;
    let commentValue = comment.value;

    if (emailValue.length < 6 || emailValue.length > 15 || !emailValue.includes("@")) {
        alert("Invalid email address or comment. Email address should be between 6 and 15 characters and contain '@'.");
        email.style.border = "2px solid red";
        comment.style.border = "";
        errorEmail.innerHTML = "<p style = 'color: red; font-size: 12px;'>Invalid email address. Email address should be between 6 and 15 characters and contain '@'.</p>";
        errorComment.innerHTML = "";

        return false;
    }

    else if(commentValue.trim() === "" || commentValue.length > 50) {
        alert("Invalid comment. Comment should not be empty and should be less than 50 characters.");
        comment.style.border = "2px solid red";
        email.style.border = "";
        errorComment.innerHTML = "<p style = 'color: red; font-size: 12px;'>Invalid comment. Comment should not be empty and should be less than 50 characters.</p>";
        errorEmail.innerHTML = "";
        return false;
    }
    else{
        alert("Email: " + emailValue + "\nComment: " + commentValue);
        email.style.border = "";
        comment.style.border = "";
        errorEmail.innerHTML = "";
        errorComment.innerHTML = "";

    }

    return true;
}

function checkSubscription() {
    let subType = document.querySelector("#type");
    let subValue = subType.value;

    let years = document.querySelector("#years");
    let yearsValue = years.value;

    let costForm = document.querySelector("#cost");
    let costValue = costForm.value;

    let discountMessage = document.querySelector("#discountMessage");
    discountMessage.innerHTML = "";
    

    if (subValue === "basic") {
        if (yearsValue > 1) {
            costValue = 10 * yearsValue * 0.8;
            discountMessage.innerHTML = "<p style = 'color: green; font-size: 12px;'>You received a 20% discount!</p>";
        
            if (yearsValue > 4) {

                costValue = costValue - 5;
                alert("You received an extra 5€ discount! Congratulations!");

            }
        }

        else {
            costValue = 10 * yearsValue;
        }
    }
    else if (subValue === "premium") {
        if (yearsValue > 1) {
            costValue = 15 * yearsValue * 0.8;
            discountMessage.innerHTML = "<p style = 'color: green; font-size: 12px;'>You received a 20% discount!</p>";
        
            if (yearsValue > 4) {

                costValue = costValue - 5;
                alert("You received an extra 5€ discount! Congratulations!");
            }
        }
        else {
            costValue = 15 * yearsValue;
        }
    }
    else if (subValue === "gold") {
        if (yearsValue > 1) {
            costValue = 20 * yearsValue * 0.8;
            discountMessage.innerHTML = "<p style = 'color: green; font-size: 12px;'>You received a 20% discount!</p>";
        
            if (yearsValue > 4) {

                costValue = costValue - 5;
                alert("You received an extra 5€ discount! Congratulations!");
            }
        }
        else {
            costValue = 20 * yearsValue;
        }
    }
    else if (subValue === "platinum") {
        if (yearsValue > 1) {
            costValue = 25 * yearsValue * 0.8;
            discountMessage.innerHTML = "<p style = 'color: green; font-size: 12px;'>You received a 20% discount!</p>";
        
            if (yearsValue > 4) {

                costValue = costValue - 5;
                alert("You received an extra 5€ discount! Congratulations!");
            }
        }
        else {
            costValue = 25 * yearsValue;
        }
    }
    else {
        alert("Please select a subscription type.");
    }

    costForm.value = costValue;

}

function calculate(){
    let quantity = document.querySelector("#quantity");
    let price = document.querySelector("#price");
    let tax = document.querySelector("#tax");
    let discount = document.querySelector("#discount");
    let total = document.querySelector("#total");

    let basePrice = quantity.value * price.value;
    let taxAmount = basePrice * (tax.value / 100);
    let totalPriceBeforeDiscount = basePrice + taxAmount;
    let discountAmount = totalPriceBeforeDiscount * (discount.value / 100);
    let totalPrice = totalPriceBeforeDiscount - discountAmount;

    total.value = totalPrice.toFixed(2);
}
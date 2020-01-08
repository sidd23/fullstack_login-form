(function () {
    let abstractTag;

    let pswdInput = document.getElementById("pswd");
    let message = document.getElementById("message");

    let upLetter = document.getElementById("upLetter");
    let lowLetter = document.getElementById("lowLetter");
    let number = document.getElementById("number");
    let length = document.getElementById("length");

    var validators = {
        lowerCaseLetters: /[a-z]/g,
        upperCaseLetters: /[A-Z]/g,
        numbers: /[0-9]/g,
        length: 8
    }

    class AbstractTag {
        addClass(tag, className) {
            tag.classList.add(className);
        }
        removeClass(tag, className) {
            tag.classList.remove(className)
        }
        addEvent(tag, event, callback) {
            tag.addEventListener(event, callback);
        }
    }

    // Check if password validators hold valid
    function validatePswd() {
        // Validate uppercase characters
        if (pswdInput.value.match(validators.upperCaseLetters)) {
            abstractTag.removeClass(upLetter, "invalid");
            abstractTag.addClass(upLetter, "valid");
        } else {
            abstractTag.removeClass(upLetter, "valid");
            abstractTag.addClass(upLetter, "invalid");
        }

        // Validate lowercase characters
        if (pswdInput.value.match(validators.lowerCaseLetters)) {
            abstractTag.removeClass(lowLetter, "invalid");
            abstractTag.addClass(lowLetter, "valid");
        } else {
            abstractTag.removeClass(lowLetter, "valid");
            abstractTag.addClass(lowLetter, "invalid");
        }

        // Validate numbers
        if (pswdInput.value.match(validators.numbers)) {
            abstractTag.removeClass(number, "invalid");
            abstractTag.addClass(number, "valid");
        } else {
            abstractTag.removeClass(number, "valid");
            abstractTag.addClass(number, "invalid");
        }

        // Validate length
        if (pswdInput.value.length >= validators.length) {
            abstractTag.removeClass(length, "invalid");
            abstractTag.addClass(length, "valid");
        } else {
            abstractTag.removeClass(length, "valid");
            abstractTag.addClass(length, "invalid");
        }
    }

    // Validate input entered in password field
    var keyupCallback = function() {
        validatePswd();
    }

    // Display message when password input field is clicked
    var focusCallback = function() {
        message.style.display = "block";
    }

    // Hide message when user clicks outside password input field
    var blurCallback = function() {
        message.style.display = "none";
    }

    // Add required event listeners
    function eventListeners() {
        abstractTag.addEvent(pswdInput, 'keyup', keyupCallback);
        abstractTag.addEvent(pswdInput, 'focus', focusCallback);
        abstractTag.addEvent(pswdInput, 'blur', blurCallback)
    }

    abstractTag = new AbstractTag();
    eventListeners();
})();
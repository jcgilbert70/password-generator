//Assignment Code

/*
#1 prompt user for the password criteia
    a) password length 8 < 128
    b) include special characters
    c) include numbers
    d) include lowercase
    e) include uppercase
#2 validate the input
#3 generate password based on criteria
    a) collect all variable arrays
    b) random generate passwod from available variables
#4 display password
*/

// possible character arrays
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// declarations
var confirmLength = "";
var confirmSpecialChar;
var confirmNumericChar;
var confirmLowercase;
var confirmUppercase;

// alert to inform user how to begin
alert("Click on Generate Password to begin your random password creation")

// (#1) prompt password creation
function generatePassword() {
    console.log("button pressed")
    // (#1-a user entered password length)
    var confirmLength = (prompt("Please enter how many characters will your password contain"));
    console.log("User selected " + confirmLength + " characters for password")
    while (confirmLength < 8 || confirmLength > 128) {
        alert("Must select length for password between 8 and 128 characters");
        var confirmLength = (prompt("How many characters will your password contain"));
    }

    // (#1-b) user picks to use special characters
    var confirmSpecialChar = confirm("Click OK to confrim if your password will include special characters");
    console.log("did user add special characters: " + confirmSpecialChar)

    //  (#1-c) user picks to use numbers
    var confirmNumericChar = confirm("Click OK to confrim if your password will include numeric characters");
    console.log("did user add numbers: " + confirmNumericChar)

    // (#1-d) user picks to use lowercase characters
    var confirmLowercase = confirm("Click OK to confrim if your password will include lowercase characters");
    console.log("did user add lowercase characters: " + confirmLowercase)

    // (#1-e) user picks to use uppercase characters
    var confirmUppercase = confirm("Click OK to confrim if your password will include uppercase characters");
    console.log("did user add uppercase characters: " + confirmUppercase)

    // (#2) validates viable options were selected or returns message to try again
    while (confirmSpecialChar === false && confirmNumericChar === false && confirmLowercase === false & confirmUppercase === false) {
        alert("You must select at least one option for your password")
        var confirmSpecialChar = confirm("Click OK to confrim if your password will include special characters");
        console.log("did user add special characters: " + confirmSpecialChar)
        var confirmNumericChar = confirm("Click OK to confrim if your password will include numeric characters");
        console.log("did user add numbers: " + confirmNumericChar)
        var confirmLowercase = confirm("Click OK to confrim if your password will include lowercase characters");
        console.log("did user add lowercase characters: " + confirmLowercase)
        var confirmUppercase = confirm("Click OK to confrim if your password will include uppercase characters");
        console.log("did user add uppercase characters: " + confirmUppercase)
    }

    // (#3-a) collecting all variables from arrays based on users decisions
    var passwordChar = []
    // if password will contain special characters is true bring in array for use
    if (confirmSpecialChar) {
        passwordChar = passwordChar.concat(specialChar)
        console.log("special characters added, show all elements in array: " + specialChar)
    }
    // if password will contain numbers is true bring in array for use
    if (confirmNumericChar) {
        passwordChar = passwordChar.concat(numbers)
        console.log("numbers added, show all elements in array: " + numbers)
    }
    // if password will contain lowercase characters is true bring in array for use
    if (confirmLowercase) {
        passwordChar = passwordChar.concat(lowercase)
        console.log("lowercase characters added, show all elements in array: " + lowercase)
    }
    // if password will contain uppercase characters is true bring in array for use
    if (confirmUppercase) {
        passwordChar = passwordChar.concat(uppercase)
        console.log("uppercase characters added, show all elements in array: " + uppercase)
    }

    // just lists the full array of available variables for password generation
    console.log("full list of all variables used to create password: " + passwordChar)

    // code to fill randomPassword in loop from available variables
    var randomPassword = ""

    // (#3-b) generates password per legth given by user, by randomly selecting from variables made available by user
    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
        console.log(randomPassword)
    }

    // (#4) code here, then return result var
    return randomPassword;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);
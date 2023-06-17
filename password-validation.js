
function validatePassword(n, password) {
    // Return the minimum number of characters to make the password strong

    // n => the length of password

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const lower_case = "abcdefghijklmnopqrstuvwxyz"
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special_characters = "!@#$%^&*()-+"
    let isValidPassword = false;
    if (password.length >= n) {
        let results = [containsNumber(password), containsLowerCase(password), containsUpperCase(password), containsSymbol(password)];
        isValidPassword = results.filter(x=> x===false).length == 0;
    }

    return isValidPassword;
    // else{
    //     // first check difference between password length and n

    //     let differenceCount = n - password.length;

    //     let results = [containsNumber(password), containsLowerCase(password), containsUpperCase(password), containsSymbol(password)];

    //     // "Ma1%"
    //     if(results.every(x=> x=== true)){
    //         return differenceCount;
    //     }
    //     else{
    //         let invalidAttempts = results.filter(x=>x ===false).length;

    //         if(invalidAttempts <= differenceCount){
    //             return differenceCount;
    //         }
    //         else{
    //             return invalidAttempts;
    //         }

    //     }
    // }

    function containsNumber(pass) {
        let result = false;
        for (let i = 0; i < pass.length; i++) {
            if (numbers.some(x => x == pass[i])) {
                result = true;
                break;
            }
        }

        return result;
    }

    function containsLowerCase(pass) {
        let result = false;
        for (let i = 0; i < pass.length; i++) {
            if (lower_case.includes(pass[i])) {
                result = true;
                break;
            }
        }
        return result;
    }

    function containsUpperCase(pass) {
        let result = false;
        for (let i = 0; i < pass.length; i++) {
            if (upper_case.includes(pass[i])) {
                result = true;
                break;
            }
        }
        return result;
    }

    function containsSymbol(pass) {
        let result = false;
        for (let i = 0; i < pass.length; i++) {
            if (special_characters.includes(pass[i])) {
                result = true;
                break;
            }
        }
        return result;
    }
}

const password = prompt("Enter your password");
const isValidPassword = validatePassword(6,password);
console.log("Validation result is: "  + isValidPassword);
/// abc1%A
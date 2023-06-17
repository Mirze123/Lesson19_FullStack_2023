function caesarCipher(s, k) {
    // Write your code here
    // s => given string
    // k => rotate value
    // 0 <= k <= 100;

    if(k <0 || k > 100){
        return;
    }
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const special_characters = "0123456789/~!@#$%^&*()-+_.,?`'|={}[]<>";
    let mod = k % alphabet.length;
    let cuttedPart = alphabet.substring(0,mod);
    let pastPart = alphabet.substring(mod,alphabet.length);
    let finalPart = pastPart.concat(cuttedPart);
    console.log(alphabet);
    console.log(finalPart);

    let result = '';
    let isUpperCase = false;
    for(let i = 0;i<s.length; i++){

        let ch = s[i];
        if(special_characters.includes(ch)){
            result+= ch;
            continue;
        }

        if(ch === ch.toUpperCase()){
            isUpperCase = true;
        }

        let index = alphabet.indexOf(ch.toLowerCase());

        let newChar = finalPart.charAt(index);
        if(isUpperCase){
            newChar =newChar.toUpperCase();
        }
        result +=newChar;
        isUpperCase = false;
    }

    return result;
    //console.log(finalPart);


    



    


}

caesarCipher('middle-Outz',2);
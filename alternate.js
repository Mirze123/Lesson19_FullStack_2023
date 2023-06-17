function alternate(s) {
    // Write your code here

    if (s.length <= 0 || s.length > 1000) {
        return;
    }

    // 'abaacdabd'
    // a,b,c,d => [a,b],[a,c],[a,d],[b,c],[b,d],[c,d]
    // her bir kombinasiyadan alinan neticeler yigilir bir liste
    // listdeki her bir soz ucun tekrarlanma serti yoxlanilir
    // eger birden cox tekrarlanmayan soz varsa onlarin icerisinde en uzuny
    // yox eger 1 denedirse ozunun uzunlugu qaytarilir
    // eks halda hec bir tekrarlanmayan soz tapilmadiqda geriye 0 qaytarilir


    let uniqueChars = []; // a,b,c,d
    let combinations = [];
    let wordsFromCombinations = [];
    let correctWords = [];
    //ABCABCABCABCABC
    for (let i = 0; i < s.length; i++) {
        if (uniqueChars.some(x => x === s[i])) {
            continue;
        }
        else {
            uniqueChars.push(s[i]);
        }
    }

    // abcd  ==> ab 

    for (let i = 0; i < uniqueChars.length; i++) {
        let ch = uniqueChars[i];
        for (let x = i + 1; x < uniqueChars.length; x++) {
            let siblingCh = uniqueChars[x];
            combinations.push([ch, siblingCh]);
        }
    }

    for (let i = 0; i < combinations.length; i++) {
        let comb = combinations[i];
        let firstLetter = comb[0];
        let secondLetter = comb[1];
        let newWord = s;
        for (let ch of s) {
            if (ch === firstLetter || ch === secondLetter) {
                continue;
            }
            else {
                newWord = newWord.replaceAll(ch,'');
            }
        }
        wordsFromCombinations.push(newWord);
    }

    wordsFromCombinations.forEach(word => {
        let isUniqueWord = false;
        for (let i = 0; i < word.length; i++) {
            let ch = word[i];
            let sibling = word[i + 1];
            if (ch === sibling) {
                break;
            }
            else {
                isUniqueWord = true;
            }

            if (i == word.length - 1 && isUniqueWord) {
                correctWords.push(word);
            }
        }
    });

    let result = 0;
    for (let item of correctWords) {
        if (item.length < result) {
            continue;
        }
        result = item.length;
    }

    //let finalResult = correctWords.filter(x=> x.length == Math.max(x.length));
    console.log(uniqueChars);
    console.log(combinations);
    console.log(wordsFromCombinations);
    console.log(correctWords);
    console.log(result);
    return result;







}

alternate('asdcbsdcagfsdbgdfanfghbsfdab');
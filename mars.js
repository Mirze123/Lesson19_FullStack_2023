function marsExploration(s) {
    // Write your code here

    const SOS_MESSAGE = 'SOS';
    let countOfSosMessages = s.length / 3;
    let sosMessages = [];
    let result = 0;
    let wholeWord = s;
    for( let i = 0; i<countOfSosMessages; i++){
        let message = '';
        message = wholeWord.substring(0,3);
        wholeWord = wholeWord.substring(3,wholeWord.length);
        sosMessages.push(message);
    }

    for(let word of sosMessages){
        if(!(word === SOS_MESSAGE)){
            if(word[0] !== SOS_MESSAGE[0]){
                result++;
            }
            if(word[1] !== SOS_MESSAGE[1]){
                result++;
            }
            if(word[2] !== SOS_MESSAGE[2]){
                result++;
            }
        }

    }
    console.log(sosMessages);
    console.log(result);

}

marsExploration('SOSSPSSQSSOR');
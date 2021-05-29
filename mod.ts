export function checkPassword(password :string, minLen=0, maxLen=0, containsNum=false, containsSpecialChar=false, containsLetters=false): boolean{    
    if(minLen != 0){
        if(password.length < minLen)
            return false;        
    }
    if(maxLen != 0){
        if(password.length > maxLen)
            return false;
    }
    if(containsNum){
        if(password.search(/\d/) == -1)
            return false;
    }
    if(containsSpecialChar){
        if(password.search(/[^\w\s]/) == -1)
            return false;        
    }
    if(containsLetters){
        if(password.search(/[A-Za-z]/) == -1)
            return false;
    }

    return true;
}

export const isNullOrUndefined = (test:any): boolean => {
    if (test == null){
        return true;
    }
    return false;
}

export const isNullOrUndefinedOrEmpty = (test:any): boolean => {
    if (test == null || test === ''){
        return true;
    }
    return false;
}
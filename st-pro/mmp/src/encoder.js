
export function card1(str){
    try{
        if (str === decodeURIComponent(str)) {
            const encodedStr = encodeURIComponent(str);
            return encodedStr;
        }
        else{
            const decodedStr = decodeURIComponent(str);
            return decodedStr;
        }
    }
    catch (error) {
        return encodeURIComponent(str);
    }
}
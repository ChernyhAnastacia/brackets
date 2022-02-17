module.exports =function check(str, bracketsConfig) {
    str = str.split('');
    for (let i = 1; i < str.length; i++){
        let brackets = [str[i-1], str[i]];
        for (let j = 0; j < bracketsConfig.length; j++ ) {
            let array = bracketsConfig[j];
            if ((brackets[0] === array[0]) && (brackets[1] === array[1])) {
                str.splice(i-1 , 2);
                i = i - 2;
            }
        }
    }
    return (!(str && str.length !== 0));
}

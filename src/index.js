module.exports = function check(str, bracketsConfig) {
    let i = 0;
    while (i < bracketsConfig.length) {
        let couple = bracketsConfig[i].join('');
        if (str.includes(couple)) { str = str.replace(couple, ''); i = 0; }
        else { i += 1 }
    }
    return str.length === 0;
};

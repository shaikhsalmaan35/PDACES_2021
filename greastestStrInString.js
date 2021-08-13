const greastestStrInString = (str) => {
    const arrStr = str.split(" ");
    let maxStr = arrStr[0].length;
    let strData = arrStr[0];
    arrStr.forEach((element) => {
        if (maxStr < element.length) {
            maxStr = element.length;
            strData = element;
        }

    });
    return strData;
}
console.log(greastestStrInString("I am a shaikh . I live in Nanded,India. I have completed Msc.cs, in SRTMUN. I'm excited to become a developer "))
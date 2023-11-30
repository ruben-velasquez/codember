/**
 * 
 * @param {String} data 
 */
function Main(data) {
    let files = data.split("\n");
    
    let formatedFiles = files.map((file) => {
        return {
            rawString: file.split("-")[0].trim(),
            checkSum: file.split("-")[1].trim(),
        }
    })

    let validFiles = [];

    formatedFiles.forEach(file => {
        let validCheckSum = "";

        for (let index = 0; index < file.rawString.length; index++) {
            let letter = file.rawString[index];
            
            let replacedRawString = file.rawString;

            while (replacedRawString.includes(letter)) {
                replacedRawString = replacedRawString.replace(letter, "")
            }
            

            if(replacedRawString.length + 1 == file.rawString.length) {
                validCheckSum += letter;
            }
        }

        // console.log(`${file.checkSum} - ${validCheckSum}`)
        if(validCheckSum == file.checkSum)
            validFiles.push(file.checkSum)
    })

    console.log(validFiles[32]);
}

fetch("https://codember.dev/data/files_quarantine.txt")
.then(data => data.text())
.then(data => Main(data));
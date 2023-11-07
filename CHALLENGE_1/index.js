/**
 * 
 * @param {String} input 
 */
function Main(input) {
    const words = input.replace("\n", "").toLowerCase().split(" ");

    let count = {

    };

    words.forEach(word => {
        if(count[word] != undefined) {
            count[word]++;
        } else {
            count[word] = 1;
        }
    })

    let output = "";

    const countNames = Object.getOwnPropertyNames(count);
    
    countNames.forEach((word) => {
        output += word + count[word];
    });

    console.log(output)
}
 
fetch("https://codember.dev/data/message_01.txt")
.then(data => data.text())
.then(data => Main(data));


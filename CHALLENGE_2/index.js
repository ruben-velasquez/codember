function Main(code) {
    let value = 0;
    let output = "";

    let actions = {
        "#": () => {value++},
        "@": () => {value--},
        "*": () => {value = value * value},
        "&": () => {output = output + value},
    }

    code.split("").forEach(instruction => {
        if(actions[instruction] != null) {
            actions[instruction]();
        }
    });

    console.log(output);
}

fetch("https://codember.dev/data/message_02.txt")
.then(data => data.text())
.then(data => Main(data.trim()));
function Main(passwords) {
    let wrongPasswords = [

    ]

    passwords.split("\n").forEach(user => {
        let userPassword = {
            policy: {
                min: parseInt(user.split(":")[0].split(" ")[0].split("-")[0]),
                max: parseInt(user.split(":")[0].split(" ")[0].split("-")[1]),
                letter: user.split(":")[0].split(" ")[1]
            }, 
            password: user.split(":")[1].trim()
        }

        if(userPassword.password.split(userPassword.policy.letter).length - 1 < userPassword.policy.min ||
            userPassword.password.split(userPassword.policy.letter).length - 1 > userPassword.policy.max)
            wrongPasswords.push(userPassword);
    })

    console.log(wrongPasswords[41].password)
}

fetch("https://codember.dev/data/encryption_policies.txt")
.then(data => data.text())
.then(data => Main(data));
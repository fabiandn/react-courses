const Task = require("data.task")

const launchMisiles = () => 
    new Task((rej, res) => {
        console.log("launch missiles!");
        res("missile")
    })

const app = launchMisiles().map(x => x + "!")

app.map(x=> x + "!").fork(e => console.log('err', e),
                          x => console.log('success', x))
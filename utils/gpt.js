// const superagent = require('superagent')
const axios = require('axios')
const TOKEN = atob('c2stNm5zQWxXYkpXbjdIV040THh3d1dUM0JsYmtGSjByRzZoVXZEZ1h6RklKY0hVdUJN')
async function gpt(question) {
    let p = 'YOU:' + question + "\n"
    // const res = await superagent.post('https://api.openai.com/v1/completions').set("Authorization", 'Bearer ' + TOKEN)
    // .set('Content-Type', 'applicaiton/json').send(`{
    //     prompt: ${p}, max_tokens: 2048, model: "text-davinci-003"
    // }`);
    const res = await axios.post('https://api.openai.com/v1/completions', {
        prompt: p, max_tokens: 2048, model: "text-davinci-003"
    }, {
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + TOKEN }
    })
    console.log(res.data)
    return res.data.choices[0].text
}

module.exports = {
    gpt
}

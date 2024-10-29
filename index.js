const axios = require("axios");
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Encrypt {
  constructor() {
    this.host = "https://api.oxzof.com/"
  }

  async encode(options) {
    const { key, text } = options;
    if (!(key && text)) {
      console.error("key and text parameters are required!");
      return false;
    }
    const { data } = await axios.get(`${this.host}encrypt?type=encode&key=${key}&text=${text}`);
    return data.status == 200 ? data.token : "an error occurred!";
  }

  async decode(options) {
    const { token } = options;
    if (!token) {
      console.error("token parameter is required!");
      return false;
    }

    const key = await new Promise((resolve) => {
      rl.question(`\x1b[32mEnter token key:\x1b[0m `, (answer) => {
        resolve(answer);
      });
    });

    const { data } = await axios.get(`${this.host}encrypt?type=decode&key=${key}&token=${token}`);
    rl.close();
    return data.status == 200 ? data.message : "Invalid key!";
  }
}

module.exports = Encrypt;
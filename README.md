# OXZOF CRYPTOR
- This module allows you to tokenize a text based on a specific key. While decoding this token, it asks you for the key in the console bar. In this way, you hide your token on public platforms. Be careful, don't forget your token!

## Functions
-  decode()
You just need to redeem your token by sending it, it will ask for the key in the console.

- encode()
You need to use your one-time sentence and key to get tokens.

# Examples

## Require Command
```javascript
const Encryptor = require("oxzof-cryptor");
const encrypt = new Encryptor();
```

## Encode Function
```javascript
(async()=>{
    let data = await encrypt.encode({
        text:"This is a secret message!",
        key:"oxzof"
    });
    console.log(data) // return a token
})()
```


## Decode Function
```javascript
(async()=>{
    let data = await encrypt.decode({
        token:"token" // enter token here
    });
    console.log(data) // It will ask for a key, if the correct key is used the text will be returned.
})()
```


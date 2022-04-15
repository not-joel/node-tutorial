//  GLOBALS - NO WINDOW

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about Current module (file)
// process - info about env where the program is being executed


// console.log(__dirname);
// console.log(__filename);
// setTimeout(() => {
//     console.log("Hello world");
// }, 3000)



// Modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)


// const {john, meke} = require('./4-names')
// const names = require('./4-names');
// const sayHi = require('./5-utils');
// const data = require('./6-alternate');
// require('./7-grenade')

// sayHi('Joel');
// sayHi(names.john);
// sayHi(names.meke);



/* 
const os = require("os")

// info about current user
const user = os.userInfo()
console.log(user);

// method return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS); 
*/



/* 
const path = require('path')

console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);
 */


// File Sync - fs
// fs Synchronous

// const fs = require('fs');
// fs.readFileSync
/* 
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`, 
    { file: 'a' } // 'a' --> append()
) 
*/



// File Async 

/* const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async-new.txt', `Here is the result: ${first}, ${second}`,
        (err, result) => {
            if(err) {
                console.log(err);
                return
            }
            console.log(result);
        })
    })
}) */



// HTTP Module

/* const http = require('http');

// req --> incoming request
// res --> response
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    // res.write()
    // res.end()
})

server.listen(5000) */


// creating package.json
    // Manual: npm init
    // Automatic: npm init -y

const _ = require('lodash');
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
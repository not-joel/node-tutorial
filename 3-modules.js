// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)


const {john, meke} = require('./4-names')
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternate');
require('./7-grenade')

sayHi('Joel');
sayHi(names.john);
sayHi(names.meke);
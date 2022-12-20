// Modules
const names = require("./3_names");
const printName = require("./2_module");
const alternate = require("./4_Alternativee_module");
require('./5_mind_grenade'); // Tjis is one more technique to obtain modules.

printName.sayHi(names.sam);
console.log(alternate.singlePerson);
console.log(alternate.items);



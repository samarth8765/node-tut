// npm - global commands, comes with node.
// npm --version

// local dependency - use this in particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/ package)
// To create package.json (npm init) for step by step process.

const lodash = require('lodash');

const items = [1,[2,[3,[4]]]];

console.log(lodash.flattenDeep(items));
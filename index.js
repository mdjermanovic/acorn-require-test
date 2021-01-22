const acorn = require("acorn");

console.log(acorn.parse("foo", { ecmaVersion: 2021 }));
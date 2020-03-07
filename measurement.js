const performance = require("perf_hooks").performance;

const measure = func => {
  let array = [];

  for (let i = 1; i <= 100000; i++) {
    array.push(i);
  }

  const start = performance.now();
  func(array);
  const end = performance.now();

  return ((end - start) / 1000).toFixed(5);
};

const fisherYatesFunc = require("./fisherYates");
const dustenfeldFunc = require("./dustenfeld");

const fisherYatesTime = measure(fisherYatesFunc);
const dustenfeldTime = measure(dustenfeldFunc);

console.log("┌─────────────┬─────────────┐");
console.log("│ fisherYates │ dustenfeld │");
console.log("├─────────────┼────────────┤");
console.log(`│   ${fisherYatesTime} s │  ${dustenfeldTime} s │`);
console.log("└─────────────┴─────────────┘");

// Q4. Array Performance Analyzer
// 8 random scores between 30 and 100
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const average = scores.reduce((sum, s) => sum + s, 0) / scores.length;
const passed = scores.filter(s => s >= 50);
const status = scores.map(s => (s >= 50 ? "Pass" : "Fail"));

console.log(`
===== Student Performance Summary =====
Scores          : ${scores.join(", ")}
Status          : ${status.join(", ")}
Highest Score   : ${highest}
Lowest Score    : ${lowest}
Average Score   : ${average.toFixed(2)}
Students Passed : ${passed.length} / ${scores.length}
=======================================`);

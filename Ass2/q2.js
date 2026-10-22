// Q2. String Manipulation Report
const productName = "  wireless headphones PRO  ";

const cleaned = productName
  .trim()                                   // remove extra spaces
  .toLowerCase()                            // wireless headphones pro
  .split(" ")                               // ["wireless","headphones","pro"]
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each word
  .join(" ");                               // Wireless Headphones Pro

const finalTitle = cleaned.replace("Pro", "Pro Edition");

console.log("Original   :", `"${productName}"`);
console.log("Cleaned    :", finalTitle);
console.log("Length     :", finalTitle.length);

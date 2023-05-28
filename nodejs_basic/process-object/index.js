const initialMemoryUsage = process.MemoryUsage// TODO 1
const yourName =  process.argv// TODO 2
const environment = process.env// TODO 3
const moment = require('moment');

const date =moment().format('YYYY-MM-DD');
console.log(date); 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = process.MemoryUsage// TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

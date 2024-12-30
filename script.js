const os = require('os');
const fs = require('fs');
const path= require('path');

const system = 
` operating System : ${os.type()} 
 total memory : ${(os.totalmem() / (1024 * 1024))} MB
 free memory : ${(os.freemem() / (1024 * 1024))} MB
 cpu details : ${os.cpus()[0].model} (${os.cpus().length} cores)`;

const dir = path.join(__dirname,'logs');
if (!fs.existsSync(dir))
{
    fs.mkdirSync(dir);
}

const filePath=path.join(dir,'system-info.txt');
fs.writeFileSync(filePath,system,'utf8');
console.log('System information saved to :',filePath);

console.log('System information :');
console.log(system);

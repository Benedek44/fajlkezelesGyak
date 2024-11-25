import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import input from '../input.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'termekek.json');

function writeToFile(data){
    try {
        fs.writeFileSync(filePath, JSON.stringify(data));
    } catch (err){
        console.error(err);
    }
}

function readFromFile(){
    let rData;
    try {
        rData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err){
        console.error(err);
    }
    return rData;
}

let data = readFromFile();
console.log("Termékek:");
console.log(data);

let id = await input("Melyikterméket szeretnéd törölni [Id]:");

for (let i = 0; i < data.length; i++){
    if (data[i].id == id){
        data.splice(i, 1);
        break;
    }
}

writeToFile(data);
console.log("Termék törölve");
console.log(readFromFile());
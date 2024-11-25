import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'osztaly.json');

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
        letrData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err){
        console.error(err);
    }
    return rData;
}

function appendToFile(data){
    try {
        let fileContent = readFromFile();
        fileContent.push(...data);
        writeToFile(fileContent);
    } catch (err){
        console.error(err);
    }
}

let data = [
    { name: 'Nagy Máté' },
    { name: 'Illgner Noel' },
    { name: 'Tóthmihály Martin' }
]
writeToFile(data);
console.log(readFromFile());

let data2 = [
    { name: 'Rózsa Ricsi' },
    { name: 'György Dávid' },
    { name: 'Baráth Ádám' }
]
appendToFile(data2);
console.log(readFromFile());
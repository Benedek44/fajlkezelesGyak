import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'orarend.json');

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

const fileContent = readFromFile();

console.log("A heti órarend:");
console.log(fileContent);

const tuesdayLesson = {11: "Szakmai angol"};
const fridayLesson = {7: "Tesi"};
fileContent.Tuesday.push(tuesdayLesson);
fileContent.Friday.push(fridayLesson);

writeToFile(fileContent);

console.log("A heti órarend módosítása:");
console.log(readFromFile());

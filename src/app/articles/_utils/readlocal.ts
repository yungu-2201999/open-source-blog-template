import fs from 'fs';
import path from 'path';

const mdPath = path.join(process.cwd(),'./src/articles/')
console.log(mdPath);
const files = fs.readdirSync(mdPath);

files.forEach(file => {
    const fullPath = path.join(mdPath, file);
    const stat = fs.statSync(fullPath);
    console.log(stat.isDirectory());
});
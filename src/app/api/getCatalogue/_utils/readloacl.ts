
import fs from 'fs';
import path from 'path';

const articlePath = path.join(process.cwd(), './src/articles/');

export function getKBase() {
    const files = fs.readdirSync(articlePath);

    const fileList: string[] = [];

    files.forEach(file => {
        const fullPath = path.join(articlePath, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !fileList.includes(file)) {
            fileList.push(file)
        };
    });
    return fileList;
}
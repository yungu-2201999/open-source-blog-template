
import fs from 'fs';
import path from 'path';
import { articlePath } from '../_config/index';

export function handleURL(urlStr: string) {
    const url = new URL(urlStr);
    const pathname = url.pathname;

    return { ...url, searchParams: Object.fromEntries(url.searchParams.entries()) }
}
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

const createFileObj = ({ name, type, children, filePath = '' }: { name: string, type: string, children?: any[], filePath: string }): { name: string, type: string, children?: any[], filePath: string } => {
    return { name, type, filePath, children, }
}

export function getArticleListByKBase(kBase: string, childDir: string[] = []) {
    const files = fs.readdirSync(`${articlePath}${kBase}/${childDir.join('/')}`);
    const fileList: ReturnType<typeof createFileObj>[] = [];

    files.forEach((file) => {
        let filePath = `${articlePath}${kBase}`;
        if (childDir.length) filePath += `/${childDir.join('/')}`;
        
        const fullPath = path.join(filePath, file);
        const stat = fs.statSync(fullPath);
        const filePathArr = [kBase,...childDir];

        if (stat.isDirectory()) {
            const children = getArticleListByKBase(kBase, [...childDir, file]);
            fileList.push(createFileObj({ name: file, type: "dir", children, filePath: filePathArr.join('/') }));
        } else {
            filePathArr.push(file)
            fileList.push({ name: file.split('.')[0], type: "file", filePath:filePathArr.join('/') })
        }
    })
    return fileList

}

export function getArticleList() { }
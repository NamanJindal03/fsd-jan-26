import fs from 'fs/promises'

export const getData = async () => {
    console.log(process.cwd())
    const data = await fs.readFile('express/api-demo/data.json', 'utf8');
    return JSON.parse(data);
}

export const writeData = async (data) => {
    fs.writeFile('express/api-demo/data.json', JSON.stringify(data))
}

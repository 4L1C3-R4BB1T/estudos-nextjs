import fs from 'fs/promises';

export default async function Acesso() {
    await fs.appendFile('acesso.txt', `${Date.now()} `, 'utf8');
    const data = await fs.readFile('acesso.txt', 'utf8');
    return <div>{data}</div>
}

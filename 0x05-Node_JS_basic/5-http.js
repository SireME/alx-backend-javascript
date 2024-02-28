const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!\n');
    } else if (url === '/students') {
        const databaseFile = process.argv[2];
        if (!databaseFile) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Database file not provided.\n');
            return;
        }

        fs.readFile(databaseFile, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading database file.\n');
                return;
            }

            const students = parseStudents(data);
            const response = `This is the list of our students\nNumber of students: ${students.length}\n${students}`;
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(response);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found\n');
    }
});

app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

function parseStudents(data) {
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = { CS: [], SWE: [] };

    lines.forEach(line => {
        const [name, age, field] = line.split(',');
        if (field === 'CS') {
            students.CS.push(name.trim());
        } else if (field === 'SWE') {
            students.SWE.push(name.trim());
        }
    });

    const csList = students.CS.length ? `Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}\n` : '';
    const sweList = students.SWE.length ? `Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}\n` : '';

    return csList + sweList;
}

process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', function (data) {
  const name = data.trim();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  } else {
    process.stdout.write('Your name is: \n');
  }
});

process.stdin.on('end', function () {
  process.stdout.write('This important software is now closing\n');
});

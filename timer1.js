const newArr = process.argv.slice(2).sort();

for (let y of newArr) {
  y = Number(y);
  console.log(y);
  if (y < 0 || isNaN(y)) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, y * 1000);
}
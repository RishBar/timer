for (const y of process.argv.slice(2)) {
  console.log(y);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, y);
}


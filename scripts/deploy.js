const exec = require('child_process').exec;

exec('npm publish', (error, stdout, stderr) => {
  if (stdout) {
    console.log(stdout);
  }
  if (stderr) {
    console.error(stderr);
  }
  if (error) {
    process.exit(1);
  }
});

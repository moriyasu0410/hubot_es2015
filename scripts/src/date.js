module.exports = (robot => {
  robot.hear(/なんじ/i, res => {
    let exec = require('child_process').exec;
    exec("date", function(error, stdout, stderr) {
      if (!error) {
        console.log(stdout);
      } else {
        console.log("error");
      }
    });
  })
})

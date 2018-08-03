// 상대경로
var testdir = './data';
var fs = require('fs');

fs.readdir(testdir, function(error, filelist)
{
  console.log(filelist);
})

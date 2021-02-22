var express = require('express');
var router = express.Router();
var fs = require('fs');
const meigenFilepath = process.cwd() + '/output/meigenList.txt';

router.post('/', function(req, res, next){
  // TODO:try catch でいい気がする
  try {
    if(isFileExist(meigenFilepath)){
      write(meigenFilepath,req.body.meigen+ '\n');
    }else{
        console.log('NG');
    }
    res.send(req.body);
  }catch(error){
    console.log(error)
  }
});

module.exports = router;

function isFileExist(filepath) {
    var isExist = false;
    try {
      console.log(filepath);
      fs.statSync(filepath);
      isExist = true;
    } catch(err) {
      isExist = false;
    }
    return isExist;
}

function write(filePath, stream) {
  fs.appendFile(filePath, stream.toString(), (err) => {
    if (err) throw err;
    console.log(filePath + 'に追記されました');
});
}
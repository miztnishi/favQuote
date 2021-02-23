var express = require('express');
var router = express.Router();
var fs = require('fs');
const meigenFilepath = process.cwd() + '/output/meigenList.txt';

router.post('/save', function(req, res, next){
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

router.get('/get', function(req, res, next){
  // TODO:try catch でいい気がする
  try {
    if(isFileExist(meigenFilepath)){
      var favText = read(meigenFilepath);
      var favList = favText.split('\n');
      const resbody = {'favList':favList };
      res.send(resbody);
    }else{
        console.log('NG');
    }
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
  fs.appendFile(filePath, stream.toString(),(err) => {
    if (err) throw err;
  });
}

function read(filePath) {
  let text = fs.readFileSync(filePath, {encoding: 'utf-8'});
  console.log(text);
  return text;
}
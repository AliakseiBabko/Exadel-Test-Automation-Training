fs = require('fs');

fs.readFile('1.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  const myObj = JSON.parse(data); //parse received json into an object
  let errorlog = []; //create an array for report
  
  //check conditions
  if (typeof(myObj.flag) !== 'boolean') {
    errorlog.push('"flag" is not boolean');
  }
  
  if (Array.isArray(myObj.myPromises) !== true) {
    errorlog.push('"myPromises" is not an array');
  }

  if (typeof(myObj.element) !== 'object') {
    errorlog.push('"element" is not an object');
  }

  if (myObj.screenshot !== null) {
    errorlog.push('"screenshot" is not null');
  }

  if (typeof(myObj.elementText) !== 'string') {
    errorlog.push('"elementText" is not a string');
  }

  if (!myObj.allElementsText.includes('const')) {
    errorlog.push('"allElementsText" does not contain "const" in string');
  }

  if (myObj.counter <= 10) {
    errorlog.push('"counter" is less than 10');
  }

  if (myObj.config !== 'Common') {
    errorlog.push('"config" is not equal "Common"');
  }

  if (myObj.const.toUpperCase() !== 'FIRST') {
    errorlog.push('"const" is not equal "FiRst" (case insensitive)');
  }

  if (myObj.parameters.length !== 8) {
    errorlog.push('"parameters" is not an array with length 8');
  }

  if (myObj.description.length > 5 && myObj.description.length < 13) {
    errorlog.push('"parameters" is not a string with length more than 5 but less than 13');
  }
  
  //display OK in console or create a file with inconsistencies
  if (!errorlog.length) {
    console.log('OK');
  } else {
    fs.writeFile('errorlog.txt', errorlog, function (err) {
      if (err) throw err;
    });
  }
});
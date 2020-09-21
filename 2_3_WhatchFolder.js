const fs = require('fs');
let logFile = {};
let counter = 1, key = '';

fs.watch('2_3_MockData', (eventType, filename) => { //start watching the directory
  if (filename.endsWith('.csv')) { //if changed file is .csv
    key = 'key' + counter++;
    Object.assign(logFile, {[key]: `The file ${filename} was modified! Type of change: ${eventType}`}); //add to the log
  } else {    //if it is not .scv
    key = 'key' + counter++;
    Object.assign(logFile, {[key]: `The file ${filename} is not .csv and was ignored`}); //add to the log as not .csv
  }
  fs.writeFile('errorlog.json', JSON.stringify(logFile), function (err) { //write log to .json file
    if (err) throw err;
  });
});

// Change the contents of a .csv file  
setTimeout( 
  () => fs.writeFileSync('2_3_MockData/MOCK_DATA.csv',  
  'The file is modified'), 1000
);
 
// Rename a .csv to a new name 
setTimeout( 
  () => fs.renameSync('2_3_MockData/MOCK_DATA3_7.csv',
  '2_3_MockData/MOCK_DATA3_6.csv'), 2000
);

// Rename a .txt to a new name 
  setTimeout( 
  () => fs.renameSync('2_3_MockData/MOCK_DATA4.txt',  
  '2_3_MockData/MOCK_DATA3.txt'), 3000
);
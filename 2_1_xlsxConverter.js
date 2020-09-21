fs = require('fs');
//@ts-ignore
const json2xls = require('json2xls');

fs.readFile('new5.json', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    const myObj = JSON.parse(data); //parse received json into an object
    const xls = json2xls(myObj); //convert the file into xlsx file
    fs.writeFileSync('data.xlsx', xls, 'binary', function (err) {
        if (err) throw err;
    });
})
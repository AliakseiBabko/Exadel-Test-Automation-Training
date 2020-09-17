fs = require('fs');
const json2xls = require('./node_modules/json2xls/lib/json2xls.js');

fs.readFile('JSON_to_xlsx.json', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    const xls = json2xls(data);
    fs.writeFileSync('data.xlsx', xls, 'binary', function (err) {
        if (err) throw err;
    });
})
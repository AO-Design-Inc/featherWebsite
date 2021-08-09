var Mustache = require('mustache');

var data = JSON.parse(fs.readFileSync('./content.json'));

var output = Mustache.render('{{Title}}', data);
console.log(output);
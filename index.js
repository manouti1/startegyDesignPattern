const basketPlayers = require('./data/basketbalModell');
const inquirer = require('inquirer')
const handballPlayers = require('./data/handballModel');

const basketball = require('./basket');
const handball = require('./handball');
const game = require('./game');

var questions = [{
    type: 'input',
    name: 'type',
    message: "Please give type?",
}]
var dict = {
    basketball: { type: new basketball(), arr: basketPlayers },
    handball: { type: new handball(), arr: handballPlayers }
};
inquirer.prompt(questions).then(answer => {
    let res = `${answer['type']}`;

    let g = new game(dict[res].type);
    var mvp = g.getMVP(dict[res].arr);
    console.log(mvp);

})
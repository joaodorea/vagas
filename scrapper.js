var Nightmare = require('nightmare');
var nightmare = new Nightmare({ show: false });

let vagasArr = [];

module.exports = new Promise((resolve, reject) => {
    nightmare
        .goto('https://github.com/frontendbr/vagas/issues')
        .wait('.Box-row')
        .evaluate(function (vagasArr) {
            document.querySelectorAll('.h4').forEach(el => vagasArr.push(el.innerText));
            return vagasArr;
        }, vagasArr)
        .end()
        .then(vagas => resolve(vagas))
        .catch(error => {
            console.log(error)
        })
})


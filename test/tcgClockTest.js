'use strict';
var axios = require('axios');

startTesting();

//run in a test loop to simulate high-volume
function startTesting() {
    runTests()
        .then(() => {
            console.log('sleep 500.');
            sleep(500)
                .then(() => {
                    startTesting();
                });
        })
        .catch((error) => {
            console.log('Error: %s', error);
        });
}

function runTests() {
    return new Promise(function (resolve, reject) {
        resolve(test());
    });
}

function test() {
    console.log('test() called.');
    var testData={"hour": 12, "minute": 30};
    
    const request = {
        method: 'GET',
        rejectUnauthorized: false,
        url: 'http://localhost:3000/tcg/getClockAngle',
        headers: {
            'Content-Type': 'application/json'
        },
        data: testData
    };

    axios(request)
        .then((res) => {
            var angle = JSON.stringify(res.data);
            console.log('angle data json:' + angle);
        });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const fs = require("fs");
const xValue = require("./xValue.json");

const a = 3
const c = 1;
const m = Math.pow(2, 32);

xValue.research = {};

randomInt(1, 11, 1);

function randomInt(min, max, n){
    var maximumValue = max - min;

    for (var y = 0; y < n; y++) {
        var rng = "";
        var divisor = "1";

        for (var x = 0; x < 3; x++) {
            xValue.remainder[x] = (a * xValue.remainder[x] + c) % m;
    
            rng += JSON.stringify(xValue.remainder[x]).slice(JSON.stringify(xValue.remainder[x]).length - 2, JSON.stringify(xValue.remainder[x]).length - 1);
        }

        for (var i = 0; i < rng.length; i++) {
            divisor = divisor + "0";
        }
    
        rng = (parseInt(min + parseInt(rng) / parseInt(divisor) * maximumValue)).toString();

        if(xValue.research[rng] == null){
            xValue.research[rng] = 0;
        }
    
        xValue.research[rng]++;
    
        console.log("Random number [" + y + 1 + "]: " + rng);
    }

    for (var z = 0; z < maximumValue; z++) {
        if(xValue.research[min + z] != null){
            xValue.research[min + z] = xValue.research[min + z] / 1000 * 100;
        }
    }

    fs.writeFile("xValue.json", JSON.stringify(xValue), "utf8", err => {
        if(err) throw err;
    });
}
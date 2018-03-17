var a = require('assert');


describe('Web page testing',function(){
    it('Page title', function(){
        browser.url('file:///Users/mani/work/coverage-istanbul-wdio/test/web.html');
        var t = browser.getTitle();
        a.equal(t,'WebdriverIO + Code coverage');
    });

    it('Click element', function(){
        browser.pause(3000);
        browser.click('#link');
        browser.pause(3000);
    });

    it('Get Code coverage', function () {
        var coverage = browser.execute(function() {
            return window.__coverage__;
        });

        var fs = require('fs');
        var stream = fs.createWriteStream("coverage/coverage.json");
            stream.once('open', function(fd) {
            stream.write(JSON.stringify(coverage.value));
            stream.end();
        });

        // node.js context - client and console are available
        console.log(coverage); // outputs: 10
    });

});

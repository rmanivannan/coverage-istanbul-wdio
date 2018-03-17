
var istanbul = require('istanbul'),
    collector = new istanbul.Collector(),
    reporter = new istanbul.Reporter(),
    sync = false;

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('coverage/coverage.json', 'utf8'));

console.log(obj)

collector.add(obj);
//collector.add(obj2); // multiple coverage.json can be added to generate reports

reporter.add('text');
reporter.addAll([ 'lcov', 'clover' ]);
reporter.write(collector, sync, function () {
    console.log('All reports generated');
});



# Remove auto generated files
rm -rf coverage/

#Generate instrument code
#istanbul instrument test/web.js --output  test/web.inst.js --embed-source true
#(or)
npm run inst


mkdir coverage

#Run WDIO test 
#wdio
#(or)
npm run test

#generate report 
#node reporter.js
#(or)
npm run report

#Open Coverage report on browser
open coverage/lcov-report/index.html 
# Front-end JavaScript test coverage with Istanbul and WebDriverIO (Selenium)

Sample code-base to generate test coverage with integration testing using WDIO(WebDriverIO)

## Highlevel understanding

1. Generate instrument code using command:`istanbul instrument`, incase of ES6/7 `babel-plugin-istanbul` would help to generate instrumented code. 

```
istanbul instrument test/web.js --output  test/web.inst.js --embed-source true
(or)
npm run inst
```

2. Link instrumented js with web applucation instead of actual code
3. Run integration testing using WDIO 
4. Save `coverage.json` by executing script `window.__coverage__` on browser contest, if we have multiple instance running through different test specs then we have to save multiple `coverage-<name>.json`

```
wdio
(or)
npm run test
```
5. Generate viewable report `coverage/lcov-report/index.html` from `coverage.json` by using `istanbul report`, if we have multiple `coverage-<name>.json` then we have to use `istanbul-combine` generate viewable report.
```
node reporter.js
(or)
npm run report
```
6. Open Coverage report on browser `open coverage/lcov-report/index.html`




## Installation

install istanbul
```
npm i -g istanbul
npm i -D istanbul
```

Install wdio
```
npm i -g webdriverio
```

Install Selenium Standalone
```
npm i -g selenium-standalone
selenium-standalone install
```

Start Selenium Standalone
```
selenium-standalone start
```
## Run this code on your local
After installing above list, open new terminal window and run `bash ci_build.sh` or run below command step by step

```
# Remove auto generated files
rm -rf coverage/

# Generate instrument code
# istanbul instrument test/web.js --output  test/web.inst.js --embed-source true
# (or)
npm run inst

mkdir coverage

# Run WDIO test 
# wdio
# (or)
npm run test

# generate report 
# node reporter.js
# (or)
npm run report

# Open Coverage report on browser
open coverage/lcov-report/index.html 
```

## Reference

https://github.com/gotwarlost/istanbul

https://github.com/istanbuljs/babel-plugin-istanbul

https://github.com/jamestalmage/istanbul-combine

https://medium.com/@the1mills/front-end-javascript-test-coverage-with-istanbul-selenium-4b2be44e3e98

https://github.com/gotwarlost/istanbul/issues/132

https://www.youtube.com/watch?v=vPes7NKeYno


ta ta taaa - the end - https://www.youtube.com/watch?v=2xNj3ZFDjDo
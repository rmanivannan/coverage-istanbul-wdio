function myClickFunc(){
    console.log('link   ');
}

var el = document.getElementById('link');

el[window.addEventListener ? 'addEventListener' : 'attachEvent']( window.addEventListener ? 'click' : 'onclick', myClickFunc, false);

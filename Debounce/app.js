// Debouncing: it is used to optimize event handling by delaying the execution 
// of a function until after a specified period of inactivity. 

//  debouncing waits for a certain time before invoking the function again.

let counter=0;
function getData(){
    console.log("fetching Data"+counter++)
}
function myDebounce(call,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer=setTimeout(() => {
            call();
        }, d);
    }
}

const BetterFunction=myDebounce(getData,1000);
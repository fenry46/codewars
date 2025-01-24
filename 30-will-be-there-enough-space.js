const enough = (cap, on, wait)  =>  on + wait > cap ? on + wait - cap : 0;
    // // your code here
    // if(on + wait > cap){
    //     return on + wait -cap
    // }

    // return 0;



console.log(enough(20, 5, 5))
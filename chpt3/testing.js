function zeroPad(number , width){
    let string = String(number);
    while(string.length < width){
        string = '0' + string;
    }
      return string;
}

function farmInventory(cows,hens,goats){
    console.log(`${zeroPad(cows,3)} cows`);
    console.log(`${zeroPad(hens,3)} hens`)
    console.log(`${zeroPad(goats,3)} goats`)
}

farmInventory(100,3,2);
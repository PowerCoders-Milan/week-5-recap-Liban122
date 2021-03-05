

var array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary'];
var array2 = [21, 19, 12, 'sebastian', 'will', 23, 20];
var counter= 0;
var result = {};
function match(arr){
    for(i = 0; i < arr.length; i++){
        if(typeof  array1[i] === "number"){
            array2[counter] = array1[counter];
            counter += 1;
        } else{
            array1 [counter] = array2 [counter];
            counter += 1;
        }
    }
    
}
console.log (result);

 


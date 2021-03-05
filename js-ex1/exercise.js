
var x = [77, 55, "powercoder", "abc", "hello", 17];
var counter_num = 0;
var counter_str = 0
function sort(arr){
    for(i = 0; i < arr.length; i++){
        if(typeof  arr[i] === "number"){
            counter_num += 1
        } else{
            counter_str += 1;
        }
    }
    console.log(`array length is ${arr.length}`)
    console.log(`it has ${counter_num} numbers and ${counter_str} strings `)
    
}

 sort(x)


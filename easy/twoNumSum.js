
function twoNumberSum(array, target) {
    
    let index = 0;
    let map = array.map(x => x)


    for(let i = 0; i < array.length; i++){
        let complement = target-array[index];

        if(map.has(complement))

    }

}

array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

twoNumberSum(array, targetSum)
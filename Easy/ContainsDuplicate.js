function hasDuplicate(nums) {
    let map = new Map();

    for(let i=0; i < nums.length; i++){
        console.log(i)
        if(!map.has(nums[i])){
            map.set(nums[i], i);
        } else {
            return true;
        }
    }

    return false
};


let numList=[1,2,3,3];

console.log(hasDuplicate(numList))

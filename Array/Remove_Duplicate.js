// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
let arr = [0, 1, 1, 1, 1, 2, 2, 3];

let removeDuplicate = function(arr) {
    if (arr.length === 0) return 0;

    let j = 1; // position for the next unique element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[j] = arr[i];
            j++;
        }
    }
    return j; // number of unique elements
}

let k = removeDuplicate(arr);
console.log(k);         // Output: 4
console.log(arr.slice(0, k)); // Output: [0, 1, 2, 3]


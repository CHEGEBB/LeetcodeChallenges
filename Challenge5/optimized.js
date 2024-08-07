/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Initialize an empty hash map to store the value and its index.
    let hashMap = {};

    // Iterate through the array 'nums' using a for loop.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement that, when added to nums[i], equals the target.
        let complement = target - nums[i];

        // Check if the complement already exists in the hash map.
        if (hashMap.hasOwnProperty(complement)) {
            // If the complement exists in the hash map, return the indices.
            // hashMap[complement] gives the index of the complement.
            // 'i' is the current index.
            return [hashMap[complement], i];
        }

        // If the complement does not exist in the hash map,
        // store the current element's value as the key and its index as the value.
        hashMap[nums[i]] = i;
    }

    // If no solution is found, return an empty array.
    return [];
};

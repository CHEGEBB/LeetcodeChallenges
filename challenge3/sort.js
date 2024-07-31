/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // Base case: if the array is of length 1 or less, it's already sorted
    if (nums.length <= 1) {
        return nums;
    }
    
    // Divide the array into two halves
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);

    // Recursively sort each half
    const sortedLeft = sortArray(left);
    const sortedRight = sortArray(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
};

// Helper function to merge two sorted arrays
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Merge the two arrays by comparing elements
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Concatenate any remaining elements (only one of the following loops will run)
    return result.concat(left.slice(i)).concat(right.slice(j));
}

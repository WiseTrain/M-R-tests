"use strict";
/**
 * Merge Sort Algorithm
 * 
 * Sorts an array using the merge sort algorithm, which divides
 * the array into smaller subarrays, recursively sorts them, and
 * then merges them into a single sorted array.
 * 
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} A new array containing the elements of the original array
 *                  in sorted order.
 */
const mergeSort = (arr) => {

    // check if the array consists of only one element
    const len = arr.length;
    if (len <= 1) return arr;
    
    // call recursion for both halves of the array
    const half_len = Math.floor(len/2);
    const arr1 = mergeSort(arr.slice(0, half_len));
    const arr2 = mergeSort(arr.slice(half_len));

    // merging two sorted array
    return mergeArrays(arr1, arr2);
}

/**
 * Merges two arrays into a single sorted array.
 * @param {Array} arr1 - The first array to merge.
 * @param {Array} arr2 - The second array to merge.
 * @returns {Array} A new array containing all elements from both input arrays, sorted in ascending order.
 */
const mergeArrays = (arr1, arr2) => {
    const sorted_arr = [];
    let counter1 = 0, counter2 = 0;
    let len1 = arr1.length, len2= arr2.length;

    // Merge elements from both arrays into the sorted array
    while (counter1 < len1 || counter2 < len2) {

        // Check conditions to add elements from arr2 or arr1
        if ((counter1 >= len1) || (arr1[counter1] >= arr2[counter2])) {
            sorted_arr.push( arr2[counter2] );
            counter2++;
        } else if ((counter2 >= len2) || (arr1[counter1] <= arr2[counter2])) {
            sorted_arr.push( arr1[counter1] );
            counter1++;
        } 
    }

    return sorted_arr;
}

// TESTS
// Test Case 1: Sorting an empty array
const emptyArray = [];
const resultEmptyArray = mergeSort(emptyArray);
console.log(resultEmptyArray); // Output: []

// Test Case 2: Sorting an array with one element
const singleElementArray = [42];
const resultSingleElementArray = mergeSort(singleElementArray);
console.log(resultSingleElementArray); // Output: [42]

// Test Case 3: Sorting an already sorted array
const sortedArray = [1, 2, 3, 4, 5];
const resultSortedArray = mergeSort(sortedArray);
console.log(resultSortedArray); // Output: [1, 2, 3, 4, 5]

// Test Case 4: Sorting an array in descending order
const descendingArray = [5, 4, 3, 2, 1];
const resultDescendingArray = mergeSort(descendingArray);
console.log(resultDescendingArray); // Output: [1, 2, 3, 4, 5]

// Test Case 5: Sorting an array with duplicate values
const duplicateArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const resultDuplicateArray = mergeSort(duplicateArray);
console.log(resultDuplicateArray); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// Test Case 6: Sorting a large random array
const randomArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));

const expectedSorted = randomArray.map((x) => x);
expectedSorted.sort((a, b) => a - b);

const resultRandomArray = mergeSort(randomArray);

if(JSON.stringify(expectedSorted) === JSON.stringify(resultRandomArray))
    console.log("Merge Sort works as expected.");
else 
    console.log("Merge Sort works incorrectly.");

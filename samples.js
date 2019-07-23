'use strict';
// /* determining big O */

// 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

/* This has a constant runtime, or O(1), because you are asking everyone at the same time rather than asking each person one by one. You ask, someone immediately answers. The amount of actions is the same every time.
 */

// 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

/* 
This has a runtime of O(n), or linear runtime. The amount of actions (questions 
in this ask) one must take is directly proportional to the amount of people you 
ask or are in the room (input). This is like a for loop in programmatic terms.
*/

// 2.
function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else return false;
}

/* 
This has a constant runtime, or O(1). A single value is passed in as a parameter and the amount of actions is the same regardless of the input. The algorithm just checks if the value is even through a single mod operation. 
*/

//exercise 3
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
/* 
The areYouHere() function has a runtime of O(n^2), or polynomial runtime, 
due to the nested for loop. For every element in the first array, you have to run
through every element in the second array.
*/

// exercise 4
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
/*
This has a runtime of O(n), or linear runtime. The amount of statements the doubler
function runs is directly proportional to the length of the array, denoted 
by the for loop.
*/

// exercise 5
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
/* 
This has a runtime of O(n), or linear runtime. The amount of actions (amount of times
through the for loop) one must take is directly proportional to the length of the array.
*/

// 6. Creating pairs:
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}
/* 
The areYouHere() function has a runtime of O(n^2), or polynomial runtime, 
due to the nested for loop. For every element in the first array, you have to run
through every element in the second array.
*/

// 7. Compute the sequence
/*   */
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    } // result[3 - 2] + result[3 - 3] => result[1] + result[0]
  }
  return result;
}
/* 
Computes the fibonacci sequence. This compute(num) algorithm uses a for loop to first push a 1 and then a 2 to the first
and second elements of the array, respectively. Then it adds the last two elements in the array
prior to the current index (in which the value will be placed) together, inserting that sum. It
continues until the array hits the exact amount of elements equal to the num parameter. 
if the num is less than 1, then it returns the empty array.
The runtime complexity is O(n), or linear, which runs directly propotional the the length of the array.
*/

// 8. An efficient search
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}
/* This is a binary search tree, which halves the amount of remaining choices through
each loop through taking advantage of a sorted array. If the current element is bigger, search only
the lower half. If the current element is smaller, search the larger half for the item. It returns
the index where the item is located. If not found, returns -1.
This has a runtime complexity of log(n), or logarithmic runtime, largely powered through the
Math.floor((minidx + maxIdx)/2), which halves the set of next choices to search.
*/

// 9. Random element
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
/* This has a runtime of O(1), or constant runtime. This single statement will select a random
index of the array, and return the value found at that index. It executes the same amount of statements
regardless of the length of the array.
*/


// 10. What Am I?
function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
/* 
This function checks if parameter n is a prime number, is greater than or equal to two, and is an integer.
If it is prime, returns true. Otherwise returns false.  
In the worst case scenario, in the case of a prime number, the for loop will run all the way up
to the maximum value of the argument n. Thus, this function has a runtime complexity of n, or O(n).
*/

// 11. Tower of Hanoi


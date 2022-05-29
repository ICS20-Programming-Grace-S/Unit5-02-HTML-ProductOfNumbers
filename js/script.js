// Created by: Grace S
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict';
/**
 * This function displays the product of two numbers inputted by the user
 */
function displayNumbers() {

  // Variables (Gets First and Second Integer)
  let firstNum = parseInt(document.getElementById("first-int").value);
  let secondNum = parseInt(document.getElementById("second-int").value);

  // Initializes Variables
  let product = 0;
  let message = "";

  if (firstNum > 0 && secondNum > 0) {
    // for loop that calculates the product of both integers
    for (let counter = 0; counter < secondNum; counter++) {
      product += firstNum;
    }   
    message = "The product of the two numbers you entered is: " + product;
  } else {
    message = "Please enter a positive integer in the boxes!";
  }
    
  // Displays Product results
  document.getElementById("output").innerHTML = message;
}
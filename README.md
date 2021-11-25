# Credit-Cards-Checker
Checking arrays of valid credit cards using JS.
This is a practice project from the full stack engineer path at Codeacademy.

        1st function will validate credit cards - takes an parameter of an array:
  - the function will check if the array contains a valid credit card number or not and return true/false.
  - the check will be done using the Luhn algorithm.
       2nd function finds invalid cards - takes a parameter of nested arrays:
  - the function will use the above function to check which credit cards are invalids.
  - and will also return a nested array of invalid cards.
       3rd function gets the company name of the card issuer - will look to identify which companies issued invalid credit cards.
  - has a parameter of nested cards arrays and will return an array o companies, with no duplicate names;
  - the first credit card digit will be unique to each company

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

//1st function, option 1
function validateCred(array){
//variable to hold the total sum from running the Luhn algorithm
    let total = 0;

 //looping through the array of credit cards
    for(let i = array.length - 1; i >= 0; i--){
//variable to hold the current value when iterating        
        let currentValue = array[i];
//an if statement to execute when the index value is an even number
//i.e. array.length - 1 = 15, i = 15, % 2 will be 0  => will skip the if statement
        if((array.length -1 - i) % 2 === 1){
            currentValue *= 2;
            if(currentValue > 9){
                currentValue -= 9
            }
        }
//after each loop the value will be added to the "total" variable
        total += currentValue;
    }
//return true/false if the reminded of total is 0
    return total % 10 === 0;
}

validateCred(valid1)
//1st function option 2
/*function validateCred(array){
    let newList = array.slice(0, -1);
    let revList = [];
    let doubledList = [];

    for(let i = newList.length - 1; i >= 0; i--){
        revList.push(newList[i]);
    }

    for(let j = 0; j <= revList.length - 1; j += 2){
        if(revList[j] * 2 > 9){
            doubledList.push((revList[j] * 2) - 9);
        } else { doubledList.push(revList[j] * 2)}
    }

    for(let k = 1; k <= revList.length - 1; k += 2){
        doubledList.push(revList[k])
        }

    let totalSum = 0;
    for(let x = 0; x <= doubledList.length - 1; x++){
        totalSum += doubledList[x];
    }
    totalSum += array[array.length - 1]

    totalSum % 10 === 0? true : false
}
*/

//2nd function
function findInvalidCards(nestedArray){
//variable to hold the arrays of invalid cards
    let invalidCards = [];
//looping through the nested arrays
    for(let j = 0; j <= nestedArray.length; j++){
//variable to hold the current card in the nested arrays
        let currentCard = nestedArray[j];
//checking if the current card is invalid using the 1st function 
        if(!validateCred(currentCard)){
//all matching  arrays will be added to the array of invalid cards 
            invalidCards.push(currentCard)
        }
    }
//function will return a nested array of invalid cards
    return invalidCards;
}

/* 3rd function, option 1
function idInvalidCardCompanies(cardNumbers){
    const companies = [];
    for(i = 0; i < cardNumbers.length; i++){
        if(cardNumbers[i][0] === 3){
            if(companies.indexOf('Amex') === -1){
                companies.push('Amex')
            }
        } else if(cardNumbers[i][0] === 4){
            if(companies.indexOf('Visa') === -1){
                companies.push('Visa')
            }
        } else if(cardNumbers[i][0] === 5){
            if(companies.indexOf('Mastercard') === -1){
                companies.push('Mastercard')
            }
        } else if(cardNumbers[i][0] === 6){
            if(companies.indexOf('Discover') === -1){
                companies.push('Discover')
            }
        } else {console.log('Company not found')}
    }
    return companies;
}
*/

//3rd function, option 2
function idInvalidCardCompanies(nestedCards){
//variable to hold the company names
    let companies = [];
//looping through the nested cards array
    for(let x = 0; x < nestedCards; x++){
//using a switch to check the 1st digit of each card array
        switch(nestedCards[x][0]){
            case 3:
//if Amex is not an index in the variable 'companies'. execute statement
                if(companies.indexOf('Amex') === -1){
                    companies.push('Amex')
                }
            case 4:
                if(companies.indexOf('Visa') === -1){
                    companies.push('Visa')
                }
            case 5:
                if(companies.indexOf('Mastercard') === -1){
                    companies.push('Amex')
                }
            case 6:
                if(companies.indexOf('Discover') === -1){
                    companies.push('Discover')
                }
//if the 1st digit in the array is not matched to any of the cases, execute default statement
            default:
                console.log('Company name not found')
        }
    }
    return companies;
}




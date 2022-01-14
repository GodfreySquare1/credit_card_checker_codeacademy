// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below: 
const validateCred = (array) => { // declaringvalidateCred function
    var total = 0; // declare a num variable to tally up the count.
    // check if an array length is even
    if (array.length % 2 === 0) {
        // counting backwards from last index to first
        for (let i = array.length - 1; i >= 0; i--) {
            let newArr = array[i] // reason for this is to avoid mutation when using findInvalidCards()
            if (i % 2 == 0) {
                newArr *= 2
                if (newArr > 9) {
                    newArr -= 9;
                } // end of second nested IF statmenet
            } // end of first nested IF statmenet
            total += newArr
            // console.log(total)
        } // end of for loop
        // end of first IF statment 
    } else {
        if (array.length % 2 !== 0) { // if array length is not even
            for (let j = array.length - 1; j >= 0; j--) { // counting backwards from last index 
                let newArr = array[j] // reason for this is to avoid mutation when using findInvalidCards()
                if (j % 2 != 0) {
                    newArr *= 2
                    if (newArr > 9) {
                        newArr -= 9;
                    } // end of 
                } // end of second if statment within else statement
                total += newArr // add the numbers up to total them
                // console.log(total)
            } // end of for loop
        } // end of first IF statment within the else statment
    } // end of else statment
    return total % 10 === 0
}; //end of validateCred function

console.log(validateCred(valid1))
// console.log(batch)

const findInvalidCards = (array) => {
    const invalidCCInfo = []; // declare an empty array to store invalid cards
    for (let i = 0; i < array.length; i++) { // loop through the nested arrays
        if (!validateCred(array[i])) { // if a card equates to false
            invalidCCInfo.push(array[i]) // push that false card number to the invalidCCInfo [] 
        }
    }
    return invalidCCInfo; // return the nested array of invalid cards
}; // end of findInvalidCards function

//console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5]));
console.log(findInvalidCards(batch))

const idInvalidCardCompanies = (array) => { // declare idInvalidCardCompanies
    let ccCompany = []; // declare empty array to store company name
    for (let i = 0; i < array.length; i++) { // loop through nested arrays
        if (array[i][0] === 3) {
            ccCompany.push('Amex');
        } else if (array[i][0] === 4) {
            ccCompany.push('Visa');
        } else if (array[i][0] === 5) {
            ccCompany.push('Mastercard');
        } else if (array[i][0] === 6) {
            ccCompany.push('Discover');
        } else {
            console.log('Company not found!')
        }
        var removeDuplicates = [...new Set(ccCompany)]; // remove duplicates from array
    } // end of for loop
    return removeDuplicates;
}; // end of idInvalidCardCompanies function.

console.log(idInvalidCardCompanies(batch))

//credit card checker - my solution
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
// adjusting mystery 5 to test id, original lead value is 4
// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

//testing unknown card companies

const batch2 = [5,6,7];
// Add your functions below:

const validateCred = array => {
  
  let ndigits = array.length;
  let sum = array[ndigits-1];
 
 
  for (let i = ndigits-1; i > 0; i--){
    let currValue = array[i];
    //console.log(currValue);
    //console.log(`Iteration: ${i}, starting sum is ${sum}; currValue is: ${currValue}`);
    
    if(i%2 !== 0){
      sum += currValue;
      //console.log(`continue triggered, ending sum is ${sum}`);
      continue;
    } else{
    currValue *=2;      
    if(currValue > 9){
      currValue -= 9;
    }
    sum += currValue;
    //console.log(`End of iteration ${i} sum: ${sum}`);
    }
    
  }
  //console.log(sum);
  if(sum % 10 === 0){
    return true;
  } else{
    return false;
  }
    
 }


//console.log(validateCred(invalid1));


const findInvalidCards = array2 =>{
  const badCards = [];
  for(let i = array2.length; i >0; i--){
    let suspectCard = array2[i-1];
    //console.log(`suspected card: ${suspectCard}`);
    let result = validateCred(suspectCard);
    if(result === false){
      //console.log(`bad card found: ${suspectCard}`);
      badCards.push(suspectCard);
    }
  }
  return badCards;
}

const idInvalidCardCompanies = array3 => {
  let badDigits = [];
  let badCompanies = [];
  for(let i = array3.length; i >0; i--){
    let leadDigit = array3[i-1][0];
    badDigits.push(leadDigit);
    }    
    console.log(badDigits);
    let amex = badDigits.includes(3);
    let visa = badDigits.includes(4);
    let mcard = badDigits.includes(5);
    let discover = badDigits.includes(6);
    let unk = badDigits.includes(0) || badDigits.includes(1) || badDigits.includes(2) || badDigits.includes(7) || badDigits.includes(8) || badDigits.includes(9);
    //console.log(`Amex: ${amex}`)
    if (amex === true){
      badCompanies.push('Amex (American Express)');
    }
    if (visa === true){
      badCompanies.push('Visa');
    }
    if (mcard === true){
      badCompanies.push('Mastercard');
    }
    if (discover === true){
      badCompanies.push('Discover');
    }
    if (unk === true){
      badCompanies.push('Company Not Found');
    }
    //console.log(badCompanies);
    return badCompanies;
    }
  




//console.log(badCards);
//console.log(batch[0])
let testRun =findInvalidCards(batch);
console.log(testRun);
console.log(idInvalidCardCompanies(testRun));


console.log(idInvalidCardCompanies([invalid1]));




/* 
function checkLuhn(string purportedCC) {
    int sum := integer(purportedCC[length(purportedCC)-1])
    int nDigits := length(purportedCC)
    int parity := nDigits modulus 2
    for i from 0 to nDigits - 2 {
        int digit := integer(purportedCC[i])
        if i modulus 2 = parity
            digit := digit × 2
        if digit > 9
            digit := digit - 9 
        sum := sum + digit
    }
    return (sum modulus 10) = 0
}
*/

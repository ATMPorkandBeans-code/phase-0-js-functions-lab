




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount){

    taxValue = amount * 0.10
    return taxValue
}

function convertToUpperCase(text){

    upperCaseText = text.toUpperCase();
    return upperCaseText
}

function findMaximum(num1, num2){

    if (num1 > num2){

        return num1
    }
    else if(num1 === num2){

        return num1
    }
    else{

        return num2
    }
}

function isPalindrome(word){

    if (word === word.split('').reverse().join('')){

        return true
    }
    else{

        return false
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage){

    if (discountPercentage === 100 ){

        const discountedPrice = 0
    }

    //else if(discountPercentage > 100){

        //console.log("discountPercentage only up to 100%")
    //}

    else{

    discountDecimal = discountPercentage/100

    discountedPrice = originalPrice - (originalPrice * discountDecimal)

    return discountedPrice
}
}

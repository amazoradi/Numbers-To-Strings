// Create a simple converter to convert the numbers 1 - 10 to the text for that number so that if the number 2 is passed into the converter it returns “two”.

// Next add to your converter service to allow numbers up to 1, 000.If you have time you can keep going as high as you like.
numberStings = {
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine",
  "10": "ten",
  "11": "eleven",
  "12": "twelve",
  "13": "thirteen",
  "14": "fourteen",
  "15": "fifteen",
  "16": "sixteen",
  "17": "seventeen",
  "18": "eighteen",
  "19": "nineteen",
  "20": "twenty",
  "30": "thirty",
  "40": "fourty",
  "50": "fifty",
  "60": "sixty",
  "70": "seventy",
  "80": "eighty",
  "90": "ninety",
  "100": "one hundred",
  "200": "two hundred",
  "300": "three hundred",
  "400": "four hundred",
  "500": "five hundred",
  "600": "six hundred",
  "700": "seven hundred",
  "800": "eight hundred",
  "900": "nine hundred",
  "1000": "one thousand"
}


convertNum = testNum => {

  if (testNum <= 19 || testNum % 10 === 0) {
    // converts number passed in to a string
    let stringNum = testNum.toString()

    //searches object of the sting key and returns that value
    let wordNum = numberStings[stringNum]
    console.log(wordNum)

  } else if (testNum <= 99 && testNum >= 20 && testNum % 10 != 0) {
    // gets the sting of the first digit in a two digit num
    let firstNumOfString = testNum.toString()[0]

    //gets the string of the second digit in a two digit num
    let secondNumber = testNum.toString()[1]

    let wholeNumber = numberStings[firstNumOfString + 0] + " " + numberStings[secondNumber]
    console.log(wholeNumber)

  } else if (testNum <= 999 && testNum >= 101 && testNum % 10 != 0) {
    if (parseInt(testNum.toString().substring(1)) >= 11 && parseInt(testNum.toString().substring(1)) <= 19) {
      let firstNumOfString = testNum.toString()[0]
      let secondNumber = testNum.toString().substring(1)
      let wholeNumber = numberStings[firstNumOfString + 0 + 0] + " " + numberStings[secondNumber]
      console.log(wholeNumber)

    } else {
      // gets the sting of the first digit in a three digit num
      let firstNumOfString = testNum.toString()[0]
      //gets the string of the second digit in a three digit num
      let secondNumber = testNum.toString()[1]
      //gets the string of the third digit in a three digit num
      let thirdNumber = testNum.toString()[2]
      let wholeNumber = numberStings[firstNumOfString + 0 + 0] + " " + numberStings[secondNumber + 0] + " " + numberStings[thirdNumber]
      console.log(wholeNumber)
    }
  }

}

convertNum(1000)
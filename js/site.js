//First, create a function that will perform all of the operations we want to accomplish.
function reverseString() {
  
  //We create a variable that receives the value of the user's input and wire it to the button Id in our markup. 
  let userWord = document.getElementById("tacoCat").value;

  //Then, we need to normalize the case of the input by changing all of the text to lowercase and gutting the input of any characters that are not alphanumerical or spaces with regular expressions.
  let cleanedWord = userWord.toLowerCase().replace(/[./\?']/, '').replaceAll(/\s/g,'');

  //We then create the variables that we will use to loop through the array of characters in the "cleaned" version of the user's input.

  //Using the "start" variable, we get the last letter of the user's input.
  let start = cleanedWord.length - 1;

  //reverseWord begins as an empty string that will get filled in backwards as we loop through the array.
  let reverseWord = "";
  
  //Before we begin looping through the array, we want to check if the user has entered a valid string of text. We do so with a conditional statement:
  //Check userInput for empty string
  if(userWord === "") {
    
    output = document.getElementById("tacoOutput");
    output.innerText = "Please enter some text.";

  //Once the user has entered valid text, we can begin looping through the user's input backwards:
  } else {
    //If the user inputs text, move forword with the loop
  //For loop
  for (let i = start; i >= 0; i--) {
    reverseWord = reverseWord + cleanedWord[i];
    
  //How the loop works through each iteration for cleanedWord, "frank":

    //Before Loop -- reverseWord = ""
  //Loop 1 - i = 4: cleanedWord[4] = k reverseWord [] + k = [k]
  //Loop 2 - i = 3: cleanedWord[3] = n reverseWord [k] + n = [k, n]
  //Loop 3 - 1 = 2: cleanedWord[2] = a reverseWord [k, n] + a = [k, n, a]
  //Loop 4 - i = 1: cleanedWord[1] = r reverseWord [k, n, a,] + r = [k, n, a, r]
  //Loop 5 - i = 0: cleanedWord[0] = f reverseWord [k, n, a, r, f]
  }
  
// We need to create an output in the browser by wiring our function's output to the paragraph's Id in our markup:
  let output = document.getElementById("tacoOutput");

  // The function will output the user's word, reversed, as a lowercase string without spaces or non-alphanumerical text.
  output.innerText = reverseWord;

  //Finally, we confirm or deny whether the user's input is, in fact, a palindrome:
  if(cleanedWord == reverseWord) {
    reverseOutput == document.getElementById("reverseOutput");
    reverseOutput.innerText = `CONGRATULATIONS! "${reverseWord}" IS A PALINDROME!`
  } else {
    reverseOutput.innerText = `Sorry, "${reverseWord}" is not a palindrome.` 
  }
}
}
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// const correction = tutorials.map( fix => {
   
//   let word = tutorials.slice(str.length [0,1]) 
//    return word

    
// }


const titleCased = () => {
  return tutorials.map((phrase) => {
   let splitSent = phrase.split(' ')
   const word = splitSent.map((letter)  => letter.charAt(0).toUpperCase() + letter.slice(1) );
   return word.join(" ");
   })
 }
 titleCased();



 
    //  let cap = word.charAt(0).toUpperCase(); 
    //  let w = cap + word.slice(1);
  //  let titleSent = [];
  //  for (let i = 0; i < splitsent.length; i++){
    //  let word = splitsent[i];





// const titleCased = () => {
//   return tutorials.map(string => {
//     const eachWord = string.split (' ');
//     const capitalizeEachWord =
//       eachWord.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     const result = capitalizeEachWord.join (' ');
//     return result
//   })
// }
// titleCased();

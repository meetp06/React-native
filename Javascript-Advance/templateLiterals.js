/*
    *Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

*/

{
  const name = 'John';
  const age = 30;

  const message = `Hello, my name is ${name} and I am ${age} years old.`;

  console.log(message); // Output: "Hello, my name is John and I am 30 years old."


  const poem = `
  The woods are lovely, dark and deep,
  But I have promises to keep,
  And miles to go before I sleep,
  And miles to go before I sleep.
`;

  console.log(poem);
}


/*
    * Tagged template
*/

{

  const newValues = ["John", 35];
  const name = "Alice";
  const age = 25;
  const v = `My name is ${name} and I am ${age} years old.`

  function myTagFunction(statics, ...tags) {
    let newString = v;

    console.log(statics); // an array of the string literals in the template
    console.log(tags); // an array of the interpolated values in the template

    tags.forEach((value, index) => {
      newString = newString.replace(value, newValues[index]);
    })

    return newString;
  }

  const result = myTagFunction`My name is ${name} and I am ${age} years old.`;
  console.log(result); // "Hello World"
}


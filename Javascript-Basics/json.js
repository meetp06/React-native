let text = '{ "employees" : [' + '{ "firstName":"John" , "lastName":"Doe" },' + '{ "firstName":"Anna" , "lastName":"Smith" },' + '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const cur = JSON.parse(text);
console.log(cur);
const json = JSON.stringify(cur);
console.log(json);
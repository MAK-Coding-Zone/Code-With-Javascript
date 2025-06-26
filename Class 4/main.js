// global scope

// const name ="muzammil";

// function nm(params) {
//     console.log(name);
    
// }
// {
//     console.log(name);
// }
// // nm(); // Output: muzammil



// functional scope 

// function nm(params) {
//     var name = "muzammil";
//     console.log(name);
    
// }

// nm();
// console.log(name);



// block scope 
// let , const 
/* `let` and `const` are block-scoped variables in JavaScript. */
// {
//     let name = "muzammil";
//     console.log(name); // Output: muzammil
// }
// console.log(name); // ReferenceError: name is not defined
// {
//     const name = "muzammil";
//     console.log(name); // Output: muzammil
// }
// console.log(name); // ReferenceError: name is not defined
// Data types
/* Primitive data types 
    - stored directly in a location the variable accesses.
    - stored on the stack

   Reference Data Types
   - accessed by referecne
   - objects that are stored on the heap
   - a pointer to a location in memory.
  */

  /* Primitive 
  - String
  - Number : all integers , decimals etc.
  - Boolean : true / false
  - Null : Null value
  - Undefined: declared variable with no value assigned.
  - Symbols (ES6) 
 */

  /* Reference Types
  - Arrays
  - Object Literals
  - Functions
  - Dates
  - Anything else
    Object wrappers
  */

    /* Dynamically typed language
    - Types are associated with values not variables
    - The same variable can hold multiple types
    - we do not need to specify types
    - Most other languages are statically typed ( Java, C, C++)
    - There are superlets of JS and addons to allow static typing (TypeScript, Flow)
    */


    // Primitives
    // strings
    const name = 'John Doe';
    //Number
    const age = 45;
    const age1 = '45';
    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof age1);
    //Booloean
    const hasKids = true;
    console.log(typeof hasKids);

    //Null
    const car = null;
    console.log(typeof car); // You get type as object and not null .. its strange
    // Google 'type of null as object' for more details.

    // Undefined
    let test;
    console.log(typeof test);

    // Symbol
    const sym = Symbol();
    console.log(typeof sym);

    // Reference types - Objects
    // Arrays
    const hobbies = ['movies', 'music'];
    console.log(typeof hobbies);

    // Object Literals
    const address = {
      city: 'Boston',
      state: 'MA'
    }
    console.log(typeof address)

    //Dates
    const today = new Date();
    console.log(today);
    console.log(typeof today);

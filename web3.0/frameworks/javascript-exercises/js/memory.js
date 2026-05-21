// two types of memory 1. stack 2. heap

// stack memory is used for storing primitive data types and function calls
// heap memory is used for storing objects and arrays

let a = "saurabh"

// in stack memory, a variable is created and assigned a value

let mtyobj = {
    name: "saurabh",
    age: 24,
    city: "delhi"
}

let usertwo = mtyobj

// in styack a copy was given in heap memory, both usertwo and mtyobj are pointing to the same object in heap memory

usertwo.name = "saurabh gupta"

console.log(mtyobj.name) // this will print "saurabh gupta" because both usertwo and mtyobj are pointing to the same object in heap memory

// if we want to create a new object in heap memory, we can use the spread operator
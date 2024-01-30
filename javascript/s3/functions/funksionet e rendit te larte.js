// 1. Kur funksioni pranon funksion

function add(x, f) {
    return x + f()
}

console.log(
    add(15, function() { return 100; })
) 



// 2. Kur funksioni kthen funksion

function greet() {
    return function() {
        console.log('Hi there!')
    } 
}

// console.log(greet())

// greet()()


// 3. Kur funksioni pranon dhe kthen funksion

function add(x, f) {
    return function() {
        console.log(x + f())
    }
}

// call:  add(number, function e cila ben reutrn)
add(10, () => 200)()
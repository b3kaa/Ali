function greeting(name) {
    const msg = 'Hi '

    function sayHi() {
        console.log(msg + name)
    }

    sayHi()
}

greeting('Ali')
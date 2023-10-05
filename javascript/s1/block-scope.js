{
    // block (local) scope - kur variablat/konstantat kufizohen vetem brenda bllokut ku jane te deklaruara
    const x = 10
    let y = 20
    var z = 30

    console.log(x, y, z)
}
// duke pasur parasysh se const dhe let kane block scope - dmth jane te kufizuara per qasje vetem brenda bllokut
// rrjedhimisht ato nuk jane te qasshem nga jasht bllokut
// console.log(x) // nuk jane te qassheme jashta bllokut ku jane definuar
// console.log(y) // nuk jane te qassheme jashta bllok ku jane definuar
console.log(z)
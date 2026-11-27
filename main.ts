let getal = 0
basic.forever(function () {
    basic.showNumber(getal)
    getal += 3
})
basic.forever(function () {
    if (getal > 12) {
        getal = 0
    }
})

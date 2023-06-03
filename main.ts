basic.forever(function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # . # .
        `)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1500)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . # # .
        # . . # .
        . # # . .
        `)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(4000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1500)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(100)
})

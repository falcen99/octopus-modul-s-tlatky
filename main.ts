basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) < 20) {
        basic.showString("A")
    } else if (pins.analogReadPin(AnalogPin.P1) > 30 && pins.analogReadPin(AnalogPin.P1) < 70) {
        basic.showString("B")
    } else if (pins.analogReadPin(AnalogPin.P1) > 70 && pins.analogReadPin(AnalogPin.P1) < 110) {
        basic.showString("C")
    } else if (pins.analogReadPin(AnalogPin.P1) > 110 && pins.analogReadPin(AnalogPin.P1) < 150) {
        basic.showString("D")
    } else if (pins.analogReadPin(AnalogPin.P1) > 150 && pins.analogReadPin(AnalogPin.P1) < 600) {
        basic.showString("E")
    }
})

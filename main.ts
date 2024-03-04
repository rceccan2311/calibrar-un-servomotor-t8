input.onButtonPressed(Button.A, function () {
    angulo = Math.min(0, angulo - 10)
    pins.servoWritePin(AnalogPin.P0, angulo)
    led.stopAnimation()
})
input.onButtonPressed(Button.B, function () {
    angulo = Math.min(180, angulo + 10)
    pins.servoWritePin(AnalogPin.P0, angulo)
    led.stopAnimation()
})
let angulo = 0
angulo = 90
pins.servoWritePin(AnalogPin.P0, angulo)
basic.forever(function () {
    basic.showNumber(angulo)
})

basic.showIcon(IconNames.Happy)
let DISTANCIA = 0
maqueen.servoRun(maqueen.Servos.S1, 10)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    DISTANCIA = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (DISTANCIA < 5) {
        music.playMelody("C5 B A G F E D C ", 500)
        basic.showIcon(IconNames.Heart)
        basic.showString("HOLA")
        for (let index = 0; index < 2; index++) {
            maqueen.servoRun(maqueen.Servos.S1, 90)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            basic.pause(1000)
            maqueen.servoRun(maqueen.Servos.S1, 10)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(1000)
        }
    } else {
        basic.showIcon(IconNames.Happy)
        maqueen.servoRun(maqueen.Servos.S1, 10)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})

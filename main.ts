basic.showIcon(IconNames.Happy)
let DISTANCIA = 0
maqueen.servoRun(maqueen.Servos.S1, 0)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    DISTANCIA = maqueen.Ultrasonic(PingUnit.Centimeters)
})
basic.forever(function () {
    if (DISTANCIA < 5) {
        basic.showIcon(IconNames.Heart)
        basic.showString("HOLA")
        basic.showString("ENCANTADO")
        music.playMelody("C5 B A G F E D C ", 500)
        for (let index = 0; index < 2; index++) {
            maqueen.servoRun(maqueen.Servos.S1, 90)
            strip.showRainbow(1, 360)
            basic.pause(1000)
            maqueen.servoRun(maqueen.Servos.S1, 0)
            strip.showRainbow(1, 360)
            basic.pause(1000)
        }
    } else {
        basic.showIcon(IconNames.Happy)
        maqueen.servoRun(maqueen.Servos.S1, 0)
    }
})

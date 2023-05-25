led.enable(false)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})

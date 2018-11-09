let PitchRight = 0
let PitchLeft = 0
let RollRight = 0
let RightOutput = 0
let MappedPitch = 0
let RollLeft = 0
let LeftOutput = 0
let RawPitch = 0
let MappedRoll = 0
let Pixel: neopixel.Strip = null
let RawRoll = 0
radio.onDataPacketReceived(({ receivedString: name, receivedNumber: value }) => {
    if (name == "Roll") {
        RawRoll = value
        MappedRoll = pins.map(
            RawRoll,
            -90,
            90,
            0,
            180
        )
        RollLeft = MappedRoll
        RollRight = MappedRoll
    }
    if (name == "Pitch") {
        RawPitch = value
        MappedPitch = pins.map(
            RawPitch,
            -90,
            90,
            0,
            180
        )
        PitchLeft = MappedPitch
        PitchRight = 180 - MappedPitch
    }
    LeftOutput = (PitchLeft + RollLeft) / 2
    RightOutput = (PitchRight + RollRight) / 2
    if (RawPitch == 0 && RawRoll == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        pins.servoWritePin(AnalogPin.P1, LeftOutput)
        pins.servoWritePin(AnalogPin.P2, RightOutput)
    }
    if (name == "B") {
        if (value == 1) {
            control.raiseEvent(
                EventBusSource.MICROBIT_ID_BUTTON_B,
                EventBusValue.MICROBIT_BUTTON_EVT_CLICK
            )
        } else {
            control.raiseEvent(
                EventBusSource.MICROBIT_ID_BUTTON_A,
                EventBusValue.MICROBIT_BUTTON_EVT_CLICK
            )
        }
    }
})
input.onButtonPressed(Button.A, () => {
    Pixel.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Pixel.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    Pixel.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    Pixel.setPixelColor(3, neopixel.colors(NeoPixelColors.Orange))
    Pixel.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, () => {
    Pixel.clear()
    Pixel.show()
})
radio.setGroup(5)
Pixel = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
Pixel.setBrightness(128)
basic.forever(() => {
    Pixel.rotate(1)
    Pixel.show()
    basic.pause(100)
})

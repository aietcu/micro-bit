let gear = ""
let direction = ""
let x = 0
input.onButtonPressed(Button.A, () => {
    direction = "left"
    gear = "drive"
    radio.sendString(direction)
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, () => {
    direction = "stop"
    radio.sendString(direction)
    gear = "neutral"
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, () => {
    direction = "right"
    gear = "drive"
    radio.sendString(direction)
    basic.showArrow(ArrowNames.East)
})
input.onPinPressed(TouchPin.P0, () => {
    gear = "neutral"
    basic.showString("D")
})
direction = "stop"
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(() => {
    x = input.acceleration(Dimension.X)
    if (x > 100 && gear == "drive") {
        direction = "forward"
        gear = "drive"
        radio.sendString(direction)
        basic.showArrow(ArrowNames.North)
    }
    if (x < -100 && gear == "drive") {
        direction = "backward"
        gear = "drive"
        radio.sendString(direction)
        basic.showArrow(ArrowNames.South)
    }
})

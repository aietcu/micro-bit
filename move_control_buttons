let direction = ""
input.onButtonPressed(Button.A, () => {
    direction = "left"
    radio.sendString(direction)
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.B, () => {
    direction = "right"
    radio.sendString(direction)
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.AB, () => {
    direction = "forward"
    radio.sendString(direction)
    basic.showArrow(ArrowNames.North)
})
input.onPinPressed(TouchPin.P0, () => {
    direction = "backward"
    radio.sendString(direction)
    basic.showArrow(ArrowNames.South)
})
direction = "stop"
radio.setGroup(1)
radio.setTransmitPower(7)

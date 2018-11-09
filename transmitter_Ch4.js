
let Button_B_state = 0
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, () => {
    if (Button_B_state == 1) {
        Button_B_state = 0
    } else {
        Button_B_state = 1
    }
    radio.sendValue("B", Button_B_state)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, () => {
    if (Button_B_state == 1) {
        Button_B_state = 0
    } else {
        Button_B_state = 1
    }
    radio.sendValue("B", Button_B_state)
})
radio.setGroup(4)
basic.forever(() => {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("Pitch", input.rotation(Rotation.Pitch))
        radio.sendValue("Roll", input.rotation(Rotation.Roll))
    } else {
        radio.sendValue("Pitch", 0)
        radio.sendValue("Roll", 0)
    }
})

let Pin1 = 0
let Pin0 = 0
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_C_DOWN, () => {
    Pin0 = 100
    Pin1 = 100
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
bluetooth.onBluetoothDisconnected(() => {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_C_UP, () => {
    Pin0 = 0
    Pin1 = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_A_DOWN, () => {
    Pin0 = 10
    Pin1 = 100
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_B_DOWN, () => {
    Pin0 = 100
    Pin1 = 10
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
bluetooth.onBluetoothConnected(() => {
    Pin0 = 0
    Pin1 = 0
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_D_DOWN, () => {
    Pin0 = 10
    Pin1 = 10
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_A_UP, () => {
    Pin0 = 0
    Pin1 = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_B_UP, () => {
    Pin0 = 0
    Pin1 = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_D_UP, () => {
    Pin0 = 0
    Pin1 = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
basic.forever(() => {
    pins.analogWritePin(AnalogPin.P0, Pin0)
    pins.analogWritePin(AnalogPin.P1, Pin1)
})

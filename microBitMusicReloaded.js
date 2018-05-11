let time = 0
let theEnd = false
let resetTime = 0
let onPin0 = false
let onPin2 = false
let onPin1 = false
let melody = false
input.onButtonPressed(Button.B, () => {
    melody = true
})
input.onPinPressed(TouchPin.P1, () => {
    onPin1 = true
})
input.onPinPressed(TouchPin.P2, () => {
    onPin2 = true
})
function reset() {
    onPin0 = false
    onPin1 = false
    onPin2 = false
    melody = false
    theEnd = false
}
input.onButtonPressed(Button.A, () => {
    onPin0 = true
})
resetTime = 500
pins.analogSetPitchPin(AnalogPin.P0)
basic.forever(() => {
    if (onPin1 || onPin2 || onPin0) {
        for (let i = 0; i <= 200; i++) {
            basic.pause(100)
        }
    }
    if (onPin0 == false && onPin1 == false && onPin2 == false && melody == false) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (onPin0 == true && onPin1 == true && onPin2 == true && melody == true) {
        basic.showIcon(IconNames.Sad)
        music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        reset()
    }
    if (onPin0 == false && onPin1 == false && onPin2 == false && melody == true) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(time)
        music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.pause(3000)
        reset()
    }
    if (onPin0 == false && onPin1 == false && onPin2 == true && melody == false) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(time)
        music.playTone(131, music.beat(BeatFraction.Whole))
        basic.pause(resetTime)
        reset()
    }
    if (onPin0 == false && onPin1 == true && onPin2 == false && melody == false) {
        basic.showLeds(`
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(time)
        music.playTone(147, music.beat(BeatFraction.Whole))
        basic.pause(resetTime)
        reset()
    }
    if (onPin0 == false && onPin1 == true && onPin2 == true && melody == false) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(time)
        music.playTone(165, music.beat(BeatFraction.Whole))
        basic.pause(resetTime)
        reset()
    }
    if (onPin0 == true && onPin1 == false && onPin2 == false && melody == false) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            . . . . .
            `)
        basic.pause(time)
        music.playTone(175, music.beat(BeatFraction.Whole))
        basic.pause(resetTime)
        reset()
    }
    if (onPin0 == true && onPin1 == false && onPin2 == true && melody == false) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.pause(time)
        music.playTone(196, music.beat(BeatFraction.Whole))
        basic.pause(resetTime)
        reset()
    }
    if (onPin0 == true && onPin1 == true && onPin2 == false && melody == false) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            . . # # #
            `)
        basic.pause(time)
        music.playTone(220, music.beat(BeatFraction.Whole))
        basic.pause(resetTime)
        reset()
    }
    if (onPin0 == true && onPin1 == true && onPin2 == true && melody == false) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . # # .
            . # # . .
            `)
        basic.pause(time)
        music.playTone(247, music.beat(BeatFraction.Whole))
        basic.pause(resetTime)
        reset()
    }
})

input.onButtonPressed(Button.A, () => {
    basic.pause(1000)
    kitronik.turnLeft(90)
    basic.pause(1000)
    kitronik.stop()
})
input.onButtonPressed(Button.B, () => {
    basic.pause(1000)
    kitronik.turnRight(90)
    basic.pause(1000)
    kitronik.stop()
})
input.onButtonPressed(Button.AB, () => {
    basic.pause(1000)
    kitronik.driveForwards(5)
    basic.pause(1000)
})
kitronik.neutral()
kitronik.setDegreesPerSecond(15)
kitronik.setDistancePerSecond(5)

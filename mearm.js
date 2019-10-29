function reset22() {
    mearm.moveToCentre(MearmServo.Base)
    mearm.moveToCentre(MearmServo.Right)
    mearm.moveToCentre(MearmServo.Left)
    mearm.moveToCentre(MearmServo.Grip)
}
let speed: number
let angle: number
speed = 2
angle = 5
input.onButtonPressed(Button.B, function () {
    mearm.closeGrip()
})
input.onButtonPressed(Button.A, function () {
    mearm.openGrip()
})
input.onButtonPressed(Button.AB, function () {
    reset22()
})
reset22()
basic.forever(function () {
    if (mearm.joystick(Joystick.LeftJoyX) < 0 && (mearm.joystick(Joystick.LeftJoyY) <= angle || mearm.joystick(Joystick.LeftJoyY) >= angle)) {
        mearm.moveByAngle(MearmServo.Base, 0 - speed)
    }
    else if (mearm.joystick(Joystick.LeftJoyX) > 0 && (mearm.joystick(Joystick.LeftJoyY) <= angle || mearm.joystick(Joystick.LeftJoyY) >= angle)) {
        mearm.moveByAngle(MearmServo.Base, speed)
    }

    if (mearm.joystick(Joystick.LeftJoyY) < 0 && (mearm.joystick(Joystick.LeftJoyX) <= angle || mearm.joystick(Joystick.LeftJoyX) >= angle)) {
        mearm.moveByAngle(MearmServo.Right, 0 - speed)
    }
    else if (mearm.joystick(Joystick.LeftJoyY) > 0 && (mearm.joystick(Joystick.LeftJoyX) <= angle || mearm.joystick(Joystick.LeftJoyX) >= angle)) {
        mearm.moveByAngle(MearmServo.Right, speed)
    }
    else if (mearm.joystick(Joystick.RightJoyY) < 0 && (mearm.joystick(Joystick.RightJoyX) <= angle || mearm.joystick(Joystick.RightJoyX) >= angle)) {
        mearm.moveByAngle(MearmServo.Left, 0 - speed)
    }
    else if (mearm.joystick(Joystick.RightJoyY) > 0 && (mearm.joystick(Joystick.RightJoyX) <= angle || mearm.joystick(Joystick.RightJoyX) >= angle)) {
        mearm.moveByAngle(MearmServo.Left, speed)
    }
    else if (mearm.joystick(Joystick.RightJoyX) < 0 && (mearm.joystick(Joystick.RightJoyY) <= angle || mearm.joystick(Joystick.RightJoyY) >= angle)) {
        mearm.moveByAngle(MearmServo.Grip, -1)
    }
    else if (mearm.joystick(Joystick.RightJoyX) > 0 && (mearm.joystick(Joystick.RightJoyY) <= angle || mearm.joystick(Joystick.RightJoyY) >= angle)) {
        mearm.moveByAngle(MearmServo.Grip, 1)
    }
    else if (mearm.joystick(Joystick.RightJoyX) > 0 && mearm.joystick(Joystick.RightJoyY) > 0 ||
        mearm.joystick(Joystick.RightJoyX) > 0 && mearm.joystick(Joystick.RightJoyY) < 0 ||
        mearm.joystick(Joystick.RightJoyX) < 0 && mearm.joystick(Joystick.RightJoyY) > 0 ||
        mearm.joystick(Joystick.RightJoyX) < 0 && mearm.joystick(Joystick.RightJoyY) < 0 ||
        mearm.joystick(Joystick.LeftJoyX) > 0 && mearm.joystick(Joystick.LeftJoyY) > 0 ||
        mearm.joystick(Joystick.LeftJoyX) > 0 && mearm.joystick(Joystick.LeftJoyY) < 0 ||
        mearm.joystick(Joystick.LeftJoyX) < 0 && mearm.joystick(Joystick.LeftJoyY) > 0 ||
        mearm.joystick(Joystick.LeftJoyX) < 0 && mearm.joystick(Joystick.LeftJoyY) < 0)
    { }

    basic.pause(1)
})

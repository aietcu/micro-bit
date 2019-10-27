function reset22() {
    mearm.moveToCentre(MearmServo.Base)
    mearm.moveToCentre(MearmServo.Right)
    mearm.moveToCentre(MearmServo.Left)
    mearm.moveToCentre(MearmServo.Grip)
}
input.onButtonPressed(Button.B, function () {
    mearm.closeGrip()
})
input.onButtonPressed(Button.A, function () {
    mearm.openGrip()
})
input.onButtonPressed(Button.AB, function () {
    //reset22()
    speed = Math.randomRange(1, 10)
})
let speed: number
speed = 2

reset22()
basic.forever(function () {
    if (mearm.joystick(Joystick.LeftJoyX) < 0 && (mearm.joystick(Joystick.LeftJoyY) <= 5 || mearm.joystick(Joystick.LeftJoyY) >= 5)) {
        mearm.moveByAngle(MearmServo.Base, -speed)
    } else if (mearm.joystick(Joystick.LeftJoyX) > 0 && (mearm.joystick(Joystick.LeftJoyY) <= 5 || mearm.joystick(Joystick.LeftJoyY) >= 5)) {
        mearm.moveByAngle(MearmServo.Base, speed)
    }
    if (mearm.joystick(Joystick.LeftJoyY) < 0 && (mearm.joystick(Joystick.LeftJoyX) <= 5 || mearm.joystick(Joystick.LeftJoyX) >= 5)) {
        mearm.moveByAngle(MearmServo.Right, -speed)
    } else if (mearm.joystick(Joystick.LeftJoyY) > 0 && (mearm.joystick(Joystick.LeftJoyX) <= 5 || mearm.joystick(Joystick.LeftJoyX) >= 5)) {
        mearm.moveByAngle(MearmServo.Right, speed)
    }
    if (mearm.joystick(Joystick.RightJoyY) < 0 && (mearm.joystick(Joystick.RightJoyX) <= 5 || mearm.joystick(Joystick.RightJoyX) >= 5)) {
        mearm.moveByAngle(MearmServo.Left, -speed)
    } else if (mearm.joystick(Joystick.RightJoyY) > 0 && (mearm.joystick(Joystick.RightJoyX) <= 5 || mearm.joystick(Joystick.RightJoyX) >= 5)) {
        mearm.moveByAngle(MearmServo.Left, speed)
    }
    if (mearm.joystick(Joystick.RightJoyX) < 0 && (mearm.joystick(Joystick.RightJoyY) <= 5 || mearm.joystick(Joystick.RightJoyY) >= 5)) {
        mearm.moveByAngle(MearmServo.Grip, -3)
    } else if (mearm.joystick(Joystick.RightJoyX) > 0 && (mearm.joystick(Joystick.RightJoyY) <= 5 || mearm.joystick(Joystick.RightJoyY) >= 5)) {
        mearm.moveByAngle(MearmServo.Grip, 3)
    }
})

let pixel_array: neopixel.Strip = null
radio.onDataPacketReceived( ({ receivedString: direction }) =>  {
    if (direction == "forward") {
        kitronik.stop()
        kitronik.forward()
        pixel_array.setBrightness(128)
        pixel_array.clear()
        pixel_array.showColor(neopixel.colors(NeoPixelColors.White))
        pixel_array.show()
        basic.showArrow(ArrowNames.North)
    }
    if (direction == "backward") {
        kitronik.stop()
        kitronik.backward()
        pixel_array.setBrightness(128)
        pixel_array.clear()
        pixel_array.showColor(neopixel.colors(NeoPixelColors.Red))
        pixel_array.show()
        basic.showArrow(ArrowNames.South)
    }
    if (direction == "left") {
        kitronik.stop()
        kitronik.left()
        pixel_array.setBrightness(128)
        pixel_array.clear()
        pixel_array.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
        pixel_array.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
        pixel_array.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
        pixel_array.setPixelColor(3, neopixel.colors(NeoPixelColors.Orange))
        pixel_array.setPixelColor(4, neopixel.colors(NeoPixelColors.Yellow))
        pixel_array.shift(-1)
        pixel_array.show()
        basic.showArrow(ArrowNames.West)
    }
    if (direction == "right") {
        kitronik.stop()
        kitronik.right()
        pixel_array.setBrightness(128)
        pixel_array.clear()
        pixel_array.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
        pixel_array.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
        pixel_array.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
        pixel_array.setPixelColor(3, neopixel.colors(NeoPixelColors.Orange))
        pixel_array.setPixelColor(4, neopixel.colors(NeoPixelColors.Yellow))
        pixel_array.shift(-1)
        pixel_array.show()
        basic.showArrow(ArrowNames.East)
    }
    if (direction == "stop") {
        pixel_array.clear()
        kitronik.neutral()
        kitronik.stop()
    }
})
pixel_array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
radio.setGroup(1)
radio.setTransmitPower(7)
kitronik.stop()
pixel_array.clear()

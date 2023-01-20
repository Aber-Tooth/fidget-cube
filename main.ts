input.onButtonPressed(Button.A, function () {
    player.turn(Direction.Right, 45)
})
input.onGesture(Gesture.TiltLeft, function () {
    player.move(-1)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    player.turn(Direction.Right, 45)
})
input.onGesture(Gesture.Shake, function () {
    player = game.createSprite(2, 2)
    while (true) {
        if (player) {
            break;
        }
    }
})
input.onGesture(Gesture.TiltRight, function () {
    player.move(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let player: game.LedSprite = null
basic.showLeds(`
    . . . . .
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})

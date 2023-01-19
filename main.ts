input.onButtonPressed(Button.A, function () {
    player.turn(Direction.Right, 45)
})
input.onButtonPressed(Button.AB, function () {
    player.move(1)
})
input.onButtonPressed(Button.B, function () {
    player.turn(Direction.Right, 45)
})
input.onGesture(Gesture.Shake, function () {
    player = game.createSprite(2, 2)
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
let sprite = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})

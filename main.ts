input.onGesture(Gesture.LogoUp, function () {
    player.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    player.move(-1)
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
    player.move(1)
})
input.onGesture(Gesture.LogoDown, function () {
    player.change(LedSpriteProperty.Y, -1)
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
let score = 0
let player: game.LedSprite = null
basic.showLeds(`
    . . . . .
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    `)
player = game.createSprite(2, 2)
let snakefood = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (player.isTouching(snakefood)) {
        score += 1
        basic.pause(500)
        snakefood.set(LedSpriteProperty.X, randint(0, 4))
        snakefood.set(LedSpriteProperty.Y, randint(0, 4))
    }
})

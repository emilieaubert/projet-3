basic.forever(function () {
    if (input.lightLevel() >= 100) {
        basic.showIcon(IconNames.Chessboard)
    } else {
        basic.showLeds(`
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})

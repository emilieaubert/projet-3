input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Sad)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
})
basic.showLeds(`
    # . . . .
    . # . . .
    . . . . .
    . . . . .
    . . . . .
    `)
input.setSoundThreshold(SoundThreshold.Loud, 125)
basic.forever(function () {
	
})

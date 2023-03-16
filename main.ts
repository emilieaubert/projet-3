input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    5000,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
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

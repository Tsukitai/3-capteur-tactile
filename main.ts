input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Surprised)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})

input.onButtonPressed(Button.A, function () {
    is_listening = true
})
input.onButtonPressed(Button.B, function () {
    is_listening = false
})
let last_roll = 0
let last_pitch = 0
let is_listening = false
is_listening = true
let last_detected = game.currentTime()
// rolls = [""] # for logging purposes
// pitches = [""] # for logging purposes
for (let index = 0; index <= 8; index++) {
    basic.showNumber(9 - index)
    basic.pause(750)
}
basic.forever(function () {
    let current_pitch: number;
let current_roll: number;
// global pitches
    // global rolls
    if (is_listening) {
        basic.showIcon(IconNames.Yes)
        current_pitch = input.rotation(Rotation.Pitch)
        current_roll = input.rotation(Rotation.Roll)
        // rolls.push("LOG: " + str(current_roll) + "-" + str(last_roll) + " ?? " + str(abs(current_roll - last_roll)))
        // pitches.push("LOG: " + str(current_pitch + "-" + str(last_pitch) + " ?? " + str(abs(current_pitch - last_pitch))))
        if (Math.abs(current_pitch - last_pitch) > 15 || Math.abs(current_pitch - last_pitch) > 15) {
            if (game.currentTime() - last_detected > 500) {
                music.playTone(262, music.beat(BeatFraction.Whole))
                basic.showIcon(IconNames.Diamond)
                pins.servoWritePin(AnalogPin.P1, 180)
                basic.pause(1000)
                pins.servoWritePin(AnalogPin.P1, 0)
                basic.pause(1000)
                basic.showIcon(IconNames.Yes)
                last_detected = game.currentTime()
            }
        }
        last_pitch = current_pitch
        last_roll = current_roll
    } else {
        basic.showIcon(IconNames.No)
    }
})

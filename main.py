def on_button_pressed_a():
    global is_listening
    is_listening = True
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global is_listening
    is_listening = False
input.on_button_pressed(Button.B, on_button_pressed_b)

last_roll = 0
last_pitch = 0
is_listening = False
is_listening = True
last_detected = game.current_time()
# rolls = [""] # for logging purposes
# pitches = [""] # for logging purposes
for index in range(9):
    basic.show_number(9 - index)
    basic.pause(750)

def on_forever():
    global last_detected, last_pitch, last_roll
    # global pitches
    # global rolls
    if is_listening:
        basic.show_icon(IconNames.YES)
        current_pitch = input.rotation(Rotation.PITCH)
        current_roll = input.rotation(Rotation.ROLL)
        # rolls.push("LOG: " + str(current_roll) + "-" + str(last_roll) + " ?? " + str(abs(current_roll - last_roll)))
        # pitches.push("LOG: " + str(current_pitch + "-" + str(last_pitch) + " ?? " + str(abs(current_pitch - last_pitch))))
        if abs(current_pitch - last_pitch) > 15 or abs(current_pitch - last_pitch) > 15:
            if game.current_time() - last_detected > 500:
                music.play_tone(262, music.beat(BeatFraction.WHOLE))
                last_detected = game.current_time()
        last_pitch = current_pitch
        last_roll = current_roll
    else:
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)

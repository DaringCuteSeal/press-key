def wait_for_button(rightbutton, wrongbutton):
    rightpressed = False
    wrongpressed = False
    started = input.running_time()
    now = input.running_time()
    
    while now - started < 2000:
        if input.button_is_pressed(rightbutton):
            rightpressed = True
        if input.button_is_pressed(wrongbutton):
            wrongpressed = True
        now = input.running_time()
        
    if rightpressed == True and wrongpressed == False:
        return True
    else:
        return False
    
def show():
    if Math.random_boolean():
        key = Button.A
        key_wrong = Button.B
        key_str = "A"
    else:
        key = Button.B
        key_wrong = Button.A
        key_str = "B"

    basic.show_string(key_str)
    success = wait_for_button(key, key_wrong)
    
    if success:
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.SAD)

def on_forever():
    show()
basic.forever(on_forever)
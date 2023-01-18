function wait_for_button(rightbutton: number, wrongbutton: number): boolean {
    let rightpressed = false
    let wrongpressed = false
    let started = input.runningTime()
    let now = input.runningTime()
    while (now - started < 2000) {
        if (input.buttonIsPressed(rightbutton)) {
            rightpressed = true
        }
        
        if (input.buttonIsPressed(wrongbutton)) {
            wrongpressed = true
        }
        
        now = input.runningTime()
    }
    if (rightpressed == true && wrongpressed == false) {
        return true
    } else {
        return false
    }
    
}

function show() {
    let key: number;
    let key_wrong: number;
    let key_str: string;
    if (Math.randomBoolean()) {
        key = Button.A
        key_wrong = Button.B
        key_str = "A"
    } else {
        key = Button.B
        key_wrong = Button.A
        key_str = "B"
    }
    
    basic.showString(key_str)
    let success = wait_for_button(key, key_wrong)
    if (success) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    
}

basic.forever(function on_forever() {
    show()
})

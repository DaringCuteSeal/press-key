function waitForButton(rightbutton: number, wrongbutton: number): boolean {
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
    let keyWrong: number;
    let keyStr: string;
    if (Math.randomBoolean()) {
        key = Button.A
        keyWrong = Button.B
        keyStr = "A"
    } else {
        key = Button.B
        keyWrong = Button.A
        keyStr = "B"
    }
    
    basic.showString(keyStr)
    let success = waitForButton(key, keyWrong)
    if (success) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    
}

basic.forever(() => {
    show()
})

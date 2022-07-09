const num = document.querySelectorAll(".num"),
arith = document.querySelectorAll(".arith")
clearAll = document.querySelector(".clear"),
deleteNum = document.querySelector(".delete"),
equals = document.querySelector(".equals"),
point = document.querySelector(".point")

function getOutput() {
   return document.querySelector(".outputs").innerHTML
}

function setOutput(output) {
   return document.querySelector(".outputs").innerHTML += output
}

function getHistory() {
   return document.querySelector(".history").innerHTML
}

function setHistory(history) {
   return document.querySelector(".history").innerHTML += history
}

function emptyOutput() {
    return document.querySelector(".outputs").innerHTML = ''
}

function emptyHistory() {
    return document.querySelector(".history").innerHTML = ''
}


// loop through all the numbers 
for (let x = 0; x < num.length; x++) {
    num[x].onclick = () => { 
        setOutput(num[x].getAttribute("id"))
    }
}

// decimal point can only appear once 
point.onclick = () => {
    if (!getOutput() == '') {
        if (!/\./g.test(getOutput())) {
           setOutput(point.getAttribute("id"))
        }
    }
}

// loop through all the symbols 
for (let x = 0; x < arith.length; x++) {
    arith[x].onclick = () => {
        if (getOutput != '') {
            setHistory(`${getOutput()}${arith[x].getAttribute("id")}`) 
        }
        emptyOutput()
    }
}

let operators = ['+', '-', '*', '/']
equals.onclick = () => {
    let chk = getHistory().split('')
    let hold = chk.splice(-1)
    let op = ''
    operators.map(items => {
        if (hold == items) {
            op = items
        }
    })
    if (hold == op && getOutput() != '') {
        let result = eval(getHistory()+getOutput())
        emptyOutput()
        setOutput(result)
        emptyHistory()
    } else {
        let result = eval(chk.join(''))
        setOutput(result)
        emptyHistory()
    }
}

deleteNum.onclick = () => {
    let temp = document.querySelector(".outputs")
    let gOut = getOutput().split('')
    gOut.splice(-1)
    temp.innerHTML = gOut.join('')
    if (getHistory() != '' && getOutput() == '') {
        let gHist = getHistory().split('')
        gHist.splice(-1)
        setOutput(gHist.join(''))
        emptyHistory()
    }
}

clearAll.onclick = () => {
    emptyHistory()
    emptyOutput()
}


// Copyright 2022 21base 
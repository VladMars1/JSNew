const div = document.getElementById("z4")

function z1() {
    let counter = 1
    while (counter < 101) {
        console.log(counter)
        counter++
    }
}

function z2() {
    let counter = 0
    do {
        if (counter == 0) {
            console.log(`${counter} - it's zero`)
        } else if (counter % 2 == 0) {
            console.log(`${counter} - it's boyfriend number`)
        } else {
            console.log(`${counter} - it's no boyfriend number`)
        }
        counter++
    } while (counter < 11)
}

function z3() {
    for (let i = 0; i < 11; console.log(i++)) {
    }
}

function z4() {
    div.innerHTML = "<label for=\"z4input\">\n" +
        "        enter the number of floors:</label>\n" +
        "    <input type=\"number\" value=\"5\" id =\"z4input\" >\n" +
        "    <button id=\"z4btn\">Enter</button>"
    const btn = document.getElementById("z4btn")
    const input = document.getElementById("z4input")
    let listener = function (event) {
        let leftDiv = "<div class='left'> "
        let centerDiv = "<div class='center'> "
        let rightDiv = "<div class='right'>"
        let centerAddStarCounter = 2
        let rightRemoveStartCounter = 0
        let rightDownStarCounter = -1
        for (let i = 0; i < input.value; i++) {
            leftDiv += "*".repeat(i + 1)
            if (i === 0) {
                centerDiv += "*".repeat(i + 1)
                rightDiv += "*".repeat(i + 1)
            } else if (input.value / 2 <= i) {
                centerDiv += "*".repeat(i + centerAddStarCounter)
                try {
                    rightDiv += "*".repeat(rightRemoveStartCounter + rightDownStarCounter)

                }
                catch (e){
                    rightDiv += ""

                }
                centerAddStarCounter += 1
                rightRemoveStartCounter -= 1
                if (rightRemoveStartCounter == 1) {
                    rightDownStarCounter = 0
                } else {
                    rightDownStarCounter -= 1
                }

            } else {
                centerDiv += "*".repeat(i + centerAddStarCounter)
                rightDiv += "*".repeat(i + centerAddStarCounter)
                centerAddStarCounter += 1
                if (input.value / 2 >= (i)) {
                    rightRemoveStartCounter = i
                }
                rightDownStarCounter += 1

            }

            rightDiv += "<br>"
            centerDiv += "<br>"
            leftDiv += "<br>"
        }
        leftDiv += "</div>"
        centerDiv += "</div>"
        rightDiv += "</div>"
        div.innerHTML = leftDiv + centerDiv + rightDiv

    }
    btn.addEventListener("click", listener)
}

function z5() {

    let counter = 1
    let result = 0
    for (let numb = 10000; numb < 50; numb / 2) {
        result = numb
        counter += 1
    }
    console.log(`Result: ${result} Counter:${counter}`)
}

function z6() {

    let month = [
        {Number: 1, Name: "Січень", Season: "Зима"},
        {Number: 2, Name: "Лютий", Season: "Зима"},
        {Number: 3, Name: "Березень", Season: "Весна"},
        {Number: 4, Name: "Квітень", Season: "Весна"},
        {Number: 5, Name: "Травень", Season: "Весна"},
        {Number: 6, Name: "Червень", Season: "Літо"},
        {Number: 7, Name: "Липень", Season: "Літо"},
        {Number: 8, Name: "Серпень", Season: "Літо"},
        {Number: 9, Name: "Вересень", Season: "Осінь"},
        {Number: 10, Name: "Жовтень", Season: "Осінь"},
        {Number: 11, Name: "Листопад", Season: "Осінь"},
        {Number: 12, Name: "Грудень", Season: "Зима"}]
    let result = prompt("Enter the number of month:", "5")
    for (let i = 0; i < 12; i++) {
        if (month[i].Number == result) {
            alert(`Це ${month[i].Season} - ${month[i].Name}`)
            break
        } else if (i == 11) {
            alert(`Не знайшов такого -  ${result}`)
        }
    }


}

function z7() {
    let result = prompt("Enter temperature °C:")
    let tempF = (9 / 5) * result + 32
    if (!isNaN(tempF)) {
        alert(`${result}°C = ${tempF}℉`)
    } else {
        alert(`Enter please temperature, because thi's not temperature - ${result}`)
    }

}

function z8() {
    switch (prompt("Enter day week:",7)) {
        case "1":
            alert("Понеділок")
            break
        case "2":
            alert("Вівторок")
            break
        case "3":
            alert("Середна")
            break
        case "4":
            alert("Четверг")
            break
        case "5":
            alert("Пʼятниця")
            break
        case "6":
            alert("Субота")
            break
        case "7":
            alert("Неділя")
            break
        default:
            alert("Це не день тижня")
            break
1
    }
}


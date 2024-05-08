
let anser = null;
let counter = 0;
let mybtns = document.querySelectorAll('button');
let input = document.querySelector('input');

mybtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.dataset.content === "CLEAR") {
            input.value = "";

            return
        }
        if (btn.dataset.content === "ENTER") {
            // console.log(parseInt(input.value));
            // console.log(anser)
            if (parseInt(input.value) === anser) {
                randomQuestion();
                input.value = "";
                counter += 10;
                document.querySelector(".counter").textContent = counter;
                
                return;
            }
            window.alert('rong anther');

            return;
        }
        input.value += btn.dataset.content;

    })
});

function randomQuestion() {
    let myArray = ["+", "-", "*"];
    let number = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 10);
    let op = myArray[Math.floor(Math.random() * 3)];
    console.log({
        number,
        number2,
        op
    });

    anser = eval(`${number} ${op} ${number2}`);

    document.querySelector(".question").textContent = `${number} ${op} ${number2} = ?? `;

}

randomQuestion();
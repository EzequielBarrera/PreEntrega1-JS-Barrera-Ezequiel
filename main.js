let userName = prompt("Ingrese su nombre: ")
alert("Bienvenido/a " + userName)

let passwordUser = parseInt(prompt("Ingrese su contraseña: "))
const passAuth = 1234

let count = 0

let countErr = 1

for (let i = 0; i < 2; i++) {
    if (passwordUser === passAuth) {
        alert("Contraseña correcta, comencemos el juego")
        break
    } else {
        passwordUser = parseInt(prompt("Contraseña incorrecta, intente de nuevo"))
    }
}

function incorrect() {
    if (countErr <= 10) {
        console.log(countErr)
        countErr++
    } else if (countErr === 10) {
        alert("Ponete a estudiar e intentá de nuevo")
    }
}
function correct() {
    if (count < 14) {
        console.log(count)
        count++
        
    } else if (count === 14) {
        alert("Felicidades, contestaste todo bien")
    }
    document.getElementById("score").innerText = count
}

const boton = document.getElementById("button")
boton.addEventListener('click', chooseCat)


function chooseCat() {
    let chosenCat = parseInt(prompt("Elija una opción: (Ingrese un número del 1 al 5) \n 1. Matemáticas \n 2. Historia \n 3. Entretenimiento \n 4. Geografía \n 5. Biología"))
    while (chosenCat < 1 || chosenCat > 5) {
        alert("Opción incorrecta, elija de nuevo")
        chosenCat = parseInt(prompt("Elija una opción: (Ingrese un número del 1 al 5) \n 1. Matemáticas \n 2. Historia \n 3. Entretenimiento \n 4. Geografía \n 5. Biología"))
    }
    if (chosenCat === 1) {
        let respuesta = parseInt(prompt("¿Cuánto es 28 + 52 \n 1. 75 \n 2. 94 \n 3. 80"))
        if (respuesta === 3) {
            alert("Muy bien, siguiente pregunta")
            correct()
            let respuesta = parseInt(prompt("¿Cuánto es 25 / 100? \n 1. 4 \n 2. 0.25 \n 3. 75"))
            if (respuesta === 2) {
                alert("Muy bien, última pregunta")
                correct()
                let respuesta = parseInt(prompt("Encuentra el valor de X: 2 - x = x - 8 \n 1. -3 \n 2. 3 \n 3. 5"))
                if (respuesta === 3) {
                    alert("Muy bien, completaste la categoría")
                    correct()
                } else {
                    alert("Casi, respuesta incorrecta.")
                    incorrect()
                }
            } else {
                alert("Respuesta incorrecta.")
                incorrect()
            }
        } else {
            alert("Respuesta incorrecta.")
            incorrect()
        }
    }
    if (chosenCat === 3) {
        let respuesta = parseInt(prompt("¿Quién fue Diego Armando Maradona? \n 1. Albañil \n 2. Futbolista \n 3. Cartonero"))
        if (respuesta === 2) {
            alert("Muy bien, cómo olvidarse de la mano de dios")
            correct()
            let respuesta = parseInt(prompt("¿Quién ganó el Mundial de 2022? \n 1. Argentina \n 2. Francia \n 3. Croacia"))
            if (respuesta === 1) {
                alert("Bien ahí, campeón del mundo")
                correct()
                let respuesta = parseInt(prompt("Never gonna give you up \n 1. Never gonna let you down \n 2. Never gonna run around and \n 3. desert you"))
                if (respuesta === 1) {
                    alert("Never gonna make you cry")
                    correct()
                } else {
                    alert("Si no fuiste rickrolleado nunca en tu vida, bienvenido")
                    incorrect()
                }
            } else {
                alert("Segundo francia")
                incorrect()
            }
        } else {
            alert("¿Cómo no vas a saber?")
            incorrect()
        }
    }
    if (chosenCat === 2) {
        let respuesta = parseInt(prompt("¿Cuándo terminó la II Guerra Mundial? \n 1. En 1945 \n 2. Nunca terminó \n 3. En 1918"))
        if (respuesta === 1) {
            alert("Muy bien, siguiente pregunta")
            correct()
            let respuesta = parseInt(prompt("El periodo en el que aparecieron la agricultura y los asentamientos sedentarios se llama: \n 1. Paleolítico \n 2. Edad media \n 3. Neolítico"))
            if (respuesta === 3) {
                alert("Muy bien, última pregunta")
                correct()
                let respuesta = parseInt(prompt("¿Qué idioma hablaban los aztecas? \n 1. Quechua \n 2. Náhuatl \n 3. Aymara"))
                if (respuesta === 2) {
                    alert("Genio total")
                    correct()
                } else {
                    alert("Casi, respuesta incorrecta.")
                    incorrect()
                }
            } else {
                alert("Respuesta incorrecta.")
                incorrect()
            }
        } else {
            alert("Respuesta incorrecta.")
            incorrect()
        }
    }
    if (chosenCat === 4) {
        let respuesta = parseInt(prompt("¿Cuál es el continente más extenso del planeta? \n 1. Europa \n 2. Asia \n 3. América"))
        if (respuesta === 2) {
            alert("Muy bien, siguiente pregunta")
            correct()
            let respuesta = parseInt(prompt("¿Dónde se encuentra el museo del Louvre? \n 1. Moscú \n 2. París \n 3. Londres"))
            if (respuesta === 2) {
                alert("Muy bien, última pregunta")
                correct()
                let respuesta = parseInt(prompt("¿Qué volcán sepultó la ciudad de Pompeya? \n 1. Toba \n 2. Vesubio \n 3. Hutapanjang"))
                if (respuesta === 2) {
                    alert("Muy bien, la respuesta a todas era el 2")
                    correct()
                } else {
                    alert("Casi, respuesta incorrecta")
                    incorrect()
                }
            } else {
                alert("Respuesta incorrecta.")
                incorrect()
            }
        } else {
            alert("Respuesta incorrecta.")
            incorrect()
        }
    }
    if (chosenCat === 5) {
        let respuesta = parseInt(prompt("¿Dónde realizan las plantas la fotosíntesis? \n 1. En el tallo \n 2. En las hojas \n 3. En las raíces"))
        if (respuesta === 2) {
            alert("Muy bien, siguiente pregunta")
            correct()
            let respuesta = parseInt(prompt("Las células reproductoras se dividen por... \n 1. Mitosis \n 2. Metamórfosis \n 3. Meiosis"))
            if (respuesta === 3) {
                alert("Muy bien, última pregunta")
                correct()
                let respuesta = parseInt(prompt("¿Qué forma las moléculas de ARN? \n 1. Una sola cadena de nucleótidos \n 2. El ADN \n 3. Las dos cosas"))
                if (respuesta === 1) {
                    alert("Muy bien, qué hermosa es la biología")
                    correct()
                } else {
                    alert("Casi, respuesta incorrecta.")
                    incorrect()
                }
            } else {
                alert("Respuesta incorrecta.")
                incorrect()
            }
        } else {
            alert("Respuesta incorrecta.")
            incorrect()
        }
    }
}


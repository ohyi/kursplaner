// Define an empty array to store the strings
const faecher11 = [];
let faecher11_0_4 = [];
let faecher11_0_5 = [];
const faecher12 = ['Deutsch','Englisch', 'Latein', 'Spanisch', 'Japanisch', 'Mathematik'];
let faecher12_0_5 = faecher12.slice(0, 5);

const buttons = document.querySelectorAll('.subject-button');
const inputFinishedButton = document.getElementById('input-finished');

// Add event listeners to the buttons for each subject
buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const subject = button.dataset.subject;
        faecher11.push(subject);
        console.log(faecher11);
        button.disabled = true;
        // if (index == 4) {
        //     faecher11_0_5 = faecher11.slice(0, 5);
        //     console.log(faecher11_0_5);
        // }
    });
});

// let faecher11_0_4 = faecher11.slice(0, 5);
// let faecher11_0_5 = faecher11.slice(0, 6);
// folgende brauchen wir nicht
// let faecher12_0_4 = faecher12.slice(0, 5);
// let faecher12_0_5 = faecher12.slice(0, 6);

let regel1 = false;
let regel2 = false; 
let regel3 = false;
let regel4 = false;
let regel5 = false;
let regel6 = false;
let regel7 = false;
let regel8 = false;
let regel9 = false;
let regel10 = false;
let regel11 = false;
let regel12 = false;

// --- Regeln ---

// Regel 1
// Die Bedingung "faecher11.length === 5" sollten wir ersetzen durch einen "fertig/bestaetigen" button der Eingabe
// const intervalId = setInterval(function() {
//     if (faecher11.length === 5) {
//         if (JSON.stringify(faecher11_0_5) === JSON.stringify(faecher12_0_5)) {
//             regel1 = true;
//         } else {
//             console.log("yeah");
//         }
//         clearInterval(intervalId); // Stop the interval
//     }
// }, 1000);

inputFinishedButton.addEventListener('click', function() {
    faecher11_0_4 = faecher11.slice(0, 4);
    faecher11_0_5 = faecher11.slice(0, 5);
    
    
    if (JSON.stringify(faecher11_0_5) === JSON.stringify(faecher12_0_5)) {
        regel1 = true;
        console.log("regel1 = true");
    } else {
        console.log("LK1, LK2, 3.-5.PK muessen in Jahren 11 und 12 gleich sein, nicht geschafft");
    }
    
    // ------------------
    // Regel 2...
    
    if (faecher11[0] === "Deutsch" || faecher11[0] === "Mathematik" || faecher11[0] === "Spanisch" || faecher11[0] === "Englisch" || faecher11[0] === "Physik" || faecher11[0] === "Chemie" || faecher11[0] === "Biologie" || faecher11[1] === "Deutsch" || faecher11[1] === "Mathematik" || faecher11[1] === "Spanisch" || faecher11[1] === "Englisch" || faecher11[1] === "Physik" || faecher11[1] === "Chemie" || faecher11[1] === "Biologie") {
        regel2 = true;
        console.log("regel2 = true");
    } else {
        console.log("Eines der folgenden Faecher:'De, Ma, Sp, En, Ph, Ch, Bi' muss ein LK sein");
    }
    
    // ------------------
    // Regel 3...
    
    let MaDe1 = 0;
    for (let s of faecher11) {
        if (s === "Mathematik" || s === "Deutsch") {
            MaDe1++;
            if (MaDe1 === 2) {
                for (let sb of faecher12) {
                    if (sb === "Mathematik" || sb === "Deutsch") {
                        MaDe1++;
                    }
                }
            }
        }
    }
    
    if (MaDe1 === 4) {
        regel3 = true;
        console.log("regel3 = true");
    } else {
        console.log("Mathe und Deutsch müssen belegt werden, nicht geschafft");
    }
    
    // ------------------
    // Regel 4...
    
    let FremdEn = 0;
    let FremdSp = 0;
    let FremdLa = 0;
    let FremdFr = 0;
    let FremdJa = 0;
    
    // Eine Fremdsprache in Q1, 2 und Q3, 4 belegt?
    for (let s of faecher11) {
        if (s === "Spanisch") {
            FremdSp++;
            for (let sb of faecher12) {
                if (sb === "Spanisch") {
                    FremdSp++;
                }
            }
        }
        if (s === "Englisch") {
            FremdEn++;
            for (let sb of faecher12) {
                if (sb === "Englisch") {
                    FremdEn++;
                }
            }
        }
        if (s === "Latein") {
            FremdLa++;
            for (let sb of faecher12) {
                if (sb === "Latein") {
                    FremdLa++;
                }
            }
        }
        if (s === "Französisch") {
            FremdFr++;
            for (let sb of faecher12) {
                if (sb === "Französisch") {
                    FremdFr++;
                }
            }
        }
        if (s === "Japanisch") {
            FremdJa++;
            for (let sb of faecher12) {
                if (sb === "Japanisch") {
                    FremdJa++;
                }
            }
        }
    }
    
    if (FremdSp === 2 || FremdEn === 2 || FremdLa === 2 || FremdFr === 2 || FremdJa === 2) {
        regel4 = true;
        console.log("regel4 = true")
    } else {
        console.log("Es muss eine Fremdsprache über 4 Semester belegt werden, nicht geschafft");
    }

    // ------------------
    // Regel 5...


});
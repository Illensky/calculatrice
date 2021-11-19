/* get all the touch in a variable */


let zero = document.getElementById('zero');
let un = document.getElementById('un');
let deux = document.getElementById('deux');
let trois = document.getElementById('trois');
let quatre = document.getElementById('quatre');
let cinq = document.getElementById('cinq');
let six = document.getElementById('six');
let sept = document.getElementById('sept');
let huit = document.getElementById('huit');
let neuf = document.getElementById('neuf');
let ce = document.getElementById('ce');
let plus = document.getElementById('plus');
let moins = document.getElementById('moins');
let multiplier = document.getElementById('mutiplier');
let diviser = document.getElementById('diviser');
let egal = document.getElementById('egal');
let leftPar = document.getElementById('leftPar');
let rightPar = document.getElementById('rightPar');
let modulo = document.getElementById('modulo');
let puissance = document.getElementById('puissance');
let virgule = document.getElementById('virgule')
let copier = document.getElementById('copy')

/* get the calculate screen */


let champ = document.getElementById("champ");


/* initialize a variable wich will contain the pressed touche */


let touchePresser;


/* function to write the pressed touche on the screen, and empty the screen if "=" was pressed */


function write () {
        champ.value += touchePresser;
}


/* initialize a variable wich help me to know if "=" was pressed or no (to empty the screen) */


let calculer = 0;


/* initialize a variable wich help me to know if the last pressed touch is a "." to disable or unable it*/


let point = 0;


/* create a function to copy the result and affect it to the copy button by an event listener*/


function copy() {
    let copyText = document.querySelector("#champ");
    copyText.select();
    document.execCommand("copy");
}

copier.addEventListener("click", copy)


/* add an event listener on the touch "=" to show result and switch the variable "calculer" to 1 */


egal.addEventListener("click", function () {
    champ.value = eval(champ.value);
    calculer = 1;
    point = 1;
});


/* add an event listener on the "CE" touch to empty screen when the user want it */


ce.addEventListener("click", function () {
    champ.value = "";
    calculer = 0;
    point = 0;
});


/* add an event listener by touch to write on screen each time */


zero.addEventListener("click", function () {
    if (calculer === 0) {
        touchePresser = 0;
        write();
    }
});

un.addEventListener("click", function () {
    if (calculer === 0) {
        touchePresser = 1
        write();
    }
});

deux.addEventListener("click", function () {
    if (calculer === 0) {
        touchePresser = 2;
        write();
    }
});

trois.addEventListener("click", function () {
    if (calculer === 0) {
        touchePresser = 3;
        write();
    }
});

quatre.addEventListener("click", function () {
    if (calculer === 0) {
        touchePresser = 4;
        write();
    }
});

cinq.addEventListener("click", function () {
    if (calculer === 0) {
        touchePresser = 5;
        write();
    }
})

six.addEventListener("click", function () {
    if (calculer === 0) {
        touchePresser = 6;
        write();
    }
});

sept.addEventListener("click", function () {
    if (calculer === 0) {
        touchePresser = 7;
        write();
    }
});

huit.addEventListener("click", function () {
    if (calculer === 0) {
        touchePresser = 8;
        write();
    }
});

neuf.addEventListener("click", function () {
    if (calculer === 0) {
        touchePresser = 9;
        write();
    }
});

virgule.addEventListener("click", function () {
    if (calculer === 0 && point === 0) {
        touchePresser = ".";
        point = 1;
        write();
    }
});

plus.addEventListener("click", function () {
    touchePresser = "+";
    write();
    calculer = 0;
    point = 0;
});

moins.addEventListener("click", function () {
    touchePresser = "-";
    write();
    calculer = 0;
    point = 0;
});

multiplier.addEventListener("click", function () {
    touchePresser = "*";
    write();
    calculer = 0;
    point = 0;
});

diviser.addEventListener("click", function () {
    touchePresser = "/"
    write();
    calculer = 0;
    point = 0;
});

leftPar.addEventListener("click", function () {
    touchePresser = "(";
    write();
    calculer = 0;
    point = 0;
});

rightPar.addEventListener("click", function () {
    touchePresser = ")";
    write();
    calculer = 0;
    point = 0;
});

modulo.addEventListener("click", function () {
    touchePresser = "%";
    write();
    calculer = 0;
    point = 0;
});

puissance.addEventListener("click", function () {
    touchePresser = "^";
    write();
    calculer = 0;
    point = 0;
});

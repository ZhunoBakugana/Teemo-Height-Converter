const teemo_height_m = 0.81;
const teemo_height_ft = 2.8; 

let height_form = document.getElementById("height_conversion_from");
let height_button = document.getElementById("height_converter_btn");
let height_result = document.getElementById("height_conversion_result");
let warming_handler = document.getElementById("warming_handler");

const teemo_container = document.getElementById("teemo_container");

height_button.addEventListener("click", () => {
    //TODO: reset form input field each time one of the radio butons are clicked
    teemo_container.innerHTML = ""; //empties the container before each conversion
    let result_check = true;

    let height_input = height_form.height_converter.value;

    //saves boolean value of each radio button
    let m_check = document.getElementById("m").checked;
    let ft_check = document.getElementById("ft").checked;

    let teemo_total = 0;

    if (height_input.trim() === "") {//checks if the value is empty
        warming_handler.textContent = "Unit field cannot be blank!"; //populates empty <p>
        result_check = false;
    }
    else if (isNaN(height_input)) {//checks if the value is a number
        warming_handler.textContent = "Unit value has to be a number!"; //populates empty <p>
        result_check = false;
    }
    else if (m_check === false && ft_check === false) {//if neither radio buttons are selected, present the user with a warning
        warming_handler.textContent = "You must choose a conversion unit first!"; //populates empty <p>
        result_check = false;
    }
    else if (m_check === true) {//calculates total teemo's for meters
        teemo_total = height_input / teemo_height_m;
        //height_form.reset();
    }
    else if (ft_check === true) {//calculates total teemo's for foot
        teemo_total = height_input / teemo_height_ft;
        //height_form.reset();
    }

    let teemo_occurences = Math.floor(teemo_total); //rounds down to the nearest decimal, as to get the full teemo's amount
    let teemo_fraction = (teemo_total - teemo_occurences); //gets the teemo fraction amount

    //https://www.w3schools.com/jsref/met_element_append.asp
    if (result_check === true) {//if no warning is triggered, we can proceed

        //takes the teemo height fraction and appends it on top of the full teemo's(if any)
        const img_fraction = document.createElement("img");
        img_fraction.src = "images/teemo.png";
        img_fraction.style.height = (teemo_fraction * 150) + "px"; //calculates the fractured teemo's height
        teemo_container.append(img_fraction);

        for (let i = 0; i < teemo_occurences; i++) {//for the number of full teemo's we create an empty img element and append each with a teemo png
            const img = document.createElement("img");
            img.src = "images/teemo.png";
            teemo_container.append(img);
        }

        //creates a <p>  and populates it with the conversion result
        const para = document.createElement("p");
        teemo_container.append(para);
        para.append("You are: " + teemo_total.toFixed(2) + " Teemo's tall!");
    }
});

// DOM selection
const inputRows = document.getElementById("rows");
const inputCols = document.getElementById("cols");
const inputSize = document.getElementById("size");
const refreshBtn = document.getElementById("refreshBtn");
const containerDiv = document.getElementById("container");
const inputForeColor = document.getElementById("foreColor");
const inputBackColor = document.getElementById("backColor");
const inputShowBorder = document.getElementById("showBorder");

//avoid opening the context menu on right click
document.getElementsByTagName("body")[0].addEventListener("contextmenu", function(e){
    e.preventDefault();
});

/**
 * Returns the current selected color
 * @param {string} type "fore" || "back" / The type of color to retrieve
 * @returns {string} A color in the hex format "#RRGGBB"
 */
function getColor(type) {
    if (type === "fore") {
        return inputForeColor.value;
    } else if (type === "back") {
        return inputBackColor.value;
    }
}

/**
 * Draws the grid getting the settings from the page inputs
 */
function drawGrid() {

    //get the current input values
    let rows = inputRows.value;
    let cols = inputCols.value;
    let size = inputSize.value;

    //set the grid style and empty the container from possible old grid
    containerDiv.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    containerDiv.innerHTML = "";
    
    //create the necessary divs and append them to the container
    for (let i = 0; i < rows * cols; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");
        
        //set html attribute to avoid triggering the drag gesture (works so-so)
        newDiv.setAttribute("draggable", "false");

        newDiv.style.width = `${size}px`;
        newDiv.style.height = `${size}px`;

        newDiv.addEventListener('mouseenter', function(ev) {
            if (ev.buttons === 1) {
                this.style.backgroundColor = getColor("fore");
            } else if (ev.buttons === 2) {
                this.style.backgroundColor = getColor("back");
            }
        });

        newDiv.addEventListener('click', function(ev) {
            if (ev.button === 0) {
                this.style.backgroundColor = getColor("fore");
            } else if (ev.button === 2) {
                this.style.backgroundColor = getColor("back");
            }
        });

        containerDiv.appendChild(newDiv);
    }
}



// EVENT HANDLERS


// Redraw grid
refreshBtn.addEventListener("click", function() {
    drawGrid();
});

//resize boxes
inputSize.addEventListener("change", function() {
    let newSize = this.value;

    for (let i = 0; i < containerDiv.children.length; i++) {
        
        const box = containerDiv.children[i];

        box.style.width = `${newSize}px`;
        box.style.height = `${newSize}px`;
    }
});

//show or hide box borders
inputShowBorder.addEventListener("change", function() {
    
    for (let i = 0; i < containerDiv.children.length; i++) {
        
        const box = containerDiv.children[i];

        if (this.checked) {
            box.style.border = "1px solid black";
        } else {
            box.style.border = "none";
        }
    }
});



//initialize grid on first load
drawGrid();
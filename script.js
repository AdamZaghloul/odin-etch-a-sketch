function makeGrid(size){
    let container = document.querySelector("#container");

    for(let i = 0; i < size; i++){

        let row = document.createElement("div");
        row.style.display = "flex";
        row.classList.add("row");

        for(let j = 0; j < size; j++){
            let cell = document.createElement("div");
            cell.classList.add("cell");

            cell.addEventListener("mouseover", () =>{
                cell.classList.add("hover");
            });

            row.appendChild(cell);
        }

        container.appendChild(row);

    }
}

function resetGrid(){
    let size = parseInt(prompt("Enter desired size (max 100, default 16).", "16"));

    let container = document.querySelector("#container");
    container.innerHTML = "";

    if(size >= 0 && size <= 100){
        makeGrid(size);
        return;
    }else if(size > 100){
        makeGrid(100);
        return;
    }

    makeGrid(16);
}

makeGrid(16);
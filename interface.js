var h2 = document.getElementsByTagName('h2')[0]; 

document.addEventListener("DOMContentLoaded", ()=>{   
    let squares = document.querySelectorAll(".square");
    squares.forEach((box)=>{
        box.addEventListener("click", (event)=>{
            let index = event.target.id;
            let element = event.target;
            insertSymbols(index, element);
        })
    })

    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", ()=>{
        reset();
        for(let box of squares){
            let icone = box.classList.value;
            
            if(icone.includes("x")){
                box.classList.remove("x");
            }
            else if(icone.includes("o")){
                box.classList.remove("o");
            }
        }
        h2.style.display = "none";
    });
})

function insertSymbols(id, tag){
    if(!gameOver){
        if(board[id] === ""){
            let symbol = symbols[player];
            tag.classList.add(symbol);
            insertBoard(id);

            if(gameOver){
                let emoji = "";
                if(symbol === "x"){
                    emoji = "❌";
                } else{
                    emoji = "⭕";
                }

                setTimeout(()=>{
                    h2.innerText = `O ${emoji} Ganhou!`;
                    h2.style = "display: block;";
                }, 50);
            }
        }
    }
}
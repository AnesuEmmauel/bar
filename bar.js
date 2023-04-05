const landing = document.getElementById("landing");

let createDivs = [];

for (let i = 0; i < 12; i++){

    
    createDivs.push(`<div id="tile${i}" style="background-color: #154c79; border : solid black; height : auto; width:auto; grid-column: auto / span ${Math.floor(Math.random() * 3)}; height: 100px">tile ${i}</div>` )
}
const styles = `<style>
                    #landing{
                        display: grid;
                        grid-template-columns: auto auto auto;
                    }
                </style>`
const tiles = createDivs.join(" ");
landing.innerHTML = tiles + styles;

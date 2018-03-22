const rows = prompt("please enter how many rows");

const Cell = (props) => {
    return React.createElement('div', { style: {
         backgroundColor: props.backgroundColor,
         width:'20px', 
         height: '20px', 
         display:'inline-block' }
    })
}

const Row = (props) => {
    let arrayOfCells = [];
    let color = props.startingColor;
    for (let i=0; i< rows; i++){
        if(i % 2){
            arrayOfCells.push(React.createElement(Cell, { backgroundColor: color }));
        } else {
            arrayOfCells.push(React.createElement(Cell, { backgroundColor: color }));
        }
        if (color === "blue"){
            color="yellow";
        }
        else {
            color = 'blue';
        }
    }
    return React.createElement("div", null, arrayOfCells);
}

const CheckerBoard = (props) => {
    let arrayOfRows = [];
    for(let i =0; i<rows; i++){
        if ( i % 2) {
            arrayOfRows.push(React.createElement(Row, { startingColor: 'blue'}));
        } else {
            arrayOfRows.push(React.createElement(Row, { startingColor: 'yellow'}));
        }
    }
    return React.createElement('div', null, arrayOfRows);
}

ReactDOM.render(React.createElement(CheckerBoard), document.getElementById("checkerboard"));
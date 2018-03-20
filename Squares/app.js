const Square = (props) => {
    return React.createElement('h1', { style: { backgroundColor: props.backgroundColor, color: props.textColor, float: "left",width:'200px', height: '200px' }}, props.text)
}

const App = (props) => {
    return React.createElement('div', null,
        React.createElement(Square, { backgroundColor: "blue", textColor: "white", text: "white on blue" } ),
        React.createElement(Square, { backgroundColor: "red", textColor: "blue", text: "blue on red"} ),
        React.createElement(Square, { backgroundColor: "pink", textColor: "green", text: "green on pink" } )
    )
}
    
ReactDOM.render(App(), document.getElementById("app"));
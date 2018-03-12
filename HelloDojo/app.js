const Hello = React.createElement("h1", null, "Hello Dojo!");
const h2 = React.createElement("h2", null, "Things i need to do: ");

const list1 = React.createElement("li", null, "Learn React");
const list2 = React.createElement("li", null, "Deploy projects");
const list3 = React.createElement("li", null, "Modify my website");
const list4 = React.createElement("li", null, "Update my resume");
const list = React.createElement("ul", null, list1, list2, list3, list4);

const container = React.createElement("div", null, Hello, h2, list);


ReactDOM.render(container, document.getElementById("app"));
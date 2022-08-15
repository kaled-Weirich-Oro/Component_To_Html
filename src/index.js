import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";


function Index() {
    const MyComponent = () => <h1>Meu componente</h1>

    const html = ReactDOMServer.renderToStaticMarkup(<MyComponent />);
    console.log("Código Componente React em html", html.toString());
  return (
    <div>
        <h1>O código html do meu componente</h1>
        {html.toString()}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

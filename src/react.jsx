import React from "react";

// import * as React from "react";
// "react" is a node module : module.exports
// React 

import ReactDOM from "react-dom";

// Define a React Component here
//



class HelloWorld extends React.Component{
	render(){
		return (<div>Hello World From React</div>)
	}
}

//var x = <div> Hello World </div>	// HTML components
var x = <HelloWorld/> 	// REACT Element : Instantation of RC 



// Render this React Component into the DOM

ReactDOM.render(elem, node);
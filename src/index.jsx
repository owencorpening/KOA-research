require("./../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render()
	{
		return <div>Hi mom</div>;
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));

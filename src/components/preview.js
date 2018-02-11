import React, {Component} from 'react';

class Preview extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}
	componentWillUpdate() {
		console.log("preview:", this.props.markdownContent);
		let previewer = document.getElementById('previewer');
		previewer.innerHTML = this.props.markdownContent;
	}
	render() {
		return (
		<div id="previewer">
		</div>
		);
	}
}

export default Preview
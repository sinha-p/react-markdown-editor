import React, {Component} from 'react';
import Editor from './editor';
import Preview from './preview';
import MarkdownIt from 'markdown-it';

class Markdown extends Component {
	constructor() {
		super();
		this.state = {
			markdownContent: ''
		}
	}
	componentDidMount() {
	}
	changeContent = (data) => {
		console.log(data);
		let md = new MarkdownIt({
			breaks: true
		});
		this.setState({
			markdownContent: md.render(data)
		});
	}
	render() {
		return (
			<div className="container">
				<div className="content">
					<Editor onChangeContent = {this.changeContent} markdownContent = {this.state.markdownContent}/>
				</div>
				<div className="content preview-content">
					<Preview markdownContent = {this.state.markdownContent}/>
				</div>
			</div>
			);
	}
}

export default Markdown;
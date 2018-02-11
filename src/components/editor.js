import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownContent: props.markdownContent,
      onChangeContent: props.onChangeContent
    };
  }
  componentDidMount() {
    var that = this;
    let editor = document.getElementById('editor');
    editor.addEventListener('keyup', () => {
      this.change(that);
    });
  }
  change(self) {
    console.log("coming");
    let editor = document.getElementById('editor');
    self.setState({
      markdownContent: editor.value
    });
    self.props.onChangeContent(self.state.markdownContent);
  }
  render() {
    return (
      <textarea id="editor">
      </textarea>
    );
  }
}

export default Editor;

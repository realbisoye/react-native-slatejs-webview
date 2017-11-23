import React from "react";
import { render } from "react-dom";
import { Editor } from "slate-react";
import { Value, Block } from "slate";
const initialState = require('./initialState.json');

class SlateEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           value: Value.fromJson(initialState)
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(change) {
        this.setState({
          value: change.value
        });
    }

    renderNode(props) {
      const { attributes, children, node } = props
      switch (node.type) {
        case 'heading-one':
            return props => <h2  {...props.attributes}>{props.children}</h2>;
        case 'heading-two':
            return props => <h4 {...props.attributes}>{props.children}</h4>;
          case 'paragraph':
              return props => <p {...props.attributes}>{props.children}</p>;
          case 'text':
              return props => <span {...props.attributes}>{props.children}</span>;
          }
    }

    renderMark(props) {
        const { children, mark } = props
        switch (mark.type) {
            case "bold": return <strong>{children}</strong>
            case "italic": return <em>{children}</em>
            case "underlined": return <u>{children}</u>
        }
    }

    render() {
        return (
            <div>
                <Editor
                    style={{}}
                    value={this.state.value}
                    onChange={this.onChange}
                    renderNode={this.renderNode}
                    renderMark={this.renderMark}
                />
            </div>
        );
    }
}

render(
    <SlateEditor />,
    document.getElementById('app')
);


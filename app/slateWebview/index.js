import React from "react";
import { render } from "react-dom";
import { Editor } from "slate-react";
import { Value, Block } from "slate";
import { isKeyHotkey } from 'is-hotkey';

const initialValue = require('./initialState.json');

const isBoldHotkey = isKeyHotkey('mod+b')
const isItalicHotkey = isKeyHotkey('mod+i')
const isUnderlinedHotkey = isKeyHotkey('mod+u')
const isCodeHotkey = isKeyHotkey('mod+`')

class SlateEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           value: Value.fromJSON(initialValue)
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(change) {
        this.setState({
          value: change.value
        });
    }

    onKeyDown = (event, change) => {
        let mark
        if (isBoldHotkey(event)) {
            mark = 'bold'
        } else if (isItalicHotkey(event)) {
            mark = 'italic'
        } else if (isUnderlinedHotkey(event)) {
            mark = 'underlined'
        } else if (isCodeHotkey(event)) {
            mark = 'code'
        } else {
            return
        }

        event.preventDefault()
        change.toggleMark(mark)
        return true
    }

    renderNode = (props) => {
        const { attributes, children, node } = props
        switch (node.type) {
            case 'block-quote': return <blockquote {...attributes}>{children}</blockquote>
            case 'bulleted-list': return <ul {...attributes}>{children}</ul>
            case 'heading-one': return <h1 {...attributes}>{children}</h1>
            case 'heading-two': return <h2 {...attributes}>{children}</h2>
            case 'list-item': return <li {...attributes}>{children}</li>
            case 'numbered-list': return <ol {...attributes}>{children}</ol>
        }
     }

     renderMark = (props) => {
        const { children, mark } = props
        switch (mark.type) {
            case 'bold': return <strong>{children}</strong>
            case 'code': return <code>{children}</code>
            case 'italic': return <em>{children}</em>
            case 'underlined': return <u>{children}</u>
        }
    }

    render() {
        return (
            <div>
                <Editor
                    style={{
                        margin: '10px auto',
                        padding: '10px',
                        zIndex: '1000',
                        width: "80%",
                        border: '1px solid #a0a0a0',
                    }}
                    value={this.state.value}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
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


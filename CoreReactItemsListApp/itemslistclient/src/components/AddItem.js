import React from 'react';
import { connect } from "react-redux";
import { addItems } from "../redux/actions"
import '../css/addItem.css';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };

        this.inputText = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    handleSubmit(event) {
        this.props.addItems(this.state.text);
        this.setState({ text: '' });
        this.inputText.current.focus();
        event.preventDefault();
    }

    render() {
        return (
            <div className="AddItem">
                <h2>Add Item</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" value={this.state.text} onChange={this.handleChange} ref={this.inputText} className="form-control" placeholder="Text" />
                    </div>
                    <input type="submit" value="Add" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default connect(null, { addItems })(AddItem);
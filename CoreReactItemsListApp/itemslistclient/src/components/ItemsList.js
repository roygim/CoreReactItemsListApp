import React from 'react';
import { connect } from "react-redux";
import { getItems } from "../redux/actions"
import '../css/itemsList.css';

class ItemsList extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.getItems();
    }

    render() {
        const items = this.props.items.map((item, index) => <li key={index}>{item.Text}</li>)

        return (
            <div className="ItemsList">
                <h2>Items List</h2>
                <ul>
                    {items}
                </ul>
                <input type="button" value="Get All Items" className="btn btn-primary" onClick={this.handleClick} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.itemsData.items
});

export default connect(mapStateToProps, { getItems })(ItemsList);
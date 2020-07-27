import React from 'react';
import AddItem from '../components/AddItem';
import ItemsList from '../components/ItemsList';

function HomeScreen() {
    return (
        <div className="HomeScreen">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <AddItem />
                    </div>
                    <div className="col-md-6">
                        <ItemsList />
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
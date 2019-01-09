import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Item from "./Knight";
import React, { Component } from 'react';

class BattleOrder extends Component {

    state = {
        items: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
            { id: 4, name: 'Item 4' },
        ]
    }

    deleteItem = id => {
        console.log("Deleteing id: " + id);
    }

    render() {
        return (
            <div>

                <div className="item-container">
                    {this.state.items.map((item, index) => (
                        <Item key={item.id} item={item} handleDrop={id => this.deleteItem(id) }/>
                    ))}
                </div>

            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(BattleOrder)
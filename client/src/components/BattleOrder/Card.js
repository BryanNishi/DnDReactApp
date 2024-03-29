import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import {
    DragSource,
    DropTarget,
  //  ConnectDropTarget,
  //  ConnectDragSource,
   // DropTargetMonitor,
   // DropTargetConnector,
   // DragSourceConnector,
   // DragSourceMonitor,
} from 'react-dnd';
// import { XYCoord } from 'dnd-core';
import flow from 'lodash/flow';
import "./style.css";


const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};

const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        }
    },
};

const cardTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index
        const hoverIndex = props.index

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = (findDOMNode(
            component,
        )).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = (clientOffset).y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.moveCard(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    },
}

class Card extends React.Component {
    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        isDragging: PropTypes.bool.isRequired,
        id: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired,
        moveCard: PropTypes.func.isRequired,
    }

    //   deleteItem = id => {
    //     console.log(id)
    //     this.setState(prevState => {
    //       return {
    //         cards: prevState.cards.filter(cards => cards.id !== id)
    //       }
    //     })
    // }

    render() {
        const {
            text,
            isDragging,
            connectDragSource,
            connectDropTarget,
            id,
            hp,
            ac
        } = this.props;
        const opacity = isDragging ? 0 : 1;

        return (
            connectDragSource &&
            connectDropTarget &&
            id &&
            hp &&
            ac &&
            connectDragSource(
                connectDropTarget(<div
                    style={{ ...style, opacity }}>

                    <div className="intiativeStats">

                        <span><b>Intiative</b>: {id} </span>

                        <span>
                            <input className="name" placeholder={text} />
                        </span>


                        <span><b>AC: </b> <input className="ac" placeholder={ac} /> </span>

                        <span><b>HP: </b> <input className="hp" placeholder={hp} /> / <input className="hp" placeholder={hp} /> </span>

                        <span><input className="notes" placeholder="Notes" /> </span>
                    </div>
                </div>),
            )
        );
    }
}

export default flow(
    DragSource(
        'card',
        cardSource,
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    ),
    DropTarget('card', cardTarget, (connect) => ({
        connectDropTarget: connect.dropTarget(),
    }))
)(Card);
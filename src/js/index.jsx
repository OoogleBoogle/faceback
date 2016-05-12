import React from 'react';
import ReactDOM from 'react-dom';

// mcDaddy component = Board
    // card order - random based on initial array
    // win condition - when 2 cards visible... loop over visible cards for match

// mini Card componants === to divs...click to reveal thingy
    // state - visibility

var Card = React.createClass({
    getInitialState: function() {
        return {
            visible: false
        }
    },

    showBack: function() {
        this.setState({
            visible: true
        });
    },

    render: function() {
        var classes = 'card back' + (this.state.visible ? ' visible' : '');
        return (
            <div className="card-container" onClick={this.showBack}>
                <div className="card front">Front</div>
                <div className={classes}>Word</div>
            </div>
        )
    }
});


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Card />, document.querySelector('.app'));
});

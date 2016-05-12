import React from 'react';
import ReactDOM from 'react-dom';

// mcDaddy component = Board
    // card order - random based on initial array
    // win condition - when 2 cards visible... loop over visible cards for match

// mini Card componants === to divs...click to reveal thingy
    // state - visibility

``

var Board = React.createClass({
    getInitialState: function() {
        return {
            cards: ['bacon', 'ipsum', 'dolor', 'amet', 'capicola', 'venison', 'bacon', 'ipsum', 'dolor', 'amet', 'capicola', 'venison']
        }
    },
   render: function () {
       var boardLayout = [];
       for (var i = 0; i < this.state.cards.length; i += 1){
            boardLayout.push(<Card name={this.state.cards[i]} />);
       }
       return (
           <div>
               {boardLayout}
           </div>
       )
    }
});



var Card = React.createClass({
    getInitialState: function() {
        return {
            visible: false
        }
    },
    componentDidUpdate(){
        console.log('updated');
        var visibles = document.querySelectorAll('.visible');
        console.log(visibles);
        if (visibles.length >= 1) {
            if (visibles[0].textContent === visibles[1].textContent) {
                console.log('We did it');
            } else{
                console.log('nope');
            }
        }
        console.log(visibles.length);
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
                <div className={classes}>{this.props.name}</div>
            </div>
        )
    }
});


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.querySelector('.app'));
});

import React from 'react';
import ReactDOM from 'react-dom';

// mcDaddy component = Board
// card order - random based on initial array
// win condition - when 2 cards visible... loop over visible cards for match

// mini Card componants === to divs...click to reveal thingy
// state - visibility

``

var Board = React.createClass({
    getInitialState: function () {
        return {
            cards: [
                {id: '1', name: 'bacon', visible: false},
                {id: '2', name: 'ipsum', visible: false},
                {id: '3', name: 'dolor', visible: false},
                {id: '4', name: 'amet', visible: false},
                {id: '5', name: 'capicola', visible: false},
                {id: '6', name: 'venison', visible: false},
                {id: '7', name: 'bacon', visible: false},
                {id: '8', name: 'ipsum', visible: false},
                {id: '9', name: 'dolor', visible: false},
                {id: '10', name: 'amet', visible: false},
                {id: '11', name: 'capicola', visible: false},
                {id: '12', name: 'venison', visible: false}],

            visible: false

        }
    },
    showBack: function (e) {
        console.log(e.target);
        var newCardsState = this.state.cards.slice();
        console.log(newCardsState);
        newCardsState.forEach((card)=> {
            if (e.target.dataset.id === card.id) {
                card.visible = true;
            }
        });

        this.setState({
            cards: newCardsState
        })
    },
    render: function () {
        var boardLayout = [];
        for (var i = 0; i < this.state.cards.length; i += 1) {
            boardLayout.push(<Card name={this.state.cards[i].name}
                                   visible={this.state.cards[i].visible}
                                   showBack={this.showBack}
                                    id={this.state.cards[i].id}/>);
        }
        return (
            <div>
                {boardLayout}
            </div>
        )
    }
});


var Card = function (props) {
    //getInitialState: function () {
    //    return {
    //        visible: false
    //    }
    //},
    //componentDidUpdate(){
    //    console.log('updated');
    //    var visibles = document.querySelectorAll('.visible');
    //    console.log(visibles);
    //    if (visibles.length >= 1) {
    //        if (visibles[0].textContent === visibles[1].textContent) {
    //            console.log('We did it');
    //        } else {
    //            console.log('nope');
    //
    //            console.log(ReactDOM.findDOMNode(visibles))
    //
    //            //visibles.forEach(function(card) {
    //            //    card.className= "card back";
    //            //});
    //        }
    //    }
    //    console.log(visibles.length);
    //},


    var classes = 'card' + (props.visible ? ' visible' : '');
    return (
        <div  className="card-container" onClick={props.showBack}>
            <div className={classes}>
                <div data-id={props.id} className="front"><p>Front</p></div>
                <div className="back"><p>{props.name}</p></div>
            </div>
        </div>
    )
};


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<Board />, document.querySelector('.app'));
});

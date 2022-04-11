import React, { Component } from "react";

import Card from "./Card";

export default class Cards extends Component {
  state = {
    cards: [
      {
        id: 1,
        name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 400,
        bet: 10,
        description:
          "Dolore facere officia quos explicabo vero beatae, nulla alias blanditiis consequatur accusantium quis fuga nostrum aliquid architecto ipsa voluptatem amet?",
      },
      {
        id: 2,
        name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 200,
        bet: 5,
        description:
          "Dolore facere officia quos explicabo vero beatae, nulla alias blanditiis consequatur accusantium quis fuga nostrum aliquid architecto ipsa voluptatem amet?",
      },
      {
        id: 3,
        name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 150,
        bet: 5,
        description:
          "Dolore facere officia quos explicabo vero beatae, nulla alias blanditiis consequatur accusantium quis fuga nostrum aliquid architecto ipsa voluptatem amet?",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderCards()}</div>
      </div>
    );
  }

  renderCards() {
    return this.state.cards.map((card) => (
      <Card
        id={card.id}
        name={card.name}
        price={card.price}
        bet={card.bet}
        key={card.id}
        description={card.description}
      />
    ));
  }
}

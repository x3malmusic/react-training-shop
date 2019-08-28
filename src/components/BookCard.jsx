import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const BookCard = book => {
  const { title, author, price, image, addtoCart, addedCount } = book;
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="usd" />
          {price}
        </a>
      </Card.Content>
      <Button onClick={addtoCart.bind(this, book)}>
        Add to cart {addedCount > 0 && <b>({addedCount})</b>}
      </Button>
    </Card>
  );
};

export default BookCard;

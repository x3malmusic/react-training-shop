import React, { Component } from "react";
import { Container, Card } from "semantic-ui-react";
import axios from "axios";
import BookCard from "../containers/BookCard";
import Filter from "../containers/filter";
import Menu from "../containers/Menu";

class App extends Component {
  componentDidMount() {
    const { setBooks } = this.props;
    setTimeout(function() {
      axios.get("/books.json").then(({ data }) => {
        setBooks(data);
      });
    }, 500);
  }

  render() {
    const { books, isReady } = this.props;

    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Loading..."
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;

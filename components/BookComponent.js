import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Image, Icon } from "react-native-elements";

import { BOOKS } from "../shared/books";

class RenderBook extends Component {
  render() {
    const book = this.props.book;
    if (book != null) {
      return (
        <Card>
          <Image
            source={require("./images/a-Dolls-house.jpg")}
            style={{
              width: "100%",
              height: 100,
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card.FeaturedTitle>{book.title}</Card.FeaturedTitle>
          </Image>
          <Text style={{ margin: 10 }}>{book.description}</Text>
          <Icon raised reverse type='font-awesome' color='#f50'
            name={this.props.favorite ? 'heart' : 'heart-o'}
            onPress={() => this.props.favorite ? alert('Already favorite') : this.props.onPressFavorite()}/>
        </Card>
      );
    }
    return <View />;
  }
}

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BOOKS,
      /* favorite: [], */
    };
  }
  render() {
    const bookId = parseInt(this.props.route.params.bookId);
    const book = this.state.books[bookId];
    return <RenderBook book={book} />;
  }
}
export default Book;

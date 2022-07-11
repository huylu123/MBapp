import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import { BOOKS } from "../shared/books";

class Bookshelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: BOOKS,
    };
  }
  render() {
    return (
      <FlatList
        data={this.state.books}
        renderItem={({ item, index }) => this.renderBookshelfItem(item, index)}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginTop: 30}}
      />
    );
  }

  renderBookshelfItem(item, index) {
    const { navigate } = this.props.navigation;
    return (
      <ListItem
        key={index}
        onPress={() => navigate("Book", { bookId: item.id })}
      >
        <Avatar source={require("./images/a-Dolls-house.jpg")} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }
}
export default Bookshelf;

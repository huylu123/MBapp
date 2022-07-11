import React, { Component } from "react";
import { View, FlatList, Dimensions, 
        ImageBackground, Text,Pressable,
        StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import { CARS } from "../shared/cars";
import styles from "../shared/styles";
import styles1 from "../shared/styles1";
class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: CARS,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.cars}
          renderItem={({ item,index }) => this.renderCarListItem(item, index)}
          showsVerticalScrollIndicator={false}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").height}
        />
      </View>
    );
    

  }

  renderCarListItem(item, index) {
    const { navigate } = this.props.navigation;
    return (
      <ListItem
        key={index}
        onPress={() => navigate("CarItem", { carId:item.id })}
      >
        {/* <Avatar source={item.image} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.tagline}</ListItem.Subtitle>
        </ListItem.Content> */}
        <ListItem.Content style={styles.carContainer}>
          <ImageBackground source={item.image} style={styles.image} />

          <View style={styles.titles}>
            <Text style={styles.title}></Text>
            <Text style={styles.subtitle}>
              {item.tagline}{" "}
              <Text style={styles.subtitleCTA}>{item.taglineCTA}</Text>
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <StyledButton
              type="primary"
              content={"Custom Order"}
              onPress={() => {
                console.warn("Custom Order was pressed");
              }}
            />

            <StyledButton
              type="secondary"
              content={"Existing Inventory"}
              onPress={() => {
                console.warn("Existing Inventory was pressed");
              }}
            />
          </View>
        </ListItem.Content>
      </ListItem>
    );
  }
}
const StyledButton = (props) => {

  const { type, content, onPress } = props;

  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 10,
    },
    button: {
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 12,
      fontWeight: '500',
      textTransform: 'uppercase',
    }
  });
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};


export default CarList;

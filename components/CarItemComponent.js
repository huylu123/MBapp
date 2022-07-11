/* import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";

import { CARS } from "../shared/cars";
import styles from "../shared/styles";

class CarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: CARS,
    };
  }
  render() {
    return (
      <View style={styles.carContainer}>
        <ImageBackground source={this.state.image} style={styles.image} />

        <View style={styles.titles}>
          <Text style={styles.title}></Text>
          <Text style={styles.subtitle}>
            {this.state.tagline} <Text style={styles.subtitleCTA}>{this.taglineCTA}</Text>
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
      </View>
    );
  }
}
export default CarItem;
 */

import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Card, Image, Icon } from "react-native-elements";
import { CARS } from "../shared/cars";
import styles from "../shared/styles";

class RenderCarItem extends Component {
  render() {
    const car = this.props.car;
    if (car != null) {
      return (
        <Card style={{marginTop:500}}>
          <Image
            source={car.image}
            style={{
              width: "100%",
              height: 150,      
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card.FeaturedTitle>{car.name}</Card.FeaturedTitle>
          </Image>
          <Text style={{ margin: 10 }}>{car.tagline}</Text>
          <Icon raised reverse type='font-awesome' color='#f50'
            name={this.props.favorite ? 'heart' : 'heart-o'}
            onPress={() => this.props.favorite ? alert('Already favorite') : this.props.onPressFavorite()}/>
        </Card>
      );
    }
  }
}

class CarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: CARS,
    };
  }
  render() {
    const carId = parseInt(this.props.route.params.carId);
    const car = this.state.cars[carId];
    return <RenderCarItem car={car} />;
  }
}
export default CarItem;

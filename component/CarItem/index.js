import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./style";
import Cbutton from "../CButton";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/ModelS.jpeg")}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{"Model S"}</Text>

        <Text style={styles.subTitle}>{"this is the latest modal"}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Cbutton type={"primary"} content={"Custom order"} onPress={() => {}} />
        <Cbutton
          type={"secondary"}
          content={"Existing inventory"}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default CarItem;

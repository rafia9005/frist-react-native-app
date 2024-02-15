import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function HomeScreen() {
  function padding(a, b, c, d) {
    return {
      paddingTop: a,
      paddingRight: b !== undefined ? b : a,
      paddingBottom: c !== undefined ? c : a,
      paddingLeft: d !== undefined ? d : b !== undefined ? b : a,
    };
  }
  state = {
    data: [
      {
        id: 1,
        title: "Sepatu Adidas",
        price: "1.350.000",
        image: require("../assets/image/sepatu.jpg"),
        link: "/detail",
      },
      {
        id: 2,
        title: "Baju Batik",
        price: "450.000",
        image: require("../assets/image/batik.jpg"),
        link: "/detail",
      },
      {
        id: 3,
        title: "Macbook Air M1",
        price: "11.616.000",
        image: require("../assets/image/macbook.jpg"),
        link: "/detail",
      },
      {
        id: 4,
        title: "Google Pixel 5",
        price: "3.100.00",
        image: require("../assets/image/google-pixel.jpg"),
        link: "/detail",
      },
    ],
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerMenu}>
          <Text style={{ color: "white", fontWeight: "800", fontSize: 30 }}>
            Marketplace
          </Text>
        </View>
        <View style={styles.container}>
          <View>
            <TextInput placeholder="Search items" style={styles.search} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cardRow}>
            {this.state.data.map((data, index) => (
              <View style={styles.card} key={data.id}>
                <Image
                  source={data.image}
                  style={{ width: 150, height: 150, borderRadius: 5 }}
                />
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontSize: 20, fontWeight: "800" }}>
                    {data.title}
                  </Text>
                  <Text>Rp {data.price}</Text>
                  <TouchableOpacity
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <Text
                      style={{
                        backgroundColor: "#1e1f20",
                        color: "white",
                        padding: 10,
                        ...padding(10, 65),
                        borderRadius: 5,
                      }}
                    >
                      Buy
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          <Text>Create by @rafia9005</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerMenu: {
    backgroundColor: "#1e1f20",
    width: "90%",
    height: 150,
    marginTop: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 30,
    flexWrap: "wrap",
    paddingBottom: 200,
  },
  card: {
    padding: 10,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  search: {
    margin: 10,
    padding: 10,
    width: 370,
    borderWidth: 0.5,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 5,
  },
});

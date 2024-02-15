import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function Macbook() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/image/macbook.jpg")}
            style={styles.image}
          />
          <View>
            <Text style={styles.heading}>Macbook Air M1</Text>
            <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 700 }}>
              Rp 11.616.000
            </Text>
            <View style={styles.decs}>
              <Text style={{ fontSize: 15 }}>
                # PILIHAN SPEK : RAM 256GB
                {"\n"}
                # PILIHAN WARNA : Space Gray | Silver | Gold
                {"\n"}
                {"\n"}
                Memori 8 GB
                {"\n"}
                Layar dengan lampu latar LED 13,3 inci (diagonal) dengan
                teknologi IPS
                {"\n"}
                Layar Retina
                {"\n"}
                2560 x 1600 piksel
                {"\n"}
                Kecerahan 400 nit
                {"\n"}
                Warna luas (P3)
                {"\n"}
                Teknologi True Tone
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    width: "90%",
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "800",
    fontStyle: "italic",
  },
  decs: {
    marginTop: 10,
  },
});

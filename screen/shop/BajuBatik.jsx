import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function BajuBatik() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/image/batik.jpg")}
            style={styles.image}
          />
          <View>
            <Text style={styles.heading}>Baju Batik</Text>
            <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 700 }}>
              Rp 450.00
            </Text>
            <View style={styles.decs}>
              <Text style={{ fontSize: 15 }}>
                Batik ini memiliki design yang exclusive, dengan jahitan yang
                sangat detailed.
                {"\n"}
                {"\n"}
                Jenis bahan: Katun Dobby Premium Fit: Regular Fit
                {"\n"}
                {"\n"}
                Lapisan: Tricot
                {"\n"}
                {"\n"}
                Details:
                {"\n"}
                 1. Ada smok di bagian lengan, kerah dan kantong
                {"\n"}
                2. Jahitan yang kami jamin rapih dan sudah melewati quality
                check
                {"\n"}
                {"\n"}
                Size Chart
                {"\n"}
                Ukuran: S / M / L / XL / XXL
                {"\n"}
                Lingkar Dada (CM): 105 / 110 / 115 / 120 / 125
                {"\n"}
                Panjang Baju (CM): 73 / 73 / 73 / 73 / 73
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

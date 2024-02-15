import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function GooglePixel() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/image/google-pixel.jpg")}
            style={styles.image}
          />
          <View>
            <Text style={styles.heading}>Google Pixel 5</Text>
            <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 700 }}>
              Rp 3.100.0000
            </Text>
            <View style={styles.decs}>
              <Text style={{ fontSize: 15 }}>
                Mohon dibaca terlebih dahulu deskripsi dibawah ini
                {"\n"}
                GRATIS FULLSET + ADAPTOR CAS / KABEL DATA ( selama persediaan
                masih ada ){"\n"}
                DILARANG KOMPLAIN JIKA TIDAK DAPAT AKSESORIS
                {"\n"}
                *GARANSI SINYAL 1 TAHUN BEACUKAI
                {"\n"}* fullset berisi kepala adaptor / kabel data ( selama
                persediaan masih ada)
                {"\n"}
                {"\n"}
                GOOGLE PIXEL 5{"\n"}
                Spesifikasi
                {"\n"}- Layar 6.0” (1080 x 2340pixel)
                {"\n"}- Snapdragon 765 5G
                {"\n"}- Ram 8Gb
                {"\n"}- Internal 128 Gb
                {"\n"}- Single sim
                {"\n"}- Kamera Utama 16Mp x 12.2Mp
                {"\n"}- Kamera selfie 8 Mp
                {"\n"}- Batre 4080mAh
                {"\n"}- Fingerprint
                {"\n"}- Layar P-OLED
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

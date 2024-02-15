import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function SepatuAdidas() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/image/sepatu.jpg")}
            style={styles.image}
          />
          <View>
            <Text style={styles.heading}>Sepatu Adidas</Text>
            <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 700 }}>Rp 1.350.000</Text>
            <View style={styles.decs}>
              <Text style={{ fontSize: 15 }}>
                Berlari sedikit lebih cepat. Jalankan sedikit lebih jauh. Dengan
                sepatu lari adidas yang ringan, lembut, dan suportif, Anda siap
                mengambil langkah berikutnya dalam perjalanan lari Anda.
                Bantalan EVA menghadirkan kenyamanan saat latihan lari dan hari
                perlombaan, sementara outsole Adiwear mencengkeram trek atau
                trotoar.
                {"\n"}
                {"\n"}
                Dibuat dengan serangkaian bahan daur ulang, bagian atas ini
                memiliki setidaknya 50% konten daur ulang. Produk ini hanya
                mewakili salah satu solusi kami untuk membantu mengakhiri sampah
                plastik.
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
    marginTop: 10
  },
});

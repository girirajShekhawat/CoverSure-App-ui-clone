import { View, Text, StyleSheet, Image } from "react-native";
import { allInsuranceData } from "@/app/(utils)/(insurance)/allInsuranceData";
export default function AllInsurance() {
  return (
    <View style={styles.container}>
    <View style={styles.cardContainer}>
      {allInsuranceData.map((item, index) => (
        <View key={index} style={styles.card}> 
          <Text style={styles.title}>{item.title}</Text>
          <Image source={ item.image } style={styles.image}  />
          <View> 
          <Text style={styles.text}>{item.text}</Text>
          <Text style={styles.description}>{item.description}</Text>
          </View>
          </View>

      ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "100%",
    
  },
  title: {
    fontSize: 12,
    fontFamily:"DM Sans",
    fontWeight: 700,
    color: "white",
  },
  text: {
    fontSize: 9,
    fontFamily:"DM Sans",
    fontWeight: 400,
  
    color: "white",
  },
  description: {
    fontSize: 10,
    fontFamily:"DM Sans",
    fontWeight: 700,
    color: "white",
  },
  image: {
    position: "absolute",
    top: 28,
    right: 5,
    width: 60,
    height: 60,
    resizeMode: "contain",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginLeft: "auto",
   
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#2753D2",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    width: "31%",
    height: "45%",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 0,
    overflow: "hidden",
     elevation: 5,
     shadowColor: '#000',
     shadowOffset: {
       width: 0,
       height: 2,
     },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 14,
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
  },
  cardImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginLeft: "auto",
  },
});

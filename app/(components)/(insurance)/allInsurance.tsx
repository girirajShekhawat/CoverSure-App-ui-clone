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
          <Text style={styles.text}>{item.text}</Text>
          <Text style={styles.description}>{item.description}</Text>
           
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
    fontWeight: 600,
    color: "white",
  },
  text: {
    fontSize: 10,
    fontFamily:"DM Sans",
    fontWeight: 400,
  
    color: "white",
  },
  description: {
    fontSize: 10,
    fontFamily:"DM Sans",
    fontWeight: 400,
    color: "white",
  },
  image: {
    width: 75,
    height: 40,
    resizeMode: "contain",
    marginLeft: "auto",
     
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#3a61d5",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    width: "29%",
    height: "32%",
    flexDirection: "column",
    gap: 0,
     
  },
  cardContainer: {
    
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  }
});

import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import AllInsurance from "../(components)/(insurance)/allInsurance";
import { ChevronLeft } from "lucide-react-native";
import { allInsuranceData2, certifications } from "../(utils)/(insurance)/allInsuranceData";

export default function Insurance() {
  return (
    <View> 
     
    <View style={{ height: "100%", width: "100%", backgroundColor: "#F3F4F9" }}>
      {/* upper part */}
        
      <View
        style={{
          height: "40%",
          width: "100%",
          backgroundColor: "#0032C7",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          overflow: "hidden",
        }}
      >
             
        <View
          style={{
            height: 50,
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 5,
            alignItems: "center",
            padding: 5,
          }}
        >
          
          <ChevronLeft
            size={18}
            color="black"
            style={{
                padding: 20,
              backgroundColor: "white",
              marginLeft: 16,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "white",
              marginLeft: 20,
              fontFamily: "DMSans",
            }}
          >
            Get Insured
          </Text>
        </View>
        <AllInsurance />
      </View>

      {/* text part */}
      <View
        style={{
          marginTop: 20,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: "black",

            fontFamily: "DMSans",
          }}
        >
          Insurance simplified
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: "#767880",
            fontFamily: "DMSans",
            textAlign: "center",
            lineHeight: 15,
          }}
        >
          CoverSure makes insurance rasy to understand, simple to choose, and
          efforless to buy. - all from one convenient place.
        </Text>
      </View>

      {/* middle cards */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 12,
          marginHorizontal: 20,
          marginTop: 20,
          flexWrap: "wrap",
        }}
      >
        {allInsuranceData2.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "column",
              gap: 10,
              justifyContent: "space-between",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              width: "48%",
            }}
          >
            <Image
              source={item.image}
              style={{ width: 50, height: 40, objectFit: "contain" }}
            />
            <Text
              style={{
                fontSize: 10,
                fontWeight: 700,
                fontFamily: "DMSans",
                color: "black",
              }}
            >
              {item.text}
            </Text>
          </View>
        ))}
      </View>

      {/* Footer with security certifications */}
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        {/* Security badge row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 15,
            marginTop: 15,
          }}
        >
          <Image
            source={require("../../assets/images/insurance.png")}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          <Text
            style={{
              fontFamily: "DMSans",
              fontSize: 10,
              fontWeight: 700,
              color: "#333",
            }}
          >
            Your data is 100% safe & secure
          </Text>
        </View>

        {/* Certifications row */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderTopColor: "#DCDFEE",
            borderBottomColor: "#DCDFEE",
            paddingBottom: 10,
            paddingTop: 10,
            width: "100%",
          }}
        >
            {certifications.map((item, index) => (
                <View key={index} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                    <Text style={{ color: "#000000", fontSize: 10 }}>{item}</Text>
               {index !== certifications.length - 1 && <View style={{ backgroundColor: "#9C9EA3", height: 8, width: 8 }}></View>}
                </View>
            ))}
          
        </View>

        {/* Registration info */}
        <Text
          style={{
            textAlign: "center",
            fontSize: 10,
            color: "#888",
            lineHeight: 16,
            marginTop: 5,
            fontFamily: "DMSans",
          }}
        >
          IRDAI Reg No. CA0894 | Category: Corporate Agent (Composite) |{"\n"}
          Validity: till 9th Jan'2027
        </Text>
      </View>
    </View>
    </View>
  );
}

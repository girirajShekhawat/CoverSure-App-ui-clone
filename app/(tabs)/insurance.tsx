import { View, Text, Image } from "react-native";
import AllInsurance from "../(components)/(insurance)/allInsurance";
import { CircleChevronLeft } from "lucide-react-native";
import { allInsuranceData2 } from "../(utils)/(insurance)/allInsuranceData";

export default function Insurance() {
  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#f0f0f0" }}>
      {/* upper part */}
      <View
        style={{
          height: "40%",
          width: "100%",
          backgroundColor: "#1c48cc",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 5,
            alignItems: "center",
          }}
        >
          {" "}
          <CircleChevronLeft
            size={30}
            color="black"
            style={{
              backgroundColor: "white",
              marginLeft: 10,
              marginTop: 22,
              borderRadius: 100,
              padding: 12,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              marginLeft: 20,
              marginTop: 20,
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
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: "black",
            marginLeft: 20,
            fontFamily: "DMSans",
          }}
        >
          Insurance simplified
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: "grey",
            marginLeft: 20,
            fontFamily: "DMSans",
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
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
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
                fontSize: 12,
                fontWeight: 600,
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
          padding: 20,
        }}
      >
        {/* Security badge row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 15,
          }}
        >
          <Image
            source={require("../../assets/images/insurance.png")}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          <Text
            style={{
              fontFamily: "DMSans",
              fontSize: 14,
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
            justifyContent: "space-around",
            alignItems: "center",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderTopColor: "#e0e0e0",
            borderBottomColor: "#e0e0e0",
            paddingBottom: 15,
            paddingTop: 15,
          }}
        >
          <Text style={{ color: "#666", fontSize: 12 }}>IRDAI regulated</Text>
          <Text style={{ color: "#666", fontSize: 12 }}>•</Text>
          <Text style={{ color: "#666", fontSize: 12 }}>
            ISO 27001 Compliant
          </Text>
          <Text style={{ color: "#666", fontSize: 12 }}>•</Text>
          <Text style={{ color: "#666", fontSize: 12 }}>Google Certified</Text>
        </View>

        {/* Registration info */}
        <Text
          style={{
            textAlign: "center",
            fontSize: 11,
            color: "#888",
            lineHeight: 16,
          }}
        >
          IRDAI Reg No. CA0894 | Category: Corporate Agent (Composite) |{"\n"}
          Validity: till 9th Jan'2027
        </Text>
      </View>
    </View>
  );
}

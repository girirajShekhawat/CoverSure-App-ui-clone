import { View, Text } from "react-native";

export default function Portfolio() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
    }}
  >
    <Text style={{ fontSize: 24, marginBottom: 12, fontWeight: "bold" }}>
      🚧 Work in Progress
    </Text>
    <Text style={{ fontSize: 16, color: "#666", textAlign: "center" }}>
      This feature is currently under development.{"\n"}
      Check back soon!
    </Text>
  </View>
  );
} 
import { Image, View } from "react-native";

const Avatar = ({ size, props }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: "hidden",
        borderWidth: 3,
      }}
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: props,
        }}
      />
    </View>
  );
};
export default Avatar;

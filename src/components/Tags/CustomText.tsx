import React from "react";
import { Text } from "react-native";

const CustomText = ({ children, ...restProps }) => {
  const defaultStyle = { fontFamily: "Roboto_400Regular" };
  let mergedStyle = [];
  if (restProps.style) {
    mergedStyle = [defaultStyle, restProps.style];
  } else {
    mergedStyle = [defaultStyle];
  }

  return (
    <Text style={mergedStyle} {...restProps}>
      {children}
    </Text>
  );
};

export default CustomText;

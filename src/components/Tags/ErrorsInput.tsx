import React from "react";
import { Text } from "react-native";
import Colors from "../../utils/colorPalette";

const ErrorInput = ({ children, ...restProps }) => {
  const defaultStyle = {
    fontFamily: "Roboto_400Regular",
    color: Colors.Red700,
    textAlign: "center",
  };
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

export default ErrorInput;

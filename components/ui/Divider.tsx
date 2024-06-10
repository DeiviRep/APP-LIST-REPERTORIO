import { Colors } from "@/constants/Colors";
import React, { FC } from "react";
import { View } from "react-native";

interface Props {
  style?: any;
}
const Divider: FC<Props> = ({ style }) => {
  
  return (
    <View
      style={{
        borderBottomColor: Colors.grey[400],
        borderBottomWidth: 1,
      }}
    />
  );
};

export default Divider;

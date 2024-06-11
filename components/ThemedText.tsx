import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "subtitle2"
    | "link"
    | "body1"
    | "body2"
    | "description";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "subtitle2" ? styles.subtitle2 : undefined,
        type === "description" ? styles.description : undefined,
        type === "body1" ? styles.body1 : undefined,
        type === "body2" ? styles.body2 : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
    fontWeight: "medium",
  },
  body1: {
    fontSize: 15,
    fontWeight: "light",
  },
  body2: {
    fontSize: 14,
    fontWeight: "medium",
  },
  link: {
    fontSize: 16,
    color: "#0a7ea4",
  },
});

import type { PropsWithChildren, ReactElement } from "react";
import { Dimensions, StyleSheet, Text, View, useColorScheme } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "./ThemedText";
import Divider from "./ui/Divider";
import ButtonFloat from "./ui/ButtonFloat";

const HEADER_HEIGHT = 250;
const WINDOW_HEIGHT = Dimensions.get('window').height;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  title?: string;
}>;

export default function ParallaxScrollViewTitle({
  children,
  headerImage,
  headerBackgroundColor,
  title = "Titulo App",
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <View
          style={{
            padding: 14,
            paddingTop: 40,
            paddingBottom: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            backgroundColor: headerBackgroundColor[colorScheme],
          }}
        >
          <ThemedText type="subtitle">{title}</ThemedText>
          <ThemedText type="body1">{title}</ThemedText>
          {/* <ThemedText type="title">'Icons'</ThemedText> */}
        </View>
        <Divider />
        <ThemedView style={styles.content}>{children}</ThemedView>
        <ButtonFloat />
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
    height: WINDOW_HEIGHT/2,
  },
});

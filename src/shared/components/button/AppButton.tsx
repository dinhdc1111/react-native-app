import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View } from "react-native"
import { ReactNode } from "react";
import { APP_COLOR } from "@/shared/constants/colors";
type Props = {
  title: string,
  onPress: () => void,
  textStyle?: StyleProp<TextStyle>
  pressStyle?: StyleProp<TextStyle>
  btnStyle?: StyleProp<TextStyle>
  icons?: ReactNode
}
const AppButton = (props: Props) => {
  const { title, onPress, textStyle, pressStyle, btnStyle, icons } = props;
  return (
    <Pressable
      style={({ pressed }) => ([{
        opacity: pressed === true ? 0.8 : 1,
        alignSelf: "flex-start"
      }, pressStyle])}
      onPress={onPress}
    >
      <View style={[styles.buttonContainer, btnStyle]}>
        {icons}
        <Text style={textStyle}>{title}</Text>
      </View>
    </Pressable>
  )
}
export default AppButton
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: APP_COLOR.PRIMARY_COLOR
  }
})
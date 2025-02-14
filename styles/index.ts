import { Colors } from "@/constants/Colors";
import { fontSize } from "@/constants/Fonts";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    text: {
        fontSize: fontSize.base,
        color: Colors.text
    }
})

export const utilsStyles = StyleSheet.create({

})
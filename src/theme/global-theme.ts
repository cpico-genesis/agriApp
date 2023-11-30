import { StyleSheet } from "react-native";
import colors from "app/constants/colors";

export const globalTheme = StyleSheet.create({
  globalPadding: {
    padding: 10,
  },
  formContainer: {
    paddingHorizontal: 30,
    justifyContent: "center",
    height: "100%",
    marginBottom: 50,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  label: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  inputField: {
    color: "black",
    fontSize: 16,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 3,
    borderColor: colors.gray,
    borderWidth: 1,
  },
  inputFieldIOS: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  buttonContainer: {
    marginTop: 15,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: colors.light,
    textAlign: "center",
    fontWeight: "bold",
  },
  newUserContainer: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  buttonReturn: {
    position: "absolute",
    top: 50,
    left: 20,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
});

import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";

export const NAV_TAB_HEIGHT = 95;
export const NAV_HEIGHT = 45;
export const TAB_HEIGHT = 50;

export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;
export const shadowOpt = { btnWidth: deviceWidth - 55, btnHeight: 45 };

export const spaceHeight = deviceHeight - 375 - 45;

// Only for Intro screens
export const introSpaceHeight = deviceHeight - 364;

// Common gradient colors
export const blueGradient = {
  colors: ["rgb(75,102,234)", "rgb(130,160,247)"],
  colorsStart: { x: 0.2, y: 0.4 },
  colorsEnd: { x: 1.0, y: 1.0 },
};

// CommonStyles
export const CommonStyles = StyleSheet.create({
  normalPage: {
    position: "relative",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  normalSinglePage: {
    flex: 1,
    backgroundColor: "#fbe7e3",
  },
  wrapperBox: {
    marginTop: 20,
    marginBottom: 20,
  },
  noTabScrollView: {
    marginTop: NAV_HEIGHT,
  },
  smallWrapperBox: {
    marginTop: 20,
    marginBottom: 20,
  },
  scrollView: {
    marginTop: NAV_HEIGHT,
    marginBottom: TAB_HEIGHT,
  },
  // Color
  whiteColor: {
    color: "#FFFFFF",
  },
  greyColor: {
    color: "rgb(105,105,105)",
  },
  lightgreyColor: {
    color: "rgb(150,150,150)",
  },
  blackColor: {
    color: "rgb(19,19,19)",
  },
  softBlueColor: {
    color: "rgb(75,102,234)",
  },
  darkSkyBlueColor: {
    color: "rgb(63,103,230)",
  },
  periBlueColor: {
    color: "rgb(79,109,230)",
  },
  // Text
  extraLargeText: {
    height: 52,
    fontSize: 32,
    fontFamily: "Poppins-Bold",
  },
  titleText: {
    fontSize: 30,
    lineHeight: 38,
  },
  headerText: {
    fontSize: 23,
    textAlign: "center",
    lineHeight: 32,
    width: wp("80%"),
  },
  itemHeaderText: {
    fontSize: 17,
    lineHeight: 29,
  },
  mediumText: {
    fontSize: 16,
  },
  normalText: {
    fontSize: 15,
    lineHeight: 23,
  },
  smallText: {
    fontSize: 13,
    lineHeight: 30,
  },
  shortSmallText: {
    fontSize: 13,
    lineHeight: 23,
  },
  light: {
    fontFamily: "Poppins-Light",
  },
  regularBold: {
    fontFamily: "Poppins-Regular",
  },
  mediumBold: {
    fontFamily: "Poppins-Medium",
  },
  semiBold: {
    fontFamily: "Poppins-SemiBold",
  },
  extraBold: {
    fontFamily: "Poppins-Bold",
  },
  // Image
  borderRadius: {
    borderRadius: 200,
  },
  // Item box
  itemWhiteBox: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    elevation: 6,
  },
  // Form Styles
  textInputField: {
    flexDirection: "row",
    width: deviceWidth - 47,
    height: 45,
    marginBottom: 20,
    borderColor: "rgb(229,229,229)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  textInput: {
    // width: deviceWidth - 55,
    width: 280,
    // height: 45,
    paddingLeft: 50,
    color: "#FF7C7C",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  selectboxField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: deviceWidth - 55,
    height: 45,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "rgb(229,229,229)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  selectboxLabel: {
    color: "rgb(150,150,150)",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  // Button Styles
  backButton: {
    flex: 1,
    alignItems: "center",
    width: 41,
    height: 41,
  },
  nextButton: {
    flex: 1,
    alignItems: "center",
    width: 60,
    height: 60,
  },
  SignInButton: {
    marginLeft: 48,
    marginRight: 47,
  },
  // Intro pages styles
  introPageImageBox: {
    // marginLeft: 36,
    flex: 1,
    width: "95%",
    alignSelf: "center",
  },
  introPageImageLogo: {
    alignSelf: "center",
    flex: 1 / 4,
    width: "95%",
  },
  introSecondPageImageLogo: {
    alignSelf: "center",
    flex: 1 / 4,
    width: "95%",
  },
  introSecondLeftImageLogo: {
    width: "95%",
    position: "absolute",
    resizeMode: "cover",
    marginTop: "2%",
    marginLeft: "-25%",
    bottom: "-7%",
  },
  introSecondRightImageLogo: {
    marginRight: "-35%",
    position: "absolute",
    alignSelf: "flex-end",
    display: "flex",
    zIndex: 1,

    bottom: "-7%",
  },
  introOneButton: {
    marginTop: "2%",

    width: "100%",
    //  height:'10%',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: "2%",
  },
  introSecondButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    bottom: "3%",
  },
  introPageTextBox: {
    alignItems: "center",

    paddingTop: 20,
    paddingBottom: 10,
    flex: 0.2,
    alignContent: "center",
    alignSelf: "center",
  },
  introSecondPageTextBox: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1 / 8,
    alignContent: "center",
    alignSelf: "center",
  },
  introPageSubText: {
    width: deviceWidth - 75,
    height: 60,
    marginTop: 15,
    color: "rgb(105,105,105)",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  introPageButtonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: introSpaceHeight * 0.27,
    marginBottom: 20,
  },
  introPageButton: {
    
    alignItems: "center",
    marginTop: 29,
    width: 60,
    height: 60,
  },

  // SignInScreen
  SignInLogoImageBox: {
    
    flex: 1,
   
    
    //aspectRatio:1 * 2.5,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20%",
    paddingBottom: "20%",
    alignSelf: "center",
    // backgroundColor:'red'
  },
  SignInPageBackgroud: {
    flex: 1,
    alignItems: "center",
    width: deviceWidth.width,
    height: deviceHeight.height,
  },
  LogInButton: {
    // marginTop: "2%",

    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "row",
    flexDirection: "row",
    width: deviceWidth - 47,
    height: 45,
    marginBottom: 20,
    borderColor: "rgb(229,229,229)",
    backgroundColor: "#FF7C7C",

    borderStyle: "solid",
    borderRadius: 10,
  },
  // StartScreens
  labelField: {
    marginTop: 30 + NAV_HEIGHT,
    marginBottom: 25,
    paddingLeft: (deviceWidth - (deviceWidth - 55)) / 2,
  },
  pickerBox: {
    position: "relative",
    height: 402,
    flexDirection: "row",
    marginBottom: 15,
  },
  selectedOption: {
    position: "absolute",
    top: deviceHeight / 2.6 + NAV_HEIGHT,
    width: deviceWidth,
    height: 75,
  },
  // Form Screens
  screenTitleBox: {
    height: 75,
    marginTop: spaceHeight * 0.3 + NAV_HEIGHT,
    marginBottom: spaceHeight * 0.15,
    paddingLeft: (deviceWidth - (deviceWidth - 55)) / 2,
  },
  buttonBox: {
    height: 45,
    alignItems: "center",
  },
  // Circle edit button
  editButton: {
    position: "absolute",
    top: 25,
    right: 15,
    elevation: 12,
  },
});

import { StyleSheet, Dimensions } from "react-native";

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
    fontSize: 27,
    textAlign: "center",
    lineHeight: 30,
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
    // width: 280,
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
  SignInButton:{
    marginLeft:48,
    marginRight:47,
  },
  // Intro pages styles
  introPageImageBox: {
    width: 303,
    height: 338,
    marginLeft: 36,
    marginRight: 36,
    // alignItems: 'center',
    // marginTop: introSpaceHeight * 0.33,
  },
  introPageImageLogo: {
    width: 99,
    height: 102.56,
    marginLeft: 138,
    marginRight: 138,
    marginTop: 29,
  },
  introSecondPageImageLogo: {
    width: 235.34,
    height: 187.54,
    marginLeft: 60.41,
    marginRight: 79.26,
  },
  introSecondLeftImageLogo: {
    marginTop: 23.51,
    width: 231,
    height: 416,
    marginLeft:-100
    
  },
  introSecondRightImageLogo: {
    marginTop: 67.65,
    width: 179.23,
    height:371.85,
    marginRight:-100,
    position:'absolute',
    alignSelf:'flex-end',
    bottom:0,
    zIndex:1
  },
  introOneButton:{
    marginTop:29,
    marginBottom:57,
    marginLeft:76,
    marginRight:76,
  },
  introSecondButton:{
    position:'absolute',
    marginTop:29,
    marginBottom:57,
    marginLeft:76,
    marginRight:76,
    bottom:23
  },
  introPageTextBox: {
    alignItems: "center",
    width: 214,
    height: 67,
    marginTop: 88,
    marginBottom: 49,
    marginLeft: 81,
    marginRight: 80,
    // marginTop: introSpaceHeight * 0.27,
  },
  introSecondPageTextBox: {
    alignItems: "center",
    width: 270,
    height: 97,
    marginTop: 88,
    marginBottom: 0,
    marginLeft: 52,
    marginRight: 52,
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
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: "center",
    marginTop: 29,
    width: 60,
    height: 60,
  },

  // SignInScreen
  SignInLogoImageBox:{
      marginTop:93.93,
      marginLeft:85.41,
      marginRight:86,
      width:203.59,
      height:262.07,
  },
  SignInPageBackgroud:{
    flex: 1, 
    alignItems: "center",
    width: deviceWidth.width,
    height: deviceHeight.height,
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

import {
  Dimensions,PixelRatio
} from 'react-native';

export const NAV_TAB_HEIGHT = 95;
export const NAV_HEIGHT = 45;
export const TAB_HEIGHT = 50;

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const shadowOpt = {btnWidth: deviceWidth - 55, btnHeight: 45}




const widthToDp = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const heightToDp = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};




export {widthToDp,heightToDp};








// Only for FindDoctors, FindHospital, Appointment screens
 export const spaceHeight = deviceHeight -  375 - 45;

// Only for Intro screens
export const introSpaceHeight = deviceHeight - 364;

// Common gradient colors
export const blueGradient = {
  colors: ['rgb(75,102,234)', 'rgb(130,160,247)'],
  colorsStart: {x: 0.2, y: 0.4},
  colorsEnd: {x: 1.0, y: 1.0}
}

import React, { useMemo } from "react";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
// import ScrollToBottom from "react-scroll-to-bottom";

function index({ data, messages, userName, flatListRef, scrollToItem }) {
  // console.log({ messages123: messages });

  // console.log({ messages });

  return (
    <SafeAreaView style={styles.main_innerscroll}>
      {/* <ScrollToBottom>
        {messages.map((item) => {
          <View
            style={item.userName !== userName ? styles.recived : styles.sender}
          >
            {item.userName !== userName && (
              <Text
                style={[
                  styles.text,
                  { fontSize: 15, fontFamily: "Poppins-SemiBold" },
                ]}
              >
                {item.userName}
              </Text>
            )}
            <Text
              style={
                item.userName !== userName
                  ? styles.text
                  : [styles.text, { color: "#fff" }]
              }
            >
              {item.text}
            </Text>
          </View>;
        })}
      </ScrollToBottom> */}
      <FlatList
        data={messages}
        // scrollToIndex={0}
        // inverted
        // initialNumToRender={messages.length}
        //here start
        // data={messages.reverse()}
        // scrollToIndex={0}
        // inverted
        // initialNumToRender={messages.length}
        ref={flatListRef}
        renderItem={(item) => {
          // console.log(item.item);
          return (
            <View
              style={
                item.item.userName !== userName ? styles.recived : styles.sender
              }
            >
              {item.item.userName !== userName && (
                <Text
                  style={[
                    styles.text,
                    { fontSize: 15, fontFamily: "Poppins-SemiBold" },
                  ]}
                >
                  {item.item.userName}
                </Text>
              )}
              {item.item.text && (
                <Text
                  style={
                    item.item.userName !== userName
                      ? styles.text
                      : [styles.text, { color: "#fff" }]
                  }
                >
                  {item.item.text}
                </Text>
              )}
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default index;

const styles = StyleSheet.create({
  main_innerscroll: {
    flex: 1,
  },

  recived: {
    backgroundColor: "#fff",
    height: "auto",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingVertical: "1.5%",
    width: "50%",
    marginTop: "5%",
    marginHorizontal: "5%",
    borderRadius: 15,
  },
  sender: {
    backgroundColor: "#FF5A5A",
    height: "auto",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingVertical: "1.5%",
    marginVertical: "2%",
    marginHorizontal: "5%",
    borderRadius: 15,
    width: "50%",
    alignSelf: "flex-end",
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    letterSpacing: 0.1,
  },
});

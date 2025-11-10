import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { linkTo, navigate } from "expo-router/build/global-state/routing";
import { useRouter } from "expo-router";

const Chats = () => {
  const router = useRouter();
  const button = () => <AntDesign name="search1" size={24} color="black" />;
  return (
    <ScrollView style={{ paddingHorizontal: 8 }}>
      <View style={{ gap: 10 }}>
        <Header headerTitle={"Chats"} button={button} />
        <Pressable
          onPress={() => {
            router.push("/charscreenf");
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700" }}>
            Your UniBuddies!
          </Text>
        </Pressable>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Avatar
            size={80}
            props="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <View style={{ width: "100%" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "300",
                maxWidth: "70%",
              }}
            >
              Start your first conversation with your friends now!
            </Text>
          </View>
        </View>
        <View style={styles.headerSection}>
          <Text style={styles.logo}>Chats</Text>
          <MaterialCommunityIcons name="sort-variant" size={24} color="black" />
        </View>

        {/* Chat List */}
        <View style={styles.chatList}>
          {/* Chat Item 1 */}
          <Pressable
            style={styles.chatItem}
            onPress={() => router.push("/chatScreen")}
          >
            <Avatar
              size={50}
              props="https://randomuser.me/api/portraits/women/1.jpg"
            />
            <View style={styles.chatInfo}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>Sarah Johnson</Text>
                <Text style={styles.chatTime}>2:30 PM</Text>
              </View>
              <Text style={styles.lastMessage}>
                Hey! How's your project going?
              </Text>
            </View>
          </Pressable>

          {/* Chat Item 2 */}
          <Pressable
            style={styles.chatItem}
            onPress={() => router.push("/chatScreen")}
          >
            <Avatar
              size={50}
              props="https://randomuser.me/api/portraits/men/1.jpg"
            />
            <View style={styles.chatInfo}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>Mike Smith</Text>
                <Text style={styles.chatTime}>Yesterday</Text>
              </View>
              <Text style={styles.lastMessage}>
                Let's meet at the library at 3!
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  headerSection: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 8,
    marginBottom: 6,
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#1a1a1a",
  },
  chatList: {
    gap: 12,
    marginTop: 10,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  chatInfo: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  chatTime: {
    fontSize: 12,
    color: "#666",
  },
  lastMessage: {
    fontSize: 14,
    color: "#666",
    marginRight: 40,
  },
});

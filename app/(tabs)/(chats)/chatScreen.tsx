import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Avatar from "@/components/Avatar";

const ChatScreen = () => {
  const messages = [
    {
      id: "1",
      text: "Hey! How's your project going?",
      sender: "them",
      time: "2:30 PM",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: "2",
      text: "Pretty good — almost finished the UI. You?",
      sender: "me",
      time: "2:31 PM",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Avatar size={44} props={messages[0].avatar} />
        <View style={styles.headerText}>
          <Text style={styles.contactName}>Sarah Johnson</Text>
          <Text style={styles.contactStatus}>Online</Text>
        </View>
      </View>

      {/* Messages */}
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map((m) => {
          const isMe = m.sender === "me";
          return (
            <View
              key={m.id}
              style={[
                styles.messageRow,
                isMe ? styles.messageRowMe : styles.messageRowThem,
              ]}
            >
              {!isMe && <Avatar size={36} props={m.avatar} />}

              <View
                style={[
                  styles.bubble,
                  isMe ? styles.bubbleMe : styles.bubbleThem,
                ]}
              >
                <Text style={styles.messageText}>{m.text}</Text>
                <Text style={styles.timeText}>{m.time}</Text>
              </View>

              {isMe && <Avatar size={36} props={m.avatar} />}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
  },
  headerText: {
    marginLeft: 10,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "600",
  },
  contactStatus: {
    fontSize: 12,
    color: "#666",
  },
  messagesContainer: {
    padding: 12,
    gap: 12,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    maxWidth: "100%",
  },
  messageRowThem: {
    justifyContent: "flex-start",
    gap: 8,
  },
  messageRowMe: {
    justifyContent: "flex-end",
    gap: 8,
  },
  bubble: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    maxWidth: "75%",
  },
  bubbleThem: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    marginLeft: 4,
  },
  bubbleMe: {
    backgroundColor: "#DCF8C6",
    marginRight: 4,
  },
  messageText: {
    fontSize: 15,
    color: "#111",
  },
  timeText: {
    fontSize: 11,
    color: "#666",
    marginTop: 6,
    alignSelf: "flex-end",
  },
});

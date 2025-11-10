import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import React from "react";
import Header from "@/components/Header";
import { Octicons } from "@expo/vector-icons";

const NotificationItem = ({ image, title, time, icon }) => (
  <Animated.View style={styles.notificationCard}>
    {image ? (
      <Image source={{ uri: image }} style={styles.avatar} />
    ) : (
      <View style={styles.iconContainer}>
        <Octicons name={icon} size={24} color="#666" />
      </View>
    )}
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  </Animated.View>
);

const Notifications = () => {
  const button = () => (
    <Pressable style={styles.filterButton}>
      <Octicons name="filter" size={24} color="#1c1c1c" />
    </Pressable>
  );

  const notifications = [
    {
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      title: "Mike Smith sent you a friend request",
      time: "2 hours ago",
    },
    {
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      title: "Sarah Johnson sent you a message",
      time: "5 hours ago",
    },
    {
      icon: "info",
      title: "System Update",
      time: "New features available!",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        <Header headerTitle="Notifications" button={button} />

        <View style={styles.introSection}>
          <Text style={styles.subtitle}>
            You will receive notifications of friend requests, messages, and
            system updates here.
          </Text>
        </View>

        <View style={styles.notificationsContainer}>
          {notifications.map((notification, index) => (
            <NotificationItem
              key={index}
              image={notification.image}
              title={notification.title}
              time={notification.time}
              icon={notification.icon}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  contentWrapper: {
    padding: 16,
    gap: 20,
  },
  introSection: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subtitle: {
    fontSize: 15,
    color: "#666666",
    lineHeight: 22,
  },
  notificationsContainer: {
    gap: 12,
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  iconContainer: {
    backgroundColor: "#f0f2f5",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationContent: {
    marginLeft: 16,
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1c1c1c",
    marginBottom: 4,
  },
  timeText: {
    fontSize: 14,
    color: "#666666",
  },
  filterButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f0f2f5",
  },
});

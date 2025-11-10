import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "@/components/Header";
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const PLANS = [
  {
    plan: "Verified profile creation using university email",
    p1: true,
    p2: true,
  },
  {
    plan: "Interest-based profiles showcasing hobbies and courses​",
    p1: true,
    p2: true,
  },
  {
    plan: "Daily limited swipes with familiar swipe interface​",
    p1: true,
    p2: true,
  },
  { plan: "Secure private chat once matched", p1: true, p2: true },
  { plan: "Unlimited daily swipes​", p1: false, p2: true },
  {
    plan: "Advanced filters by course modules and societies​",
    p1: false,
    p2: true,
  },
  { plan: "Incognito mode", p1: false, p2: true },
  { plan: "Ad-free experience", p1: false, p2: true },
];

const Profile = () => {
  const headerButton = () => (
    <Pressable>
      <AntDesign name="setting" size={24} color="#1c1c1c" />
    </Pressable>
  );
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        <Header headerTitle="Profile" button={headerButton} />

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Avatar
            size={90}
            props="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <View style={styles.profileInfo}>
            <Text style={styles.nameText}>Richard, 22</Text>
            {[
              "Aston University",
              "Final Year - Computer Science",
              "Graduate Year - 2026",
            ].map((text, index) => (
              <Button
                key={index}
                style={styles.infoButton}
                textStyle={styles.infoButtonText}
                onPress={() => router.replace("/auth/signin")}
              >
                {text}
              </Button>
            ))}
          </View>
        </View>

        {/* Premium Card */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cardContainer}
        >
          <View style={styles.premiumCard}>
            <Text style={styles.premiumTitle}>PeerSphere Plus</Text>
            <Text style={styles.premiumDescription}>
              Get the VIP treatment, and enjoy better ways to connect with
              incredible people!
            </Text>
            <Button
              style={styles.subscribeButton}
              textStyle={styles.subscribeButtonText}
              onPress={() => router.replace("/auth/signin")}
            >
              Subscribe Now!
            </Button>
          </View>
        </ScrollView>

        {/* Plans Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.row1, styles.headerText]}>What you get:</Text>
            <Text style={[styles.row2, styles.headerText]}>Free Tier</Text>
            <Text style={[styles.row3, styles.headerText]}>
              PeerSphere Plus
            </Text>
          </View>
          {PLANS.map((planItem) => (
            <View style={styles.tableItem} key={planItem.plan}>
              <Text style={[styles.row1, styles.planText]}>
                {planItem.plan}
              </Text>
              <Ionicons
                style={styles.row2}
                name={planItem.p1 ? "checkmark-circle" : "close-circle"}
                size={24}
                color={planItem.p1 ? "#4CAF50" : "#FF5252"}
              />
              <Ionicons
                style={styles.row3}
                name={planItem.p2 ? "checkmark-circle" : "close-circle"}
                size={24}
                color={planItem.p2 ? "#4CAF50" : "#FF5252"}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentWrapper: {
    padding: 16,
    gap: 20,
  },
  profileSection: {
    flexDirection: "row",
    gap: 16,
    paddingVertical: 10,
  },
  profileInfo: {
    flex: 1,
    gap: 8,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1c1c1c",
    marginBottom: 4,
  },
  infoButton: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingVertical: 8,
  },
  infoButtonText: {
    color: "#1c1c1c",
    fontSize: 14,
    fontWeight: "500",
  },
  cardContainer: {
    marginVertical: 10,
  },
  premiumCard: {
    backgroundColor: "#ffa600",
    width: "60%",
    borderRadius: 24,
    padding: 24,
    gap: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  premiumTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  premiumDescription: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 24,
  },
  subscribeButton: {
    backgroundColor: "#1c1c1c",
    borderRadius: 12,
    paddingVertical: 12,
  },
  subscribeButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  table: {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1c1c1c",
  },
  tableItem: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  planText: {
    fontSize: 14,
    color: "#333333",
  },
  row1: {
    width: "40%",
    paddingRight: 10,
  },
  row2: {
    width: "30%",
    textAlign: "center",
  },
  row3: {
    width: "30%",
    textAlign: "center",
  },
});

import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import Header from "@/components/Header";
import { EvilIcons, Octicons } from "@expo/vector-icons";
import {
  matchwithgoalData,
  RECOMMENDATION_USER,
  SuggestedUsers,
} from "@/DB/userDB";
import UserCard from "@/components/UserCard";
export default function Discover() {
  const button = () => <EvilIcons name="question" size={26} color="#1c1c1c" />;

  const SectionHeader = ({ title }: { title: string }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
  );

  const RecommendationSection = () => (
    <View style={styles.section}>
      <SectionHeader title="Recommendations for you" />
      <View style={styles.cardsContainer}>
        <FlatList
          horizontal
          data={RECOMMENDATION_USER}
          renderItem={({ item }) => (
            <UserCard showLikeIcon={true} size="large" data={item} />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.cardSeparator} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );

  const HobbiesSection = () => (
    <View style={styles.section}>
      <SectionHeader title="People with similar interests" />
      <View style={styles.cardsContainer}>
        <FlatList
          horizontal
          data={matchwithgoalData}
          renderItem={({ item }) => (
            <UserCard showLikeIcon={true} data={item} size="small" />
          )}
          keyExtractor={(item) => item?.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.cardSeparator} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );

  const CoursesSection = () => (
    <View style={[styles.section, styles.highlightedSection]}>
      <SectionHeader title="Studying similar courses" />
      <View style={styles.cardsContainer}>
        <FlatList
          horizontal
          data={SuggestedUsers}
          renderItem={({ item }) => (
            <UserCard showLikeIcon={true} data={item} size="small" />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.cardSeparator} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        <Header headerTitle="Discover" button={button} />
        <Text style={styles.subtitle}>
          Connect with people who match your vibe through common interests and
          courses. Refreshed daily for new connections.
        </Text>
        <RecommendationSection />
        <HobbiesSection />
        <CoursesSection />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  contentWrapper: {
    padding: 16,
    gap: 20,
  },
  subtitle: {
    fontSize: 15,
    color: "#666666",
    lineHeight: 22,
    marginBottom: 8,
  },
  section: {
    gap: 16,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  highlightedSection: {
    backgroundColor: "#f0f2f5",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1c1c1c",
    paddingHorizontal: 16,
  },
  cardsContainer: {
    width: "100%",
  },
  flatListContent: {
    paddingHorizontal: 16,
  },
  cardSeparator: {
    width: 12,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

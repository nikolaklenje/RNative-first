// HomeScreen.tsx
import React from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import { useAppContext } from "../../lib/context";
import { StyleSheet } from "react-native";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { name, setName, lastName, setLastName, homeTown, setHomeTown } =
    useAppContext();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
        value={name}
        style={styles.input}
      />
      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        placeholder="Enter your last name"
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        style={styles.input}
      />
      <Text style={styles.label}>Home Town:</Text>
      <TextInput
        placeholder="Enter your address"
        onChangeText={(text) => setHomeTown(text)}
        value={homeTown}
        style={styles.input}
      />

      <Button
        title="Submit"
        disabled={!name || !homeTown}
        onPress={() => navigation.navigate("Blog")}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    height: 40,
    width: 200,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginTop: 10,
  },
});

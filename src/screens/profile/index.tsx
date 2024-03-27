import { Button, ScrollView, Text } from "react-native";
import { useAppContext } from "../../lib/context";
import { StyleSheet } from "react-native";
const ProfileScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { name, lastName, homeTown } = useAppContext();
  return (
    <ScrollView>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text style={styles.profileText}>
        This is {name} {lastName}'s profile, from {homeTown}
      </Text>
      <Text style={styles.profileText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex est,
        dignissim mattis purus sed, laoreet tincidunt velit. Praesent fringilla
        tempus justo et posuere. Nulla maximus faucibus tellus, quis
        pellentesque lorem consequat et. Quisque eleifend magna ut sapien tempor
        fringilla. Proin in metus vel metus accumsan eleifend vitae in lorem.
        Morbi placerat id massa at dapibus. Suspendisse sapien neque, porttitor
        ut dictum id, ultricies id augue. Curabitur varius mollis nisl.
        Curabitur malesuada imperdiet rhoncus. Nulla ipsum ex, venenatis a
        volutpat sodales, dictum ac ipsum. Morbi tempor odio ut libero lobortis
        tempus. Proin felis sapien, imperdiet eu dui vel, gravida mollis lorem.
        Ut eleifend quam eu eleifend pharetra. Duis in bibendum eros, vel
        venenatis orci. Aenean volutpat risus sed lorem molestie gravida. Fusce
        justo eros, convallis non magna ut, pulvinar condimentum nibh. Proin
        tellus velit, ornare eu enim sed, mattis elementum sapien. Vestibulum
        elementum augue eget nunc pulvinar, quis consequat est porta. Vestibulum
        fringilla rutrum lorem, in pharetra nulla accumsan a.
      </Text>
      <Button title="Blog" onPress={() => navigation.navigate("Blog")} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </ScrollView>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  profileText: {
    fontSize: 18,
    marginVertical: 20,
    textAlign: "center",
  },
});

import { Button, ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";

const BlogScreen = ({ navigation }: { navigation: any; route: any }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Text style={styles.blogText}>
          BLOG TITLE Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          ex est, dignissim mattis purus sed, laoreet tincidunt velit. Praesent
          fringilla tempus justo et posuere. Nulla maximus faucibus tellus, quis
          pellentesque lorem consequat et. Quisque eleifend magna ut sapien
          tempor fringilla. Proin in metus vel metus accumsan eleifend vitae in
          lorem. Morbi placerat id massa at dapibus. Suspendisse sapien neque,
          porttitor ut dictum id, ultricies id augue. Curabitur varius mollis
          nisl. Curabitur malesuada imperdiet rhoncus. Nulla ipsum ex, venenatis
          a volutpat sodales, dictum ac ipsum. Morbi tempor odio ut libero
          lobortis tempus. Proin felis sapien, imperdiet eu dui vel, gravida
          mollis lorem. Ut eleifend quam eu eleifend pharetra. Duis in bibendum
          eros, vel venenatis orci. Aenean volutpat risus sed lorem molestie
          gravida. Fusce justo eros, convallis non magna ut, pulvinar
          condimentum nibh. Proin tellus velit, ornare eu enim sed, mattis
          elementum sapien. Vestibulum elementum augue eget nunc pulvinar, quis
          consequat est porta. Vestibulum fringilla rutrum lorem, in pharetra
          nulla accumsan a. Praesent elementum at leo at maximus. Maecenas
          venenatis, lacus id faucibus bibendum, leo ante blandit erat, sit amet
          finibus ipsum massa nec enim. Nam tellus nibh, semper ac risus at,
          venenatis vulputate sem. In ullamcorper vestibulum neque et tincidunt.
          Phasellus aliquet dui vel diam placerat pharetra. Suspendisse vitae
          nisi scelerisque, imperdiet lectus vitae, ultricies turpis. Sed
          interdum fringilla tellus non mattis. Proin eu urna eu sem cursus
          sagittis. Donec eget nunc vel justo interdum efficitur. Aenean
          malesuada auctor nisi, nec hendrerit mauris accumsan eget. Proin arcu
          sapien, tempus quis fringilla id, sollicitudin vitae diam. Nam
          suscipit eget neque et laoreet. Quisque et pellentesque turpis.
          Maecenas a nibh mi. Maecenas laoreet dolor eget augue efficitur
          ultricies. Cras consequat quam semper lorem fringilla, non dapibus
          enim blandit. efficitur turpis vitae consectetur lobortis.
        </Text>
        <Button
          title="Profile"
          onPress={() => navigation.navigate("Profile")}
        />
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <View style={{ marginBottom: 60 }}></View>
      </ScrollView>
    </View>
  );
};
export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollView: {
    padding: 20,
  },
  blogText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: "justify",
  },
});

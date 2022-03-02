import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../resources/theme";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();
  const refInput = useRef(null);

  useEffect(() => {
    refInput.current.focus();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.InputContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="md-arrow-back" style={{ fontSize: 25 }} />
          </TouchableOpacity>
          <View style={{ flex: 1, marginLeft: 20 }}>
            <TextInput
              ref={refInput}
              placeholder="Search"
              placeholderTextColor="#fff"
              style={styles.input}
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <View>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.placeTouchable}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  }}
                  style={styles.thumbnail}
                />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    Umiam Lake
                  </Text>
                  <Text>Meghalaya, India</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  InputContainer: {
    borderBottomColor: COLORS.foitiGreyLight,
    borderBottomWidth: 0.2,
    paddingVertical: 9,
    paddingHorizontal: 15,
  },
  input: {
    backgroundColor: "#878787",
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    color: "#fff",
  },
  placeTouchable: {
    paddingVertical: 7,
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

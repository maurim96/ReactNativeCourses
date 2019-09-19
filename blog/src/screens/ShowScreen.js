import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam("id");
    const { state } = useContext(BlogContext);
    const selectedBlog = state.find(blogPost => blogPost.id === id);

    return (
        <View>
            <Text>{selectedBlog.title}</Text>
            <Text>{selectedBlog.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity
                onPress={() => navigation.navigate("Edit", { id: navigation.getParam("id") })}
            >
                <EvilIcons size={35} name="pencil" />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({});

export default ShowScreen;

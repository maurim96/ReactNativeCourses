import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);

    useEffect(() => {
        getBlogPosts();

        // const listener = navigation.addListener("didFocus", () => {
        //     getBlogPosts();
        // });

        // return () => {
        //     listener.remove();
        // };
    }, []);

    return (
        <View>
            <FlatList
                data={state}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.id} - {item.title}
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.deleteIcon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={blogPost => blogPost.title}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather size={30} name="plus" />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    deleteIcon: {
        fontSize: 24,
        color: "red",
        width: 50
    }
});

export default IndexScreen;

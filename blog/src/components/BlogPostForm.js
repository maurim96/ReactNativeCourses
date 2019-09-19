import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title:</Text>
            <TextInput value={title} onChangeText={text => setTitle(text)} style={styles.input} />
            <Text style={styles.label}>Content:</Text>
            <TextInput value={content} onChangeText={text => setContent(text)} style={styles.input} />
            <Button
                title={"Save"}
                onPress={() => {
                    onSubmit(title, content);
                }}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: "",
        content: ""
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        fontSize: 18,
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;

import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import useResult from "../hooks/useResult";

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam("id");
    const [result, errorMessage] = useResult(id);
    if (!result) {
        return null;
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        color: "red"
    },
    image: {
        width: 200,
        height: 150
    }
});

export default ResultsShowScreen;

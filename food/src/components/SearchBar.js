import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Ionicons name="md-search" style={styles.iconStyle} />
            <TextInput
                placeholder="Search"
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#F0EEEE",
        borderRadius: 5,
        height: 50,
        flexDirection: "row",
        margin: 15
    },
    iconStyle: {
        fontSize: 45,
        alignSelf: "center",
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;

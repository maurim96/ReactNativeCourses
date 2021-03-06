import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByPrice = price => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList title="Cost Effective" results={filterResultsByPrice("$")} />
                <ResultList title="Bit Pricier" results={filterResultsByPrice("$$")} />
                <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        color: "red"
    }
});

export default SearchScreen;

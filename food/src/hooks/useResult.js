import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default id => {
    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const getResult = async id => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    };

    useEffect(() => {
        getResult(id);
    }, []);

    return [result, errorMessage];
};

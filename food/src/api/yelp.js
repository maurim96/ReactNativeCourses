import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer C971lvrU4nnZQRcuWYEJuzfEwKl2ExB-_wexujlfr9xG2kJYagcQAMG30WqpnMouSgVYAajchsxjYfsLfNuGWrL0UNeZ1WoR7aoh_JZJNJm2oRknTRU59N32fkNgXXYx"
    }
});

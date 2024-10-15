import axios from "axios";

export const fetchImages = async (searchValue, page) => {
    const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchValue}&page=${page}&per_page=9&client_id=s6jfX622w3hF_-I_MR6_iexP3o3sI2eRczGkavzfSi0`
    );
    return data;
}
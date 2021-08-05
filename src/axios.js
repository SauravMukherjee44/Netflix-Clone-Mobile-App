import axios from "axios";

const instances= axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instances;
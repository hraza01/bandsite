import { API_KEY } from "./auth.js";

async function makeRequest(
    route,
    request = "GET",
    data = null,
    headers = {
        "content-type": "application/json",
    }
) {
    try {
        const options = {
            method: request,
            url: `https://project-1-api.herokuapp.com/${route}`,
            params: { api_key: API_KEY },
            data: data,
            headers: headers,
        };
        const res = await axios(options);
        return res.data;
    } catch (err) {
        return err.message;
    }
}

export { makeRequest };

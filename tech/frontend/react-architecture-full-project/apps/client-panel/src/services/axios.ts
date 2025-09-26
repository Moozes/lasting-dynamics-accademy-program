import axios from "axios";

import { FirebaseAuth } from "@services/index";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URl}${import.meta.env.VITE_API_VERSION}`,
});

api.interceptors.request.use(async (config) => {
    try {
        // Get the current user from Firebase Authentication
        const user = FirebaseAuth.currentUser;
        // If a user is authenticated, add the Firebase ID token to the headers
        if (user) {
            const idToken = await user.getIdToken();
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${idToken}`;
        }
        return config;
    } catch (error) {
        return Promise.reject(error);
    }
});

export default api;

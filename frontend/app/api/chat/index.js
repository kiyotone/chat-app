import { authenticated } from "../config";

export const getChats = async () => {
    
    try {
        const response = await authenticated(api).get("api/chat/")
        return response;
    } catch (error) {
        return error.response;
    }
}

export const joinChat = async (data) => {
    data = JSON.stringify(data);
    try {
        const response = await authenticated(api).post("api/chat/join/", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response;
    } catch (error) {
        return error.response;
    }
}
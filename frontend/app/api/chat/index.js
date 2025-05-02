import { api } from "../config";


export const getChatHistory = async (group_name) => {
    try {
        const response = await api.get(`api/chat/previous_chats/?group_name=${group_name}`);
        return response;
    } catch (error) {
        return error.response;
    }
}
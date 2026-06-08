import axios from 'axios'

const API_URL = "https://pfpesegxmtwkgrkvkono.supabase.co/rest/v1/note"
const API_KEY = "sb_publishable_D8a7vHFE7ylKSQknDA_cVA_B_T4qEku"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
      async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}
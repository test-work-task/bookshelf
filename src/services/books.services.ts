import axios from 'axios';

export const getBooks = async () => {
    try {
        const response = await axios.get('https://example-data.draftbit.com/books?_limit=50')
        if (response.status === 200) {
            return response.data
        } else {
            console.log(response)
        }
    } catch (error) {
        console.error(error);
    }
}
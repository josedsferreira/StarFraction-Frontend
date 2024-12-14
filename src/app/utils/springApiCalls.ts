import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your actual API base URL
// HTTP NOT HTTPS!!

export async function getUser(email: string, password: string) {
	/* console.log("getUser called")
	console.log("email: ", email)
	console.log("password: ", password) */
	try {
		const response = await axios.post(`${API_BASE_URL}/auth/login`, {
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

		// Assuming the API returns the user object on successful login
		console.log('Login successful:', response.data);
		/* return response.data.user as User; */
		return response.data;
	} catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching user:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    }
}

export async function debugGetPlanets() {
	console.log("debugGetPlanets called")
	try {
		const response = await axios.get(`${API_BASE_URL}/planets`, {
			
		});

		console.log("Data Response: ", response.data)
  	} catch (error) {
		console.error('Error fetching planets debug:', error);
		return null;
	}
}
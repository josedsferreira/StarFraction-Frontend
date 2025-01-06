import axios from 'axios';
import { auth } from '../security/auth';
import { getUserFromSession, getUserIdFromSession } from './utilities';

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

export async function getPlanets() {
	const session = await auth()
 
    if (!session?.user) {
        console.log('No user session found')
        return null
    }

    const user = session.user;

    //console.log('User:', user)

    const token = user.token;
	console.log("getPlanets called")
	try {
		const response = await axios.get(`${API_BASE_URL}/planets`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});

		console.log("Data Response: ", response.data)
		return response.data;
  	} catch (error) {
		console.error('Error fetching planets debug:', error);
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

export async function getUserPlanets() {
	const user = await getUserFromSession();
	if (!user) {
		console.log('No user session found');
		return null;
	}
	else {
		const token = user.token;
		const userId = user.id;
		try {
			const response = await axios.get(`${API_BASE_URL}/users/userplanets/${userId}`, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});

			//console.log("Data Response: ", response.data)
			return response.data;
		} catch (error) {
			console.error('Error fetching planets debug:', error);
			return null;
		}
	}
}

export async function getUserPlanetsClient(token: string, userId: string) {
	try {
		const response = await axios.get(`${API_BASE_URL}/users/userplanets/${userId}`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		//console.log("Data Response: ", response.data)
		return response.data;
	} catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error message:', error.message);
            if (error.response) {
                console.error('Axios error response data:', error.response.data);
                console.error('Axios error response status:', error.response.status);
                console.error('Axios error response headers:', error.response.headers);
        } else {
            console.error('Unexpected error:', error);
        }
        return null;
    	}
	}
}
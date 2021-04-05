import axios from 'axios';
import { SignupInput } from '../components/Signup'
import { PaymentInput } from '../components/Payment'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {'Accept': 'application/json'}
});

const Api = {
  signup: async (data: SignupInput) => { 
    const response = await axiosInstance.post(`/signup`, data)
    if (response.data.token) {
      localStorage.setItem("token", JSON.stringify(response.data.token));
    }

    return response.data;
  },
  getPlans: async () => { 
    const token = JSON.parse(localStorage.getItem('token')||'');
    const headers = { Authorization: 'Bearer ' + token };
    const response = await axiosInstance.get(`/plans`, { headers })
    
    return response.data;
  },
  purchase: async (data: PaymentInput) => {
    const token = JSON.parse(localStorage.getItem('token')||'');
    const headers = { Authorization: 'Bearer ' + token };
    const response = await axiosInstance.post(`/purchase`, data, { headers })
    
    return response.data;
  }
}

export default Api;
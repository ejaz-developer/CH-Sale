import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';

const useUserStore = create((set, get) => ({
  userData: null,
  loading: false,
  error: null,
  setLoading: (loading) => set({ loading }),
  setUserData: (data) => set({ userData: data }),
  fetchUserData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get('/api/v1/users/profile');
      // Extract the actual user data from response.data.data
      const userData = response.data?.data || response.data;
      set({ userData: userData });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useUserStore;

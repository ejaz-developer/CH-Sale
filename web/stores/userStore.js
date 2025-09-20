import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';

const useUserStore = create((set, get) => ({
  userData: null,
  loading: false,
  error: null,
  setUser: (data) => set({ userData: data }),

  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get(`/api/v1/users/profile`);
      if (response.status === 200) {
        set({ userData: response.data, loading: false });
        return response.data;
      }
      console.log(response);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      set({ error: error.message, loading: false });
    }
  },

 

  clearError: () => set({ error: null }),
  setLoading: (status) => set({ loading: status }),
}));

export default useUserStore;

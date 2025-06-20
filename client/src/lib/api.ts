// API service for making requests to the backend
import { ContactFormData } from '@/types';

// Access the API URL from environment variables and ensure it doesn't end with a slash
const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

// For debugging
console.log('API URL:', API_URL);

/**
 * API client for making requests to the backend
 */
export const api = {
  /**
   * Submit contact form data
   * @param data Contact form data
   * @returns Promise with the response
   */
  async submitContactForm(data: ContactFormData) {
    try {
      // Construct URL carefully to avoid double slashes
      const url = `${API_URL}/api/contact`;
      console.log('Submitting to URL:', url);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      // Check if response is OK before parsing JSON
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', errorText);
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },
  
  /**
   * Get all contacts (admin only)
   * @returns Promise with the contacts data
   */
  async getContacts() {
    try {
      // Construct URL carefully
      const url = `${API_URL}/api/contacts`;
      console.log('Fetching from URL:', url);
      
      const response = await fetch(url);
      
      // Check if response is OK before parsing JSON
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', errorText);
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  }
};

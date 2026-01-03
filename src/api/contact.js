/***************************  CONTACT API UTILITY  ***************************/

/**
 * Submit contact form data to the server API endpoint.
 *
 * This utility function acts as a client-side wrapper for the contact form submission API.
 * It handles the fetch request, error parsing, and response validation.
 *
 * The actual form validation, email sending, and provider configuration happens on the server
 * in src/app/api/contact/route.js
 *
 * @async
 * @param {Object} formData - The contact form data to submit
 * @param {string} formData.name - Full name of the person submitting the form
 * @param {string} formData.email - Email address of the person submitting
 * @param {string} formData.phone - Phone number (with country code, e.g., '+31612345678')
 * @param {string} formData.subject - Subject of the inquiry
 * @param {string} formData.message - Message content
 * @param {string} [formData.company] - Optional company name
 * @param {string} [language='nl'] - Language code for server-side message localization (e.g., 'nl', 'en')
 *
 * @returns {Promise<Object>} Response from the server API
 * @returns {string} returns.message - Success message from server (e.g., "Thank you for your message!")
 *
 * @throws {Error} Throws error with message from server validation or network error
 *   - Validation errors (400): Missing required fields, invalid email format
 *   - Server errors (500): Failed to send email or server-side issues
 *   - Network errors: Failed to fetch (network unavailable, etc.)
 *
 * @example
 * ```jsx
 * try {
 *   const result = await submitContactForm({
 *     name: "John Doe",
 *     email: "john@example.com",
 *     phone: "+31612345678",
 *     subject: "Project Inquiry",
 *     message: "I'm interested in your services",
 *     company: "Acme Corp"
 *   }, 'nl');
 *   console.log(result.message); // "Bedankt voor je bericht!"
 * } catch (error) {
 *   console.error(error.message); // e.g., "Voer een geldig e-mailadres in"
 * }
 * ```
 */
export async function submitContactForm(formData, language = 'nl') {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': language
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    // Check if response is not ok (4xx, 5xx status codes)
    if (!response.ok) {
      throw new Error(data.error || 'Failed to send message');
    }

    return data;
  } catch (error) {
    // Re-throw error with consistent message format
    throw new Error(error.message || 'An error occurred while submitting the form');
  }
}

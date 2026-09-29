import ApiClient from './ApiClient.js';

/**
 * ContactApi
 * ------------------------------------------------------------------
 * The one method the Contact page needs: submit the inquiry form to
 * the backend's /contact endpoint. Kept separate from ApiClient so
 * each backend feature can grow its own dedicated API class without
 * bloating a shared file.
 * ------------------------------------------------------------------
 */
class ContactApi {
  constructor(client = new ApiClient()) {
    this.client = client;
  }

  async submitInquiry(formData) {
    return this.client.post('/contact', formData);
  }
}

export default ContactApi;

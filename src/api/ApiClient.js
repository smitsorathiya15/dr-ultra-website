import siteConfig from '../config/siteConfig.js';

/**
 * ApiClient
 * ------------------------------------------------------------------
 * Tiny fetch wrapper shared by every feature-specific API class
 * (currently just ContactApi). Centralising the base URL, headers,
 * and error normalisation here means feature API classes stay a few
 * lines long and never talk to `fetch` directly.
 * ------------------------------------------------------------------
 */
class ApiClient {
  constructor(baseUrl = siteConfig.apiBaseUrl) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
  }

  async post(path, body) {
    return this._request(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  async get(path) {
    return this._request(path, { method: 'GET' });
  }

  async _request(path, options) {
    const url = `${this.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;

    let response;
    try {
      response = await fetch(url, options);
    } catch (networkError) {
      throw new ApiClientError(
        'Could not reach the server. Please check your internet connection and try again.',
        0,
        null
      );
    }

    let data = null;
    try {
      data = await response.json();
    } catch (parseError) {
      // Non-JSON response body — leave data as null.
    }

    if (!response.ok) {
      const message = data?.message || `Request failed with status ${response.status}.`;
      throw new ApiClientError(message, response.status, data?.errors || null);
    }

    return data;
  }
}

/**
 * ApiClientError
 * ------------------------------------------------------------------
 * Normalised error shape so UI components can render field-level
 * validation messages (`errors`) or a general message consistently,
 * regardless of which endpoint failed.
 * ------------------------------------------------------------------
 */
export class ApiClientError extends Error {
  constructor(message, statusCode, errors) {
    super(message);
    this.name = 'ApiClientError';
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export default ApiClient;

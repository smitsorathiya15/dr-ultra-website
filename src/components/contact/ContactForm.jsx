import React from 'react';
import Button from '../common/Button.jsx';
import Alert from '../common/Alert.jsx';
import ContactApi from '../../api/ContactApi.js';
import { ApiClientError } from '../../api/ApiClient.js';

const INITIAL_STATE = {
  values: {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    company_website: '', // honeypot — real visitors never see or fill this in
  },
  fieldErrors: {},
  status: 'idle', // idle | submitting | success | error
  statusMessage: '',
};

/**
 * ContactForm
 * ------------------------------------------------------------------
 * The Contact / Inquiry form described in the project proposal:
 * fully controlled inputs, lightweight client-side validation for
 * fast feedback, and submission to the Node.js backend via
 * ContactApi. Server-side validation (express-validator) remains the
 * source of truth — this is a UX layer on top of it.
 * ------------------------------------------------------------------
 */
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE, values: { ...INITIAL_STATE.values } };
    this.contactApi = new ContactApi();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prev) => ({
      values: { ...prev.values, [name]: value },
      fieldErrors: { ...prev.fieldErrors, [name]: undefined },
    }));
  }

  validate() {
    const { values } = this.state;
    const errors = {};

    if (!values.name.trim() || values.name.trim().length < 2) {
      errors.name = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      errors.message = 'Please enter a message of at least 10 characters.';
    }

    return errors;
  }

  async handleSubmit(event) {
    event.preventDefault();

    const errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({ fieldErrors: errors });
      return;
    }

    this.setState({ status: 'submitting', statusMessage: '' });

    try {
      const response = await this.contactApi.submitInquiry(this.state.values);
      this.setState({
        ...INITIAL_STATE,
        values: { ...INITIAL_STATE.values },
        status: 'success',
        statusMessage: response?.message || 'Thank you! Your message has been sent.',
      });
    } catch (error) {
      if (error instanceof ApiClientError && error.errors) {
        const fieldErrors = {};
        error.errors.forEach((fieldError) => {
          fieldErrors[fieldError.field] = fieldError.message;
        });
        this.setState({ fieldErrors, status: 'error', statusMessage: error.message });
      } else {
        this.setState({
          status: 'error',
          statusMessage:
            error?.message || 'Something went wrong while sending your message. Please try again.',
        });
      }
    }
  }

  render() {
    const { values, fieldErrors, status, statusMessage } = this.state;
    const isSubmitting = status === 'submitting';

    return (
      <form className="contact-form" onSubmit={this.handleSubmit} noValidate>
        {status === 'success' && <Alert type="success">{statusMessage}</Alert>}
        {status === 'error' && <Alert type="error">{statusMessage}</Alert>}

        {/* Honeypot field — hidden from real visitors via CSS, bots often fill it in */}
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="company_website">Leave this field empty</label>
          <input
            type="text"
            id="company_website"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={values.company_website}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-field">
            <label className="form-label" htmlFor="name">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`form-control ${fieldErrors.name ? 'form-control--error' : ''}`}
              value={values.name}
              onChange={this.handleChange}
              placeholder="Your name"
              required
            />
            {fieldErrors.name && <p className="form-error">{fieldErrors.name}</p>}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-control ${fieldErrors.email ? 'form-control--error' : ''}`}
              value={values.email}
              onChange={this.handleChange}
              placeholder="you@company.com"
              required
            />
            {fieldErrors.email && <p className="form-error">{fieldErrors.email}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label className="form-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={`form-control ${fieldErrors.phone ? 'form-control--error' : ''}`}
              value={values.phone}
              onChange={this.handleChange}
              placeholder="+91 00000 00000"
            />
            {fieldErrors.phone && <p className="form-error">{fieldErrors.phone}</p>}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className={`form-control ${fieldErrors.subject ? 'form-control--error' : ''}`}
              value={values.subject}
              onChange={this.handleChange}
              placeholder="e.g. Quote for Ultra 650 — 20L jerricans"
            />
            {fieldErrors.subject && <p className="form-error">{fieldErrors.subject}</p>}
          </div>
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            className={`form-control ${fieldErrors.message ? 'form-control--error' : ''}`}
            value={values.message}
            onChange={this.handleChange}
            placeholder="Tell us about the grade, quantity, and application you need help with..."
            required
          />
          {fieldErrors.message && <p className="form-error">{fieldErrors.message}</p>}
        </div>

        <Button type="submit" variant="primary" block loading={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </Button>
      </form>
    );
  }
}

export default ContactForm;

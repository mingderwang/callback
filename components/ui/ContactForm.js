import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }
    // Handle form submission, e.g., send data to an API
    console.log('Form data:', formData);
    console.log('Captcha value:', captchaValue);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
      </div>
      <ReCAPTCHA
        sitekey="6LeiF1wqAAAAAEyB-AdeDH5JyTGfcA6yqHyPjjtf" // Replace with your actual site key
        onChange={handleCaptchaChange}
      />
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default ContactForm;

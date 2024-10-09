// pages/api/submit.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { captchaValue } = req.body;

    // Verify reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Store your Secret Key in an environment variable
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: captchaValue,
      }),
    });

    const data = await response.json();

    if (data.success) {
      // Handle successful form submission (e.g., save to database)
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, message: 'Invalid reCAPTCHA' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message, phone, subject, from_name } = req.body;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_API_KEY,
      name,
      email,
      message,
      phone,
      subject,
      from_name,
    }),
  });

  const result = await response.json();
  res.status(200).json(result);
}

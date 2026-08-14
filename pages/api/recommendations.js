// Add your own professional recommendations here when they are available.
export const recommendations = [];

export default function handler(req, res) {
  res.status(200).json(recommendations);
}

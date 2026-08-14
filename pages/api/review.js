// Add your own client reviews here when they are available.
export const reviews = [];

export default function handler(req, res) {
  res.status(200).json(reviews);
}

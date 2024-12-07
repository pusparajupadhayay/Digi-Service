// pages/api/users.js
import { fetchData } from '../../lib/api';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await fetchData('users');
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import data from '../../database/data.json'

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}


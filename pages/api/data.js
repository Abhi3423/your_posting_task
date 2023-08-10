import fs from 'fs';
import path from 'path';
import data from '../../database/data.json';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(data);
  } 
  else if (req.method === 'DELETE') {
    const index = req.query.index;
    if (index !== undefined && index >= 0 && index < data.length) {
      data.splice(index, 1);

      const dataFilePath = path.join(process.cwd(), 'database', 'data.json');
      fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

      res.status(200).json({ message: 'Item deleted successfully' });
    } else {
      res.status(400).json({ message: 'Invalid index provided' });
    }
  }
  else if (req.method === 'PUT') {
    const index = req.query.index;
    if (index !== undefined && index >= 0 && index < data.length) {
      const updatedItem = req.body;

      data[index] = updatedItem;

      const dataFilePath = path.join(process.cwd(), 'database', 'data.json');
      fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

      res.status(200).json({ message: 'Item updated successfully' });
    } else {
      res.status(400).json({ message: 'Invalid index provided' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

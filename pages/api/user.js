
export default (req, res) => {
    if (req.method === 'POST') {
      const { name, email } = req.body;
  
      
      if (name && email) {
        res.status(201).json({ message: 'User created', user: { name, email } });
      } else {
        res.status(400).json({ error: 'Name and email are required' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  };
  
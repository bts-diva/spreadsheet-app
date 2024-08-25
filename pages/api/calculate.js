
export default (req, res) => {
    const { a, b } = req.query;
  
    if (a && b) {
      const sum = parseFloat(a) + parseFloat(b);
      res.status(200).json({ sum });
    } else {
      res.status(400).json({ error: 'Parameters a and b are required' });
    }
  };
  
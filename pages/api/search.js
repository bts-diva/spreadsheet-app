
export default (req, res) => {
    const { query } = req.query;
  
    const data = [
      { id: 1, value: 'Apple' },
      { id: 2, value: 'Banana' },
      { id: 3, value: 'Cherry' },
    ];
  
    const results = data.filter(item =>
      item.value.toLowerCase().includes(query.toLowerCase())
    );
  
    res.status(200).json(results);
  };
  
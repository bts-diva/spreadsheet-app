
export default (req, res) => {
    const { id } = req.query;
  
   
    const users = {
      '1': { name: 'Alice', role: 'Admin' },
      '2': { name: 'Bob', role: 'Editor' },
    };
  
    const user = users[id];
  
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  };
  
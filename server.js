const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set("view engine", 'ejs');

app.get('/', (req, res) => { 
  res.render("htmlSeaShanty")
})

app.listen(3000, () => { 
  console.log('Server listening on port 3000, ready for an old-fashioned sea shanty.')
})

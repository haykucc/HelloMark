const express = require('express');
const app = express();
app.use(express.static('/dist/HelloMark'));
app.all('*', (req, res) => {
  res.status(200).sendFile('/dist/HelloMark/index.html');
});
app.listen(process.env.PORT || 8080);

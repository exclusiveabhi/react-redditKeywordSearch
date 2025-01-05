const express = require('express');
const cors = require('cors');
const redditRoutes = require('./routes/redditRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/reddit', redditRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

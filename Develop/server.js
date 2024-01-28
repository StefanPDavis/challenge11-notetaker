const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
});

import 'dotenv/config';
import app from './app.js';


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Access the server at http://localhost:${PORT}`);
});
import 'dotenv/config';
import app from './src/app.js';


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Access the server at http://localhost:${PORT}`);
});

export default app;
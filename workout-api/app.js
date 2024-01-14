import { app, port, setupApp, setupData, setupRoutes } from './utilities/setup.js';

setupApp();
setupRoutes();
await setupData();

app.get('/', (req, res) => {
    res.status(200).json({ success: 'app works' });
});

app.listen(3000, () => console.log(`App listen on Port: ${port}`));
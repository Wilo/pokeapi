import compression from "compression";
import express from "express";
//Local imports
import healthRoutes from './routes/health.routes.js';
import morgan from "morgan";
import typeRoutes from './routes/types.routes.js';

const app = express();

//Middlewares
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/api/health', healthRoutes);
app.use('/api/type/', typeRoutes);

export default app;
import cors from "cors";
import express from "express";

import { errorMiddleware } from "./middlewares/error";
import { agendamentoRouter } from "./routes/AgendamentoRouter";
import { medicoRouter } from "./routes/MedicoRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/agendamento", agendamentoRouter);
app.use("/medico", medicoRouter);

app.use(errorMiddleware);

export default app;

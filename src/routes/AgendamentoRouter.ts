import { Router } from "express";

import { AgendamentoController } from "@/controllers/AgendamentoController";

const agendamentoRouter = Router();

const agendamentoController = new AgendamentoController();

agendamentoRouter.get("/", (req, res, next) => {
  void agendamentoController.listar(req, res, next);
});

agendamentoRouter.post("/aprovar/:id", (req, res, next) => {
  void agendamentoController.aprovar(req, res, next);
});

agendamentoRouter.post("/reprovar/:id", (req, res, next) => {
  void agendamentoController.reprovar(req, res, next);
});

agendamentoRouter.post("/criar", (req, res, next) => {
  void agendamentoController.criar(req, res, next);
});

export { agendamentoRouter };

import { Router } from "express";

import { MedicoController } from "@/controllers/MedicoController";

const medicoRouter = Router();

const medicoController = new MedicoController();

medicoRouter.get("/:id/agendamento", (req, res, next) => {
  void medicoController.obterHorarios(req, res, next);
});

medicoRouter.post("/:id/agendamento", (req, res, next) => {
  void medicoController.criarHorario(req, res, next);
});

medicoRouter.delete("/:id/agendamento/:id_agendamento", (req, res, next) => {
  void medicoController.removerHorario(req, res, next);
});

export { medicoRouter };

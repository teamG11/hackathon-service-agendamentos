import { prisma } from "@/lib/prisma";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class MedicoController {
  async obterHorarios(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await prisma.horario.findMany({
        where: {
          medicoId: parseInt(req.params.id),
        },
      });

      return res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  async criarHorario(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const dados = req.body;

      const createBodySchema = z.object({
        dataHora: z.string().datetime(),
      });

      const bodyParsed = createBodySchema.parse(dados);

      const result = await prisma.horario.create({
        data: {
          medicoId: parseInt(req.params.id),
          dataHora: bodyParsed.dataHora,
        },
      });

      return res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }

  async removerHorario(
    req: Request<{ id: string; id_agendamento: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const result = await prisma.horario.delete({
        where: {
          id: parseInt(req.params.id_agendamento),
          medicoId: parseInt(req.params.id),
        },
      });

      return res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  }
}

export { MedicoController };

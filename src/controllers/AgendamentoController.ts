import { prisma } from "@/lib/prisma";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class AgendamentoController {
  async listar(req: Request, res: Response, n: NextFunction) {
    try {
      const result = await prisma.agendamento.findMany();
      return res.status(200).json({ data: result });
    } catch (error) {
      n(error);
    }
  }

  async criar(req: Request, res: Response, n: NextFunction) {
    try {
      const dados = req.body;

      const createBodySchema = z.object({
        horarioId: z.number(),
        pacienteId: z.number(),
      });

      const bodyParsed = createBodySchema.parse(dados);

      const result = await prisma.agendamento.create({
        data: {
          horarioId: bodyParsed.horarioId,
          pacienteId: bodyParsed.pacienteId,
          link: "",
          status: "Aguardando",
        },
      });

      return res.status(200).json({ data: result });
    } catch (error) {
      n(error);
    }
  }

  async aprovar(req: Request, res: Response, n: NextFunction) {
    try {
      const agendamento = await prisma.agendamento.findFirst({
        where: {
          id: parseInt(req.params.id),
        },
      });

      if (!agendamento) {
        return res.status(404).json({ message: "Agendamento não encontrado" });
      }

      const result = await prisma.agendamento.update({
        data: {
          status: "Aprovado",
          link: "http://meet.google.com/123-123-123",
        },
        where: { id: parseInt(req.params.id) },
      });

      return res.status(200).json({ data: result });
    } catch (error) {
      n(error);
    }
  }

  async reprovar(req: Request<{ id: string }>, res: Response, n: NextFunction) {
    try {
      const agendamento = await prisma.agendamento.findFirst({
        where: {
          id: parseInt(req.params.id),
        },
      });

      if (!agendamento) {
        return res.status(404).json({ message: "Agendamento não encontrado" });
      }

      const result = await prisma.agendamento.update({
        data: { status: "Reprovado" },
        where: { id: parseInt(req.params.id) },
      });

      return res.status(200).json({ data: result });
    } catch (error) {
      n(error);
    }
  }
}

export { AgendamentoController };

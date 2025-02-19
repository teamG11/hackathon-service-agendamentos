import { env } from "@/env";
import { ApiError } from "@/errors/ApiError";
import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export const errorMiddleware = (
  error: ZodError | ApiError | Error,
  _r: Request,
  response: Response,
  // eslint-disable-next-line
  _n: NextFunction
) => {
  if (error instanceof ZodError) {
    return response.status(400).json({
      message: "Validation error",
      issues: error.format(),
    });
  }

  if (error instanceof ApiError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  }

  return response.status(500).json({ message: "Internal server error." });
};

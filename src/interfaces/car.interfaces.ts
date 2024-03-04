import { carSchema, carCreateSchema, carReturnSchema, carUpdateSchema } from "../schemas";

import z from "zod";

type TCar = z.infer<typeof carSchema>;
type TCarCreate = z.infer<typeof carCreateSchema>;
type TCarReturn = z.infer<typeof carReturnSchema>;
type TCarUpdate = z.infer<typeof carUpdateSchema>;

export { TCar, TCarCreate, TCarReturn, TCarUpdate}
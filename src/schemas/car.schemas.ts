import z from "zod";

const carSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    description: z.string().min(1).optional().nullable(),
    brand: z.string().min(1),
    year: z.number().positive(),
    km: z.number().positive()
})

const carCreateSchema = carSchema.omit({id: true});

const carUpdateSchema = carCreateSchema.partial();

const carReturnSchema = carSchema;

export { carSchema, carCreateSchema, carUpdateSchema, carReturnSchema};
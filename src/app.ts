import { error } from "console";
import  fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";

export const app = fastify()

app.setErrorHandler((error, _, reply) =>{
    if(error instanceof ZodError) {
        return reply
            .status(400)
            .send({ message:'validation error', issues: error.format() })
    }

    if(env.NODE_ENV !== 'production') {
        console.error(error)
    } else {
        // TODO: Here we should log to an external tool like DataDog/NewRelic 
    }

    return reply.status(500).send({ message: 'Internal server error.' })
})
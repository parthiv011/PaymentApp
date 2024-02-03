const { z } = require('zod');

const signUpSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    firstName: z.string().min(3),
    lastName: z.string().min(3)
});

const logInSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6)
});

const updateUserSchema = z.object({
    password: z.string().min(6).optional(),
    firstName: z.string().min(3).optional(),
    lastName: z.string().min(3).optional()
})

module.exports = { signUpSchema, logInSchema, updateUserSchema };
import { z } from "zod";

export const validationContactSchema = (t) =>
    z.object({
        name: z
            .string()
            .trim()
            .min(3, t("contact.name.min"))
            .max(50, t("contact.name.max")),

        reason: z
            .string()
            .trim()
            .min(1, t("contact.reason.required")),

        email: z
            .string()
            .min(1, t("contact.email.required"))
            .email(t("contact.email.invalid")),

        countryCode: z.string(),

        phone: z
            .string()
            .min(1, t("contact.phone.required"))
            .regex(/^[0-9]{8,12}$/, t("contact.phone.invalid")),

        message: z
            .string()
            .trim()
            .min(10, t("contact.message.min"))
            .max(1000, t("contact.message.max")),
    });
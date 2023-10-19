import { z } from "zod";

const ContactForm = z.object({
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

type ContactForm = z.infer<typeof ContactForm>;

export const validateFormArgs = (
  email: string,
  subject: string,
  message: string
) => {
  return ContactForm.parse({ email, subject, message });
};

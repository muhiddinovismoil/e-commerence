import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});


// export const LoginSchema = z.object({
//   limit: z.string().email(),
//   page: z.string().min(6),
// });




// filter = {
//   author="a"
// }
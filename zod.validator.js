import { z } from "zod";

// creating a schema for strings
const mySchema = z.string();

// parsing
// mySchema.parse("tuna"); // => "tuna"
// mySchema.parse(12); // => throws ZodError

// "safe" parsing (doesn't throw error if validation fails)
console.log(mySchema.safeParse("tuna"));

// if (mySchema.safeParse(12).success) {

// }

const User = z.object({
  username: z.string(),
});

User.parse({ username: "Ludwig" });

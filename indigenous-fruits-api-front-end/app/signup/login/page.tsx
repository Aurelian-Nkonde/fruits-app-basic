"use client"

import {
  Button,
  Container,
  Divider,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import Navigation from "../../componenst/navigation";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { useState } from "react";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z
    .string({ message: "email is required" })
    .email("email must be valid email address"),
  password: z.string({ message: "password is required" }).min(5),
});

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      password: "",
      email: "",
    },
  });

  const submitform = (email: string, password: string) => {
    console.log(email, password);
    form.setValues({"email": "", password: ""})
  };

  return (
    <div>
      <Navigation />
      <Container size="xs" mt={60}>
        <Title ta="center" mb="lg">
          Login here..!
        </Title>
        <form
          onSubmit={form.onSubmit(() =>
            submitform(form.values.email, form.values.password)
          )}
        >
          <TextInput
            mb="lg"
            size="lg"
            label="Email"
            withAsterisk
            description="Your email address"
            placeholder="one@gmail.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            mb="lg"
            size="lg"
            label="Password"
            withAsterisk
            description="Your password"
            {...form.getInputProps("password")}
          />
          <Button fullWidth type="submit" size="lg">
            Login
          </Button>
        </form>
        <Divider my="md" />
        <Button
          onClick={() => router.push("/signup/register")}
          variant="outline"
          fullWidth
          type="submit"
          size="lg"
        >
          Register
        </Button>
      </Container>
    </div>
  );
}

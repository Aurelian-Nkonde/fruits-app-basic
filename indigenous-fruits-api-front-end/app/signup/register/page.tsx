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
  name: z.string({ message: "firstName is required" }).min(3).max(150),
  email: z
    .string({ message: "email is required" })
    .email("email must be valid email address"),
  password: z.string({ message: "password is required" }).min(5),
});

export default function Register() {
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
  });

  const submitform = (name: string, email: string, password: string) => {
    console.log(name, email, password);
  };

  return (
    <div>
      <Navigation />
      <Container size="xs" mt={60}>
        <Title ta="center" mb="lg">
          Register here..!
        </Title>
        <form
          onSubmit={form.onSubmit(() =>
            submitform(
              form.values.name,
              form.values.email,
              form.values.password
            )
          )}
        >
          <TextInput
            mb="lg"
            size="lg"
            label="Name"
            withAsterisk
            description="Your name"
            placeholder="John Doe"
            {...form.getInputProps("name")}
          />
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
            Register
          </Button>
        </form>
        <Divider my="md" />
        <Button
          onClick={() => router.push("/signup/login")}
          variant="outline"
          fullWidth
          type="submit"
          size="lg"
        >
          Login
        </Button>
      </Container>
    </div>
  );
}

"use client";

import {
  Box,
  Button,
  Card,
  Container,
  FileInput,
  Grid,
  Image,
  Modal,
  NativeSelect,
  NavLink,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import Navigation from "../componenst/navigation";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { useForm, zodResolver } from "@mantine/form";
import { string, z } from "zod";
import { useEffect, useState } from "react";
import { IFruit } from "../types/fruit";
import { apiRequest } from "../api";
import { HttpMethods } from "../constants/api_methods";
import { ApiRoutes } from "../constants/api_routes";
import {
  IconImageInPicture,
  IconPictureInPictureOn,
} from "@tabler/icons-react";

const schema = z.object({
  name: z
    .string({ message: "name is required" })
    .min(3, { message: "name must be longer than 3 characters" })
    .max(100)
    .trim(),
  description: z
    .string({ message: "description is required" })
    .min(3, { message: "description must be longer than 3 characters" })
    .max(200),
});

const data: IFruit[] = [];

export default function FruitsPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<File | null>(null);

  const [season, setSeason] = useState("");
  const [province, setProvince] = useState("");
  const [fruits, setFruits] = useState(data);
  const [total, setTotal] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    getFruits();
    getTotalFruitsAmount();
  }, []);

  const getTotalFruitsAmount = () => {
    apiRequest(HttpMethods.GET, ApiRoutes.FRUITS_ROUTES.TOTAL_FRUITS, {})
      .then((data) => {
        console.log(data);
        setTotal(data);
      })
      .catch((error) => console.log(error));
  };

  const getFruits = () => {
    apiRequest(HttpMethods.GET, ApiRoutes.FRUITS_ROUTES.FRUITS, {})
      .then((data) => {
        console.log(data);
        setFruits(data);
      })
      .catch((error) => console.error(data));
  };

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      name: "",
      description: "",
    },
  });

  const submitFruit = (name: string, description: string) => {
    if (!value) {
      return;
    }
    const formData = new FormData();
    formData.append("file", value);

    setLoading(true);
    apiRequest(HttpMethods.POST, ApiRoutes.FRUITS_ROUTES.FRUITS, {
      name: name,
      description: description,
      province: province,
      season: season,
    })
      .then((data) => {
        console.log("done", data);
        fetch(
          `${ApiRoutes.FRUITS_ROUTES.FRUIT}/image/${data.uniqueid}/update`,
          { method: "PUT", body: formData }
        )
          .then((data) => {
            console.log(data);
            setLoading(false);
            getFruits();
            getTotalFruitsAmount();
            close();
          })
          .catch((erro) => {
            console.log(erro);
          });
        console.log(data);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <>
      <Navigation />
      <Modal size="lg" opened={opened} onClose={close}>
        {/* Modal content */}
        <Container py={20} px={20}>
          <Title size={20} mb={12} style={{ textAlign: "center" }}>
            Create a fruit!
          </Title>
          <form
            onSubmit={form.onSubmit(() =>
              submitFruit(form.values.name, form.values.description)
            )}
          >
            <TextInput
              mb="md"
              size="md"
              label="Fruit Name"
              withAsterisk
              placeholder="Mango"
              {...form.getInputProps("name")}
            />
            <NativeSelect
              mb="md"
              size="lg"
              label="Fruit Season"
              withAsterisk
              value={season}
              onChange={(event) => setSeason(event.currentTarget.value)}
              data={["winter", "summer", "spring", "autumn"]}
            />
            <NativeSelect
              mb="md"
              size="lg"
              label="Fruit Areas"
              withAsterisk
              value={province}
              onChange={(event) => setProvince(event.currentTarget.value)}
              data={[
                "mashonaland-west",
                "manicaland",
                "mashonaland-east",
                "matebeleland-north",
                "matebeleland-south",
                "masvingo",
                "bulawayo",
                "harare",
                "mashonaland-central",
                "midlands",
              ]}
            />
            <FileInput
              size="lg"
              leftSection={<IconPictureInPictureOn />}
              label="Attach an image"
              placeholder="The Image"
              clearable
              accept="image/png,image/jpeg"
              value={value}
              onChange={setValue}
            />
            <Textarea
              size="md"
              mb={18}
              label="Benefits"
              withAsterisk
              placeholder="health etc"
              {...form.getInputProps("description")}
            />
            <Button
              disabled={!value}
              loading={loading}
              size="lg"
              type="submit"
              fullWidth
            >
              Submit fruit
            </Button>
          </form>
        </Container>
      </Modal>
      <Container size="xl" my="xl" py={50}>
        <Title>Our delicious indigenous fruits..</Title>
        <div
          className=""
          style={{
            marginBottom: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>
            {total} {total > 1 ? "fruits available" : "fruit available"}
          </Text>
          <div className="">
            <Button onClick={open}>Create fruit!</Button>
          </div>
        </div>

        {fruits.length === 0 ? (
          <Title>Ooops, we don't have any fruits in the dataase!</Title>
        ) : (
          <Grid gutter={10}>
            {fruits.map((fruit) => (
              <Grid.Col span={4} key={fruit.uniqueid}>
                <Card shadow="md" radius="md">
                  <Image src="/images/fru_04.png" radius={10}></Image>
                  <Title py="md" size={24}>
                    {fruit.name}
                  </Title>
                  <div className="">
                    <Button
                      onClick={() => router.push(`fruits/${fruit.uniqueid}`)}
                      variant="outline"
                    >
                      More details
                    </Button>
                  </div>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}

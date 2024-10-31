"use client";

import {
  Button,
  Container,
  Title,
  Text,
  Image,
  Skeleton,
  Modal,
  Group,
  TextInput,
  NativeSelect,
  Textarea,
} from "@mantine/core";
import { useParams, useRouter } from "next/navigation";
import Navigation from "../../componenst/navigation";
import { useEffect, useState } from "react";
import { IFruit } from "../../types/fruit";
import { apiRequest } from "../../api";
import { HttpMethods } from "../../constants/api_methods";
import { ApiRoutes } from "../../constants/api_routes";
import { IconDetails, IconTrash } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

export default function singleFruit() {
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [season, setSeason] = useState("");
  const [province, setProvince] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [fruit, setfruit] = useState<IFruit>();
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const id = params.id;

  useEffect(() => {
    getFruitDetails();
  }, []);

  const getFruitDetails = () => {
    apiRequest(HttpMethods.GET, `${ApiRoutes.FRUITS_ROUTES.FRUIT}/${id}`)
      .then((data) => {
        console.log(data);
        setfruit(data);
        setProvince(data?.province);
        setSeason(data?.season);
        setDescription(data?.description);
        setName(data?.name);
      })
      .catch((error) => console.error(error));
  };

  const deleteFruit = (id: string) => {
    apiRequest(HttpMethods.DELETE, `${ApiRoutes.FRUITS_ROUTES.FRUIT}/${id}`)
      .then((data) => {
        setDeleteModal(false);
        console.log(data);
        router.push("/fruits");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buttonDisabled = (): boolean => {
    if (name === "" || province === "" || description === "" || season === "") {
      return true;
    } else {
      return false;
    }
  };

  const updateFruit = (event: any) => {
    event.preventDefault();
    console.log("update " + name, description, season, province);
    setLoading(true);
    apiRequest(HttpMethods.PUT, `${ApiRoutes.FRUITS_ROUTES.FRUIT}/${id}`, {
      name: name,
      description: description,
      province: province,
      season: season,
    })
      .then((data) => {
        setLoading(false);
        console.log(data);
        getFruitDetails();
        setUpdateModal(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <div>
      <Navigation />
      <Modal opened={deleteModal} onClose={() => setDeleteModal(false)}>
        <Title
          fw={500}
          size={22}
          style={{ textAlign: "center" }}
          c="red"
          pb={10}
        >
          Are you sure you want to delete?
        </Title>
        <Group justify="center">
          <Button onClick={() => deleteFruit(id)}>Confirm</Button>
          <Button onClick={() => setDeleteModal(false)} variant="outline">
            Cancel
          </Button>
        </Group>
      </Modal>
      <Modal
        size="lg"
        opened={updateModal}
        onClose={() => setUpdateModal(false)}
      >
        <Container py={20} px={20}>
          <Title size={20} mb={12} style={{ textAlign: "center" }}>
            Update a fruit!
          </Title>
          <form onSubmit={(e) => updateFruit(event)}>
            <TextInput
              mb="md"
              size="md"
              label="Fruit Name"
              withAsterisk
              placeholder="Mango"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // {...form.getInputProps("name")}
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
            <Textarea
              size="md"
              mb={18}
              label="Description"
              withAsterisk
              placeholder="health etc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              // {...form.getInputProps("description")}
            />
            <Button
              disabled={buttonDisabled()}
              loading={loading}
              size="lg"
              type="submit"
              fullWidth
            >
              Update fruit
            </Button>
          </form>
        </Container>
      </Modal>
      <Container size="xl" my="xl">
        {!fruit ? (
          <>
            <Skeleton height={40} width={320} mb={10} />
            <div
              className=""
              style={{
                marginBottom: "40px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Skeleton height={40} width={90} />
              <Skeleton height={30} width={90} />
            </div>
            <Skeleton height={400} width={700} mb={18} radius="md" />

            <Skeleton height={20} mb={6} width={210} />
            <Skeleton height={20} mb={6} width={210} />
            <Skeleton height={20} mb={6} width={120} />
          </>
        ) : (
          <>
            <Title>{fruit.name || "loading..."} fruit details</Title>
            <div
              className=""
              style={{
                marginBottom: "40px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div className="">
                <Button
                  onClick={() => router.push("/fruits")}
                  variant="outline"
                >
                  Return to fruits
                </Button>
              </div>
              <div className="">
                <Button
                  onClick={() => setUpdateModal(true)}
                  leftSection={<IconDetails />}
                  variant="subtle"
                >
                  Update fruit!
                </Button>
              </div>
              <div className="">
                <Button
                  onClick={() => setDeleteModal(true)}
                  c="red"
                  leftSection={<IconTrash color="red" />}
                  variant="subtle"
                >
                  Delete fruit!
                </Button>
              </div>
            </div>

            <div className="" style={{ maxWidth: "800px" }}>
              <Image src="/images/fru_04.png" h={400} radius={10}></Image>
              <Text size="lg" mt={20} pb="md">
                Name: {fruit.name}
              </Text>
              <Text size="lg" pb="sm">
                Area: {fruit.province} province
              </Text>
              <Text size="lg" pb="sm">
                Season: {fruit.season}
              </Text>
              <Text size="lg" pb="sm">
                Benefits: {fruit.description}
              </Text>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

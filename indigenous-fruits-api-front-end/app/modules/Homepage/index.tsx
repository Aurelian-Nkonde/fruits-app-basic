"use client";

import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Image,
  Flex,
} from "@mantine/core";
// import Image from "next/image";
import classes from "../../../css/homepage.module.css";
import Footer from "../../componenst/footer";

export default function HomepageModule() {
  return (
    <div>
      <Container size="xl" my={40}>
        <div className="">
          <Grid>
            <Grid.Col
              pr={90}
              span={6}
              style={{
                height: "600px",
                // backgroundColor: "red",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Title size={50} mb="lg">
                The fruits indigenous...
              </Title>
              <Text size="lg" mb="lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                nostrum neque deleniti Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet.
              </Text>
              <div className="">
                <Button size="xl">View Fruits..</Button>
              </div>
            </Grid.Col>
            <Grid.Col
              span={6}
              style={{
                height: "600px",
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Image
                src="/images/cover1.jpg"
                height={600}
                width="auto"
                alt=""
              />
            </Grid.Col>
          </Grid>
        </div>
      </Container>

      <div className="" style={{ backgroundColor: "#F5F5F5" }}>
        <Container py={100} size="xl">
          <Title mb={50} style={{ textAlign: "center" }}>
            About the{" "}
            <span style={{ textDecoration: "underline" }}>INDIGENOUS</span>{" "}
            fruits App..
          </Title>
          <Grid>
            <Grid.Col span={4}>
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/logo1.png"
                  radius={10}
                  alt=""
                  h={60}
                  w="auto"
                  fit="contain"
                />
              </div>
              <Title mt={12} style={{ textAlign: "center" }}>
                Lorem, ipsum dolor.
              </Title>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet exercitationem eos aut velit? Molestias pariatur
                provident earum dolorem quasi, molestiae tenetur corporis!
              </p>
            </Grid.Col>
            <Grid.Col span={4}>
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/logo2.png"
                  radius={10}
                  alt=""
                  h={60}
                  w="auto"
                  fit="contain"
                />
              </div>
              <Title mt={12} style={{ textAlign: "center" }}>
                Lorem, ipsum dolor.
              </Title>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Evenitionem eos aut velit? Molestias pariatur provident earum
                dolorem quasi, molestiae tenetur corporis!
              </p>
            </Grid.Col>
            <Grid.Col span={4}>
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/logo3.png"
                  radius={10}
                  alt=""
                  h={60}
                  w="auto"
                  fit="contain"
                />
              </div>
              <Title mt={12} style={{ textAlign: "center" }}>
                Lorem, ipsum dolor.
              </Title>
              <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet exercitationem eopariatur provident earum dolorem quasi,
                molestiae tenetur corporis!
              </p>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      <Container py={60} size="xl">
        <div
          className=""
          style={{ display: "flex", alignItems: "center", gap: 20 }}
        >
          <Image
            src="/images/fru_01.jpg"
            radius={10}
            alt=""
            h={400}
            w="auto"
            fit="contain"
          ></Image>
          <div className="">
            <Title size={28} pb="xl">
              Benefits of fruits..
            </Title>
            <Text size="lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque voluptas in illo expedita id! Repellendus distinctio
              nihil blanditiis nemo suscipit quis repellat sed possimus ullam
              cum perferendis quisquam facilis iure velit quidem tempora eius
              dignissimos doloremque soluta hic dolore, est aliquid quaerat.
              Modi a fuga harum quibusdam iusto amet sequi similique. Pariatur
              minima nisi beatae. Obcaecati ipsum similique vel saepe.
            </Text>
          </div>
        </div>
      </Container>

      <div className={classes.banner}>
        <Title c="white" mb={12} size={40} style={{textAlign: "center"}}>
          Lorem ipsum dolor sit amet, consectetur.
        </Title>
        <div className="">
          <Button size="lg" c="white">
            View fruits
          </Button>
        </div>
      </div>

      <Container py={60} size="xl">
        <div
          className=""
          style={{ display: "flex", alignItems: "center", gap: 20 }}
        >
          <div className="">
            <Title size={28} pb="xl">
              Why using our site to learn about these indigenous fruits?
            </Title>
            <Text size="lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque voluptas in illo expedita id! Repellendus distinctio
              nihil blanditiis nemo suscipit quis repellat sed possimus ullam
              cum perferendis quisquam facilis iure velit quidem tempora eius
              dignissimos doloremque soluta hic dolore, est aliquid quaerat.
              Modi a fuga harum quibusdam iusto amet sequi similique. Pariatur
              minima nisi beatae. Obcaecati ipsum similique vel saepe. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              quisquam blanditiis eum?
            </Text>
          </div>
          <Image
            src="/images/fru_04.png"
            radius={10}
            alt=""
            h={400}
            w="auto"
            fit="contain"
          ></Image>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

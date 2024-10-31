import { Container, Divider, Text, Title } from "@mantine/core";
import Link from "next/link";
import classes from "../../css/navigation.module.css";

export default function Footer() {
  return (
    <div className="" style={{ backgroundColor: "black" }}>
      <Container size="xl" py={50} px={10}>
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="" style={{ color: "white" }}>
            <Title fw="bold" pb="md">
              Indigenous_fruits_app
            </Title>
            <Text maw={300}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              recusandae voluptatum voluptatem praesentium? Mollitia, eaque
              dicta cum laudantium iusto fuga?
            </Text>
          </div>
          <div
            className=""
            style={{ display: "flex", flexDirection: "column", color: "white" }}
          >
            <Title mb="lg" size={24}>
              Website Links!
            </Title>
            <Link className={classes.footerLinks} href="#">
              HomePage
            </Link>
            <Link className={classes.footerLinks} href="#">
              FruitsPage
            </Link>
            <Link className={classes.footerLinks} href="#">
              AboutPage
            </Link>
          </div>
        </div>
        <Divider my="lg" />
        <Text c="white" style={{ textAlign: "center" }}>
          Made by <Link href="#">Aconte</Link> with passion!
        </Text>
        <Text c="white" style={{ textAlign: "center" }}>
          @2024
        </Text>
      </Container>
    </div>
  );
}

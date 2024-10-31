import { Button, Container, Flex, Title } from "@mantine/core";
import classes from "../../css/navigation.module.css";

export default function Navigation() {
  return (
    <div>
      <Container py={26} px={30} size="xl">
        <Flex align="center" justify="space-between">
          <Title>Indigenous_fruits..</Title>
          <Flex align="center" gap={50}>
            <a className={classes.link} href="/">
              Homepage
            </a>
            <a className={classes.link} href="/fruits">
              Fruitspage
            </a>
            <a className={classes.link} href="#">
              Aboutpage
            </a>
            <Button variant="outline">Signup</Button>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

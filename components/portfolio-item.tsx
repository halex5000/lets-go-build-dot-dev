import { Card, Collapse, Container } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Portfolio({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return (
    <Card css={{ height: 200 }}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>{description}</Card.Body>
      <Card.Footer>{url}</Card.Footer>
    </Card>
  );
}

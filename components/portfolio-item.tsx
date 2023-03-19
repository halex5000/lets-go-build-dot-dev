import { Card } from "@nextui-org/react";

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
    <Card css={{ height: 200, width: 400 }}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>{description}</Card.Body>
      <Card.Footer>{url}</Card.Footer>
    </Card>
  );
}

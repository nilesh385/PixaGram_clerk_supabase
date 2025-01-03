import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type Props = {
  title: string;
  description: string;
};
export default function ServicesCard({ title, description }: Props) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="w-72">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

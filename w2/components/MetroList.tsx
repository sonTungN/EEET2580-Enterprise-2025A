import { fetchAllMetroLines } from "@/utils/actions";
import { Card, CardContent } from "./ui/card";

export type Line = {
  id: number;
  name: string;
  stations: string[];
  durationInMins: number;
};

export default async function MetroList() {
  const metroLines: Line[] = await fetchAllMetroLines();

  return (
    <div>
      {metroLines.map((line) => {
        const { stations } = line;
        const title =
          stations.at(0) + " to " + stations.at(stations.length - 1);

        return (
          <article className="group" key={line.id}>
            <Card className="mb-4 transform group-hover:shadow-xl transition-shadow duration-100">
              <CardContent>
                <h4 className="text-lg font-bold">
                  {line.name} - {title}
                </h4>

                <ul>
                  {stations.map((item, index) => (
                    <li key={index}>
                      {index + 1}. {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </article>
        );
      })}
    </div>
  );
}

import { VictoryPie, VictoryLegend } from "victory";

import { projectsDoneTasks } from "../../data/mocks/tasks";

const data = projectsDoneTasks.map((project) => ({
  x: project.name,
  y: project.tasksCompleted,
}));

const labels = projectsDoneTasks.map((project) => {
  return {
    name: project.name,
  };
});

export const colors = projectsDoneTasks.map((project) => {
  return project.color;
});

export default function ProductivityChart() {
  return (
    <div className="flex flex-col h-64">
      <VictoryPie
        data={data}
        colorScale={colors}
        animate={{
          duration: 2000,
        }}
        style={{
          labels: {
            display: "none",
          },
        }}
        height={250}
      />
      <VictoryLegend
        x={125}
        y={1}
        orientation="horizontal"
        colorScale={["#4D7AE9", "#FF8A00", "#FF007A"]}
        data={labels}
      />
    </div>
  );
}

import { useParams } from "react-router-dom";
import { H3Class, subtitle } from "../../styles/headers";
import { projectsDoneTasks } from "../../data/mocks/tasks";

export default function Board() {
  const { id } = useParams();

  const request = projectsDoneTasks.filter((task) => task.id === parseInt(id));

  const mock = [
    {
      status: "To Do",
      tasks: [
        {
          name: "Aula de Introdução a Javascript part. 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
        },
        {
          name: "Aula de Introdução a Javascript part. 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
        },
      ],
    },
    {
      status: "In Progress",
      tasks: [
        {
          name: "Aula de Introdução a Javascript part. 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
        },
      ],
    },
    {
      status: "Blocked",
      tasks: [
        {
          name: "Aula de Introdução a Javascript part. 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
        },
        {
          name: "Aula de Introdução a Javascript part. 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
        },
      ],
    },
    {
      status: "Done",
      tasks: [
        {
          name: "Aula de Introdução a Javascript part. 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
        },
        {
          name: "Aula de Introdução a Javascript part. 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit!",
        },
      ],
    },
  ];

  return (
    <div className="p-4 sm:ml-64">
      <h3 className={H3Class}>{request[0].name}</h3>
      <h4 className={subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit!
      </h4>

      <div className="bg-board-gray my-4 h-screen rounded-2xl p-5">
        <div className="flex">
          {mock.map((item) => (
            <div className="my-4 grid-cols-4 items-stretch w-full ">
              <span
                className={`text-white-100 ${request[0].colorTag} py-1 px-5 rounded-2xl opacity-`}
              >
                {item.status}
              </span>

              <div>
                {item.tasks.map((task) => (
                  <div
                    className="
                    my-4 
                    mx-1 
                    p-4 
                    py-3 
                    bg-white-100 
                    rounded-2xl 
                    border-solid 
                    border-1 
                    border-slate-200"
                  >
                    <span className="font-medium">{task.name}</span>
                    <div className="py-2 text-sm">{task.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

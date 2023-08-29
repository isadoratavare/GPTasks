import React, { useState } from "react";
import { H3Class, H4Class } from "../../styles/headers";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { CREATE_BOARD } from "../../data/mutation/board";
import { useMutation } from "@apollo/client";
import { useUser } from "../../hooks/useUser";
import Loading from "../../components/Loading";
import { GET_BOARDS } from "../../data/queries/board";
import { useNavigate } from "react-router-dom";

export default function CreateBoard() {
  const [projectName, setProjectName] = useState("");
  const [duration, setDuration] = useState("");
  const [durationUnit, setDurationUnit] = useState("default");
  const [participants, setParticipants] = useState(1);
  const [objective, setObjective] = useState("");

  const [createBoardFunction, { loading, error }] = useMutation(CREATE_BOARD);

  const { emailUser } = useUser();

  const navigate = useNavigate();

  const handleCreateProject = async (e) => {
    e.preventDefault();
    if (projectName === "") {
      alert("Project name is required");
      return;
    }
    if (duration === "" || duration < 0 || duration.includes("." || ",")) {
      alert("Duration is invalid");
      return;
    }
    if (
      durationUnit === "default" ||
      durationUnit < 0 ||
      durationUnit.includes("." || ",")
    ) {
      alert("Period is invalid");
      return;
    }
    if (participants === "") {
      alert("Participants is required");
      return;
    }
    if (objective === "") {
      alert("Objective is required");
      return;
    }

    await createBoardFunction({
      variables: {
        input: {
          projectName,
          duration: `${duration} ${durationUnit}`,
          daysForWork: 5.0,
          people: parseFloat(participants),
          description: objective,
          owner: emailUser || localStorage.getItem("email"),
        },
      },
      refetchQueries: [
        {
          query: GET_BOARDS,
          variables: { owner: emailUser || localStorage.getItem("email") },
        },
      ],
    })
      .then((res) => {
        navigate(`/board/${res?.data?.createBoard?.id}`);
        alert("Project created successfully");
      })
      .catch((err) => {
        alert(err);
      });
  };

  if (loading)
    return (
      <div className="py-7 sm:ml-64 px-8 h-screen flex flex-col justify-center items-center">
        <div className="py-5">
          <h4 className={H4Class}> The board is being created... </h4>
        </div>
        <Loading />
      </div>
    );

  return (
    <div className="py-7 sm:ml-64 px-8">
      <div className="grid justify-items-stretch ">
        <div className="py-7 sm:ml-64 px-8 max-w-3xl">
          <div className="pb-5">
            <h3 className={H3Class}>Generate a new project</h3>

            <form className="space-y-4 md:space-y-8">
              <div>
                <div className="my-2">
                  <label htmlFor="projectName">Project Name *</label>
                </div>
                <Input
                  type="text"
                  id="projectName"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Ex: Studies"
                  required
                />
              </div>
              <div className="flex flex-column justify-between">
                <div className="input-container">
                  <div className="my-1">
                    <label htmlFor="duration">
                      How long will the project last? *
                    </label>
                  </div>
                  <div className="flex flex-row">
                    <Input
                      type="number"
                      id="duration"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder="Enter duration"
                      style={{ width: "134px", marginRight: "5px" }}
                      min="1"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="durationUnit">Choose the period *</label>
                  <select
                    id="durationUnit"
                    value={durationUnit}
                    onChange={(e) => setDurationUnit(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg bg-slate-100 border-solid border-1 border-slate-300 p-2.5 my-2"
                  >
                    <option value="default" disabled>
                      Choose the period
                    </option>
                    <option value="dias">days</option>
                    <option value="semanas">weeks</option>
                    <option value="anos">years</option>
                  </select>
                </div>

                <div className="input-container">
                  <div className="my-1">
                    <label htmlFor="participants">
                      How many people will participate? *
                    </label>
                  </div>
                  <Input
                    type="number"
                    id="participants"
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                    style={{ width: "150px" }}
                    min="1"
                  />
                </div>
              </div>

              <div>
                <div className="my-2">
                  <label htmlFor="objective">
                    What is the main objective of the project? *
                  </label>
                </div>
                <Input
                  type="textarea"
                  id="objective"
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  placeholder="Enter project objective"
                />
              </div>
            </form>
            <div className="flex  py-4">
              <Button title="Create Project" onPress={handleCreateProject} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { H3Class, subtitle } from "../../styles/headers";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

export default function CreateBoard() {
  const [projectName, setProjectName] = useState("");
  const [duration, setDuration] = useState("");
  const [durationUnit, setDurationUnit] = useState("default");
  const [participants, setParticipants] = useState(1);
  const [objective, setObjective] = useState("");

  const handleCreateProject = () => {
    console.log('Projeto criado com sucesso:', {
      projectName,
      duration,
      durationUnit,
      participants,
      objective,
    });
  };

  return (
    <div className="py-7 sm:ml-64 px-8">
      <div className="pb-5">
        <h3 className={H3Class}>Generate a new project</h3>

        <form className="space-y-4 md:space-y-8">
          <div>
            <label htmlFor="projectName">Project Name *</label>
            <Input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Ex: Studies"
            />
          </div>
          <div className="flex flex-column"> {/* Use flex-column class to stack elements vertically */}
            <div className="input-container">
              <label htmlFor="duration">How long will the project last? *</label>
              <div className="flex flex-row"> {/* Use flex flex-row class to display the elements side by side */}
                <Input
                  type="number"
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="Enter duration"
                  style={{ width: "134px", marginRight: "5px" }}
                />
                <select
                  id="durationUnit"
                  value={durationUnit}
                  onChange={(e) => setDurationUnit(e.target.value)}
                  style={{ width: "150px" }}
                >
                  <option value="default" disabled>Choose the period</option>
                  <option value="dias">days</option>
                  <option value="semanas">weeks</option>
                  <option value="anos">years</option>
                </select>
              </div>
            </div>

            <div className="input-container">
              <label htmlFor="participants">How many people will participate? *</label>
              <Input
                type="number"
                id="participants"
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
                style={{ width: "150px" }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="objective">What is the main objective of the project? *</label>
            <Input
              type="text"
              id="objective"
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              placeholder="Enter project objective"
            />
          </div>
          <Button title="Create Project" onClick={handleCreateProject} />
        </form>
      </div>
    </div>
  );
}

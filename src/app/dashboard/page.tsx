"use client";
import { Segmented } from "antd";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Diagram } from "react-easy-diagram";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Position,
} from "reactflow";

import "reactflow/dist/style.css";

const onInit = (reactFlowInstance: any) =>
  console.log("flow loaded:", reactFlowInstance);

const Dashboard = () => {
  const [edgeType, setEdgeType] = useState<string>("default");
  const [progress, setProgress] = useState<number>(0);

  const initialNodes:any = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Parent Node",
      },
      position: { x: 250, y: 0 },
    },
    {
      id: "2",
      data: {
        label: "Child of Parent 1",
      },
      position: { x: 100, y: 100 },
      sourcePosition: Position.Left,
      targetPosition: Position.Left,
    },
    {
      id: "3",
      // type: "output",
      data: {
        label: "Child of Parent 2",
      },
      position: { x: 400, y: 100 },
      sourcePosition: Position.Left,
      targetPosition: Position.Left,
    },
    {
      id: "4",
      // type: "output",
      data: {
        label: "Child of Node 1-1",
      },
      position: { x: 75, y: 200 },
      sourcePosition: Position.Left,
      targetPosition: Position.Left,
    },
    {
      id: "5",
      // type: "output",
      data: {
        label: "Child of Node 1-2",
      },
      position: { x: 50, y: 250 },
      sourcePosition: Position.Left,
      targetPosition: Position.Left,
    },
  ];

  const initialEdges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      label: "5 sec",
      animated: true,
      type: edgeType,
    },
    { id: "e1-3", source: "1", target: "3", type: edgeType },
    {
      id: "e2-4",
      source: "2",
      target: "4",
      label: "10 sec",
      type: edgeType,
    },
    {
      id: "e2-5",
      source: "2",
      target: "5",
      label: "2 sec",
      type: edgeType,
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge: any) => {
    // if (edge.sourceHandle) {
    //   const edgeType = nodes.find((node: any) => node.type === "custom").data
    //     .selects[edge.sourceHandle];
    //   edge.type = edgeType;
    // }

    return edge;
  });

  const fetchAPI = async (e: any) => {
    await axios.get(
      "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      {
        onDownloadProgress: (progressEvent: any) => {
          console.log(progressEvent);
          let percentCompleted = Math.ceil(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      }
    );
  };

  useMemo(() => {
    setEdges(initialEdges);
  }, [edgeType]);

  // console.log(progress)

  return (
    <div className="w-full bg-slate-800 text-white">
      <div className="p-10">
        <h1>Dashboard</h1>
        <div className="flex items-center">
          <label htmlFor="" className="pe-10 font-bold">
            Edge Type:{" "}
          </label>
          <Segmented
            value={edgeType}
            options={["smoothstep", "step", "default", "straight"]}
            onChange={(value) => {
              setEdgeType(value); // string
            }}
          />
        </div>
        <button className="p-3 bg-blue-700 rounded-md" onClick={fetchAPI}>
          Hello world
        </button>
        <div>Progress: {progress}%</div>
      </div>
      {/* starts::ReactFlow */}
      <ReactFlow
        nodes={nodes}
        edges={edgesWithUpdatedTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        // nodeTypes={nodeTypes}
      >
        <Controls />
        <Background className="bg-slate-800" color="#eeee" gap={16} />
      </ReactFlow>
      {/* ends::ReactFlow */}
    </div>
  );
};

export default Dashboard;

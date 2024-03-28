import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";
import getProjectsData from "./getProjects";
import Image from "next/image";

const ProjectsWrapper = () => {
  return (
    <section id="projects">
      <div className="mt-24 w-full">
        <div className="">
          <h1 className="text-6xl">Projects</h1>
          <div className="flex items-center pt-5">
            <span className="w-3/4 text-xl">
              Proudly project
            </span>
            <div className="w-1/4 text-right">
              <span role="button" className="text-bold hover:text-blue-500">
                More <ArrowRightOutlined />
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-24 py-12">
          {getProjectsData?.map((item: any, index: number) => {
            if (index < 5)
              return (
                <Card
                  key={index}
                  hoverable
                  cover={<Image alt={item.title} src={item.previewImg} width={500} height={500} />}
                  // <img alt={item.title} src={item.previewImg} />
                  className="border-2"
                >
                  <div className="flex flex-col">
                    <span className="text-xl font-extrabold">{item.title}</span>
                    <span>{item.type}</span>
                  </div>
                </Card>
              );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsWrapper;

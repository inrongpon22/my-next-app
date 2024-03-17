import { BuildOutlined, DesktopOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Image from "next/image";
import React from "react";

const tools = [
  {
    title: "HTML",
    icon: "./media/framework-logos/html.png",
  },
  {
    title: "CSS",
    icon: "./media/framework-logos/css-3.svg",
  },
  {
    title: "Javascript",
    icon: "./media/framework-logos/javascript.svg",
  },
  {
    title: "Typecript",
    icon: "./media/framework-logos/file-type-typescript-official.svg",
  },
  {
    title: "Bootstrap",
    icon: "./media/framework-logos/bootstrap.png",
  },
  {
    title: "Tailwind",
    icon: "./media/framework-logos/tailwind-css.svg",
  },
  {
    title: "React",
    icon: "./media/framework-logos/React.png",
  },
  {
    title: "Nextjs",
    icon: "./media/framework-logos/Next.js.png",
  },
  {
    title: "Ant Design",
    icon: "./media/framework-logos/ant-design.svg",
  },
  {
    title: "Metronics Theme",
    icon: "./media/logos/default-small.svg",
  },
  {
    title: "ApexCharts",
    icon: "https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-white-trimmed.svg",
  },
  {
    title: "HighChart",
    icon: "./media/framework-logos/highcharts.svg",
  },
];

const services = [
  {
    title: "UX/UI",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ratione!",
    icon: <BuildOutlined />,
  },
  {
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ratione!",
    icon: <DesktopOutlined />,
  },
];

const About = () => {
  return (
    <section id="about" className="w-full">
      <div className="flex justify-around mt-36">
        <div className="w-2/4 grid grid-cols-4 gap-4">
          {tools?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="bg-slate-200 flex flex-col items-center justify-center p-5 rounded-xl"
              >
                {/* <img alt={item.title} src={item.icon} className="w-[45px]" /> */}
                <Image alt={item.title} src={item.icon} className="w-[45px]"  />
                <span className="text-lg">{item.title}</span>
              </div>
            );
          })}
        </div>
        <span className="w-2/4 text-8xl text-right">
          I&apos;m a Front-End Developer
        </span>
      </div>
      <div className="flex flex-col justify-center">
        <span className="w-3/4 text-2xl text-center">Services</span>
        <div className="flex justify-center gap-4">
          {services?.map((item: any, index: number) => {
            return (
              <Card key={index}>
                <span className="text-6xl">{item.icon}</span>
                <p className="font-bold">{item.title}</p>
                {item.desc}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

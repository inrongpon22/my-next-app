"use client";
import React from "react";
import "./subheader.css";
import { Button, Carousel, Image } from "antd";

const SubHeaderWrapper = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="lg:w-1/3 self-center order-2 lg:order-1">
          <h1 className="text-8xl">I&apos;m <span className="text-orange-400">Phanupong</span>, Front-End Developer.</h1>
        </div>

        <div className="container order-1 lg:order-2">
          <div
            data-text="Pic1"
            className="box box-1"
            style={{
              backgroundImage: `url("https://picsum.photos/id/1/640/800")`,
            }}
            // style={{backgroundImage:`url("https://i.postimg.cc/sgBkfbtx/img-1.jpg")`}}
          ></div>
          <div
            data-text="Pic2"
            className="box box-2"
            style={{
              backgroundImage: `url("https://picsum.photos/id/2/640/800")`,
            }}
            // style={{backgroundImage:`url("https://i.postimg.cc/3RZ6bhDS/img-2.jpg")`}}
          ></div>
          <div
            data-text="Pic3"
            className="box box-3"
            style={{
              backgroundImage: `url("https://picsum.photos/id/3/640/800")`,
            }}
            // style={{backgroundImage:`url("https://i.postimg.cc/DZhHg0m4/img-3.jpg")`}}
          ></div>
          <div
            data-text="Pic4"
            className="box box-4"
            style={{
              backgroundImage: `url("https://picsum.photos/id/4/640/800")`,
            }}
            // style={{backgroundImage:`url("https://i.postimg.cc/KjqWx5ft/img-4.jpg")`}}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SubHeaderWrapper;

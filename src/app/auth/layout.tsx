import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const metadata: Metadata = {
  title: "Login",
  description: "Generated by create next app",
};

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* begin::Body */}
      <div className="flex flex-col lg:w-1/2 p-10 order-2 lg:order-1 bg-white justify-center">
        <Link
          href="/"
          // size="small"
          className="w-1/12 flex items-center justify-center text-black bg-slate-100 p-1 rounded"
        >
          <ArrowLeftOutlined />
        </Link>
        {/* begin::Form */}
        <div className="flex flex-center flex-col lg:flex-row justify-center">
          {/* begin::Wrapper */}
          <div className=" p-10">{children}</div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}

        {/* begin::Footer */}
        {/* <div className="fw-semibold text-black fs-base text-end">
              <a href="#" className="px-5" target="_blank">
                Terms
              </a>

              <a href="#" className="px-5" target="_blank">
                Plans
              </a>

              <a href="#" className="px-5" target="_blank">
                Contact Us
              </a>
            </div> */}
        {/* end::Footer */}
      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      <div
        className="flex flex-col lg:flex-row justify-center lg:w-1/2 p-10 bgi-size-cover bgi-position-center order-1 order-lg-2"
        style={{ backgroundImage: `url('/media/misc/auth-bg.png')` }}
      >
        {/* begin::Content */}
        <div className="flex flex-col flex-center justify-center py-15 px-5 md:px-15 items-center">
          {/* begin::Logo */}
          <Link href="/" className="mb-12">
            <img
              alt="Logo"
              src="/media/logos/custom-1.png"
              className="h-[75px]"
            />
          </Link>
          {/* end::Logo */}

          {/* begin::Image */}
          <img
            className="mx-auto w-[275px] md:w-1/2 xl:w-[500px] mb-10 lg:mb-20"
            src="/media/misc/auth-screens.png"
            alt=""
          />
          {/* end::Image */}

          {/* begin::Title */}
          <h1 className="text-white fs-2qx fw-bolder text-center mb-7">
            Fast, Efficient and Productive
          </h1>
          {/* end::Title */}

          {/* begin::Text */}
          <div className="text-white fs-base text-center">
            In this kind of post,{" "}
            <a href="#" className="opacity-75-hover text-warning fw-bold me-1">
              the blogger
            </a>
            introduces a person they’ve interviewed <br /> and provides some
            background information about
            <a href="#" className="opacity-75-hover text-warning fw-bold me-1">
              the interviewee
            </a>
            and their <br /> work following this is a transcript of the
            interview.
          </div>
          {/* end::Text */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::Aside */}
    </div>
  );
};

export default AuthLayout;
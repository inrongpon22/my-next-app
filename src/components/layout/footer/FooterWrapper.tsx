"use client";
import React from "react";
import moment from "moment";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import Link from "next/link";

const contactIcons = [
  {
    title: "Facebook",
    icon: <FacebookOutlined />,
    url: "https://www.facebook.com/",
  },
  {
    title: "Instagram",
    icon: <InstagramOutlined />,
    url: "https://www.instagram.com/",
  },
  {
    title: "Twitter",
    icon: <TwitterOutlined />,
    url: "https://twitter.com/",
  },
  {
    title: "Linkedin",
    icon: <LinkedinOutlined />,
    url: "https://linkedin.com",
  },
];

const FooterWrapper = () => {
  return (
    <section className="flex justify-center my-3">
      <div className="w-10/12 bg-[#333] text-white rounded-3xl">
        <div className="flex justify-between p-10">
          <span>{moment().year()}© made by Phanupong</span>
          <div className="flex">
            {contactIcons.map((item: any, index: number) => {
              return (
                <Tooltip key={index} title={item.title}>
                  <Link href={item.url} target="_blank" className="mx-2">
                    {item.icon}
                  </Link>
                </Tooltip>
              );
            })}
          </div>
          {/* <div className="footer-top">
            <div className="footer-links-wrapper">
              <div className="footer-list-block free">
                <div className="body-b2 white">Free</div>
                <ul role="list" className="footer-links-list w-list-unstyled">
                  <li className="footer-list-item">
                    <a
                      href="https://finance-able.com/category/the-players/"
                      className="footer-link"
                    >
                      How Does Finance Work?
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a
                      href="https://finance-able.com/category/common-interview-question/"
                      className="footer-link"
                    >
                      Master Common Interview Questions
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a
                      href="https://finance-able.com/category/finance-in-plain-english/"
                      className="footer-link"
                    >
                      Tricky Finance Concepts... In Plain English
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-list-block learn">
                <div className="body-b2 white">Learn</div>
                <ul
                  role="list"
                  className="footer-links-list set w-list-unstyled"
                >
                  <li className="footer-list-item">
                    <a
                      href="https://courses.finance-able.com/"
                      className="footer-link"
                    >
                      Courses
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <div className="footer-beta">
                      <div className="beta-tag set-2 w-embed">
                        <svg
                          width="35"
                          height="17"
                          viewBox="0 0 35 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <rect
                            width="35"
                            height="17"
                            rx="8.5"
                            fill="#1C76FF"
                          ></rect>{" "}
                          <path
                            d="M7.6 12V5H10.085C10.445 5 10.77 5.07333 11.06 5.22C11.3533 5.36667 11.585 5.57833 11.755 5.855C11.9283 6.12833 12.015 6.45667 12.015 6.84C12.015 7.02667 11.985 7.21 11.925 7.39C11.865 7.57 11.78 7.72833 11.67 7.865C11.56 8.00167 11.4267 8.09833 11.27 8.155C11.4833 8.20833 11.66 8.305 11.8 8.445C11.9433 8.58167 12.0567 8.74167 12.14 8.925C12.2233 9.10833 12.2817 9.29833 12.315 9.495C12.3517 9.69167 12.37 9.87833 12.37 10.055C12.37 10.4283 12.28 10.7617 12.1 11.055C11.92 11.3483 11.6783 11.58 11.375 11.75C11.075 11.9167 10.7433 12 10.38 12H7.6ZM8.64 11.1H10.28C10.4933 11.1 10.6867 11.0467 10.86 10.94C11.0367 10.8333 11.1767 10.6867 11.28 10.5C11.3833 10.31 11.435 10.0967 11.435 9.86C11.435 9.65333 11.3833 9.45833 11.28 9.275C11.1767 9.08833 11.0367 8.93833 10.86 8.825C10.6867 8.71167 10.4933 8.655 10.28 8.655H8.64V11.1ZM8.64 7.77H9.975C10.2483 7.77 10.4833 7.68667 10.68 7.52C10.8767 7.35333 10.975 7.125 10.975 6.835C10.975 6.525 10.8767 6.29333 10.68 6.14C10.4833 5.98333 10.2483 5.905 9.975 5.905H8.64V7.77ZM15.3371 12.13C14.8771 12.13 14.4571 12.0117 14.0771 11.775C13.7004 11.5383 13.3988 11.2217 13.1721 10.825C12.9488 10.425 12.8371 9.98333 12.8371 9.5C12.8371 9.13333 12.9021 8.79167 13.0321 8.475C13.1621 8.155 13.3404 7.875 13.5671 7.635C13.7971 7.39167 14.0638 7.20167 14.3671 7.065C14.6704 6.92833 14.9938 6.86 15.3371 6.86C15.7204 6.86 16.0721 6.94 16.3921 7.1C16.7121 7.25667 16.9854 7.475 17.2121 7.755C17.4388 8.03167 17.6054 8.35167 17.7121 8.715C17.8188 9.075 17.8504 9.45833 17.8071 9.865H13.9521C13.9954 10.095 14.0788 10.3033 14.2021 10.49C14.3288 10.6733 14.4888 10.8183 14.6821 10.925C14.8788 11.0317 15.0971 11.0867 15.3371 11.09C15.5904 11.09 15.8204 11.0267 16.0271 10.9C16.2371 10.7733 16.4088 10.5983 16.5421 10.375L17.5971 10.62C17.3971 11.0633 17.0954 11.4267 16.6921 11.71C16.2888 11.99 15.8371 12.13 15.3371 12.13ZM13.9171 9.07H16.7571C16.7238 8.83 16.6388 8.61333 16.5021 8.42C16.3688 8.22333 16.2004 8.06833 15.9971 7.955C15.7971 7.83833 15.5771 7.78 15.3371 7.78C15.1004 7.78 14.8804 7.83667 14.6771 7.95C14.4771 8.06333 14.3104 8.21833 14.1771 8.415C14.0471 8.60833 13.9604 8.82667 13.9171 9.07ZM21.2459 8.04H20.1959L20.1909 12H19.1509L19.1559 8.04H18.3609V7H19.1559L19.1509 5.43H20.1909L20.1959 7H21.2459V8.04ZM25.9138 7H26.9538V12H25.9088L25.8688 11.275C25.7222 11.5317 25.5238 11.7383 25.2738 11.895C25.0238 12.0517 24.7288 12.13 24.3888 12.13C24.0222 12.13 23.6772 12.0617 23.3538 11.925C23.0305 11.785 22.7455 11.5917 22.4988 11.345C22.2555 11.0983 22.0655 10.815 21.9288 10.495C21.7922 10.1717 21.7238 9.825 21.7238 9.455C21.7238 9.09833 21.7905 8.76333 21.9238 8.45C22.0572 8.13333 22.2422 7.85667 22.4788 7.62C22.7155 7.38333 22.9888 7.19833 23.2988 7.065C23.6122 6.92833 23.9472 6.86 24.3038 6.86C24.6672 6.86 24.9872 6.94333 25.2638 7.11C25.5438 7.27333 25.7755 7.48333 25.9588 7.74L25.9138 7ZM24.3638 11.125C24.6572 11.125 24.9138 11.0533 25.1338 10.91C25.3538 10.7633 25.5238 10.5667 25.6438 10.32C25.7672 10.0733 25.8288 9.8 25.8288 9.5C25.8288 9.19667 25.7672 8.92167 25.6438 8.675C25.5205 8.42833 25.3488 8.23333 25.1288 8.09C24.9122 7.94333 24.6572 7.87 24.3638 7.87C24.0738 7.87 23.8088 7.94333 23.5688 8.09C23.3288 8.23667 23.1388 8.43333 22.9988 8.68C22.8588 8.92667 22.7888 9.2 22.7888 9.5C22.7888 9.80333 22.8605 10.0783 23.0038 10.325C23.1505 10.5683 23.3422 10.7633 23.5788 10.91C23.8188 11.0533 24.0805 11.125 24.3638 11.125Z"
                            fill="white"
                          ></path>{" "}
                        </svg>
                      </div>
                      <a
                        href="http://app.finance-able.com"
                        className="footer-link"
                      >
                        Personalized Training App
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="footer-list-block events">
                <a
                  href="https://finance-able.com/classes/"
                  className="link-block w-inline-block"
                >
                  <div className="body-b2 white hover">Events</div>
                </a>
                <ul
                  role="list"
                  className="footer-links-list events w-list-unstyled"
                >
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">
                      Subpage
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">
                      Subpage
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">
                      Subpage
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-list-block about">
                <a
                  href="https://finance-able.com/about-us/"
                  className="link-block w-inline-block"
                >
                  <div className="body-b2 white hover">About</div>
                </a>
                <ul
                  role="list"
                  className="footer-links-list about w-list-unstyled"
                >
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">
                      Subpage
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">
                      Subpage
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-link">
                      Subpage
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-down">
            <div className="footer-down-info">
              <a href="#home" className="footer-logo w-inline-block"></a>
              <div className="footer-link white width">
                Finance|able was created to fill the void in the market for
                approachable, intuitive finance career training.
              </div>
              <div className="footer-mobile-socials">
                <div className="body-b2 white">Follow us</div>
                <div className="footer-socials-wrapper">
                  <div className="footer-socials">
                    <a
                      href="https://www.instagram.com/survivefinance/"
                      target="_blank"
                      className="footer-link-icon w-inline-block"
                    >
                      <div className="html-embed-2 w-embed">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M11 2.5C13.75 2.5 14.125 2.5 15.25 2.5C16.25 2.5 16.75 2.75 17.125 2.875C17.625 3.125 18 3.25 18.375 3.625C18.75 4 19 4.375 19.125 4.875C19.25 5.25 19.375 5.75 19.5 6.75C19.5 7.875 19.5 8.125 19.5 11C19.5 13.875 19.5 14.125 19.5 15.25C19.5 16.25 19.25 16.75 19.125 17.125C18.875 17.625 18.75 18 18.375 18.375C18 18.75 17.625 19 17.125 19.125C16.75 19.25 16.25 19.375 15.25 19.5C14.125 19.5 13.875 19.5 11 19.5C8.125 19.5 7.875 19.5 6.75 19.5C5.75 19.5 5.25 19.25 4.875 19.125C4.375 18.875 4 18.75 3.625 18.375C3.25 18 3 17.625 2.875 17.125C2.75 16.75 2.625 16.25 2.5 15.25C2.5 14.125 2.5 13.875 2.5 11C2.5 8.125 2.5 7.875 2.5 6.75C2.5 5.75 2.75 5.25 2.875 4.875C3.125 4.375 3.25 4 3.625 3.625C4 3.25 4.375 3 4.875 2.875C5.25 2.75 5.75 2.625 6.75 2.5C7.875 2.5 8.25 2.5 11 2.5ZM11 0.625C8.125 0.625 7.875 0.625 6.75 0.625C5.625 0.625 4.875 0.875001 4.25 1.125C3.625 1.375 3 1.75 2.375 2.375C1.75 3 1.5 3.5 1.125 4.25C0.875001 4.875 0.75 5.625 0.625 6.75C0.625 7.875 0.625 8.25 0.625 11C0.625 13.875 0.625 14.125 0.625 15.25C0.625 16.375 0.875001 17.125 1.125 17.75C1.375 18.375 1.75 19 2.375 19.625C3 20.25 3.5 20.5 4.25 20.875C4.875 21.125 5.625 21.25 6.75 21.375C7.875 21.375 8.25 21.375 11 21.375C13.75 21.375 14.125 21.375 15.25 21.375C16.375 21.375 17.125 21.125 17.75 20.875C18.375 20.625 19 20.25 19.625 19.625C20.25 19 20.5 18.5 20.875 17.75C21.125 17.125 21.25 16.375 21.375 15.25C21.375 14.125 21.375 13.75 21.375 11C21.375 8.25 21.375 7.875 21.375 6.75C21.375 5.625 21.125 4.875 20.875 4.25C20.625 3.625 20.25 3 19.625 2.375C19 1.75 18.5 1.5 17.75 1.125C17.125 0.875001 16.375 0.75 15.25 0.625C14.125 0.625 13.875 0.625 11 0.625Z"
                            fill="currentColor"
                          ></path>{" "}
                          <path
                            d="M11 5.625C8 5.625 5.625 8 5.625 11C5.625 14 8 16.375 11 16.375C14 16.375 16.375 14 16.375 11C16.375 8 14 5.625 11 5.625ZM11 14.5C9.125 14.5 7.5 13 7.5 11C7.5 9.125 9 7.5 11 7.5C12.875 7.5 14.5 9 14.5 11C14.5 12.875 12.875 14.5 11 14.5Z"
                            fill="currentColor"
                          ></path>{" "}
                          <path
                            d="M16.5 6.75C17.1904 6.75 17.75 6.19036 17.75 5.5C17.75 4.80965 17.1904 4.25 16.5 4.25C15.8096 4.25 15.25 4.80965 15.25 5.5C15.25 6.19036 15.8096 6.75 16.5 6.75Z"
                            fill="currentColor"
                          ></path>{" "}
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCu7i61GXqR08xc1WAgh9GkA"
                      target="_blank"
                      className="footer-link-icon w-inline-block"
                    >
                      <div className="html-embed-2 w-embed">
                        <svg
                          width="20"
                          height="14"
                          viewBox="0 0 20 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M19.5 2.125C19.25 1.25 18.625 0.625 17.75 0.375C16.25 2.38419e-07 9.87499 0 9.87499 0C9.87499 0 3.62501 2.38419e-07 2.00001 0.375C1.12501 0.625 0.499996 1.25 0.249996 2.125C-3.8147e-06 3.75 0 7 0 7C0 7 3.8147e-06 10.25 0.375004 11.875C0.625004 12.75 1.25 13.375 2.125 13.625C3.625 14 10 14 10 14C10 14 16.25 14 17.875 13.625C18.75 13.375 19.375 12.75 19.625 11.875C20 10.25 20 7 20 7C20 7 20 3.75 19.5 2.125ZM7.99999 10V4L13.25 7L7.99999 10Z"
                            fill="currentColor"
                          ></path>{" "}
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/finance-able/"
                      target="_blank"
                      className="footer-link-icon w-inline-block"
                    >
                      <div className="html-embed-2 w-embed">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M4.50001 20H0.249996V6.625H4.50001V20ZM2.375 4.75C1 4.75 0 3.75 0 2.375C0 0.999999 1.125 0 2.375 0C3.75 0 4.75 0.999999 4.75 2.375C4.75 3.75 3.75 4.75 2.375 4.75ZM20 20H15.75V12.75C15.75 10.625 14.875 10 13.625 10C12.375 10 11.125 11 11.125 12.875V20H6.875V6.625H10.875V8.5C11.25 7.625 12.75 6.25 14.875 6.25C17.25 6.25 19.75 7.625 19.75 11.75V20H20Z"
                            fill="currentColor"
                          ></path>{" "}
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/financeable1"
                      target="_blank"
                      className="footer-link-icon w-inline-block"
                    >
                      <div className="html-embed-2 w-embed">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15 3.625 19.125 8.375 19.875V12.875H5.875V10H8.375V7.75C8.375 5.25 9.875 3.875 12.125 3.875C13.25 3.875 14.375 4.125 14.375 4.125V6.625H13.125C11.875 6.625 11.5 7.375 11.5 8.125V10H14.25L13.75 12.875H11.375V20C16.375 19.25 20 15 20 10Z"
                            fill="currentColor"
                          ></path>{" "}
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.tiktok.com/@survivefinance"
                      target="_blank"
                      className="footer-link-icon w-inline-block"
                    >
                      <div className="html-embed-2 w-embed">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M14.2265 0H10.8559V13.6232C10.8559 15.2464 9.55951 16.5797 7.94624 16.5797C6.33296 16.5797 5.03659 15.2464 5.03659 13.6232C5.03659 12.029 6.30416 10.7246 7.85983 10.6667V7.24639C4.43161 7.30433 1.66602 10.1159 1.66602 13.6232C1.66602 17.1594 4.48923 20 7.97506 20C11.4608 20 14.284 17.1304 14.284 13.6232V6.63767C15.5516 7.56522 17.1073 8.11594 18.7493 8.14495V4.72464C16.2142 4.63768 14.2265 2.55072 14.2265 0Z"
                            fill="currentColor"
                            fill-opacity="0.8"
                          ></path>{" "}
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-block-23">
              <div className="footer-desktop-socials">
                <div className="footer-socials-wrapper">
                  <div className="footer-socials">
                    <a
                      href="https://www.instagram.com/survivefinance/"
                      target="_blank"
                      className="footer-link-icon w-inline-block"
                    >
                      <div className="html-embed-2 w-embed">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M11 2.5C13.75 2.5 14.125 2.5 15.25 2.5C16.25 2.5 16.75 2.75 17.125 2.875C17.625 3.125 18 3.25 18.375 3.625C18.75 4 19 4.375 19.125 4.875C19.25 5.25 19.375 5.75 19.5 6.75C19.5 7.875 19.5 8.125 19.5 11C19.5 13.875 19.5 14.125 19.5 15.25C19.5 16.25 19.25 16.75 19.125 17.125C18.875 17.625 18.75 18 18.375 18.375C18 18.75 17.625 19 17.125 19.125C16.75 19.25 16.25 19.375 15.25 19.5C14.125 19.5 13.875 19.5 11 19.5C8.125 19.5 7.875 19.5 6.75 19.5C5.75 19.5 5.25 19.25 4.875 19.125C4.375 18.875 4 18.75 3.625 18.375C3.25 18 3 17.625 2.875 17.125C2.75 16.75 2.625 16.25 2.5 15.25C2.5 14.125 2.5 13.875 2.5 11C2.5 8.125 2.5 7.875 2.5 6.75C2.5 5.75 2.75 5.25 2.875 4.875C3.125 4.375 3.25 4 3.625 3.625C4 3.25 4.375 3 4.875 2.875C5.25 2.75 5.75 2.625 6.75 2.5C7.875 2.5 8.25 2.5 11 2.5ZM11 0.625C8.125 0.625 7.875 0.625 6.75 0.625C5.625 0.625 4.875 0.875001 4.25 1.125C3.625 1.375 3 1.75 2.375 2.375C1.75 3 1.5 3.5 1.125 4.25C0.875001 4.875 0.75 5.625 0.625 6.75C0.625 7.875 0.625 8.25 0.625 11C0.625 13.875 0.625 14.125 0.625 15.25C0.625 16.375 0.875001 17.125 1.125 17.75C1.375 18.375 1.75 19 2.375 19.625C3 20.25 3.5 20.5 4.25 20.875C4.875 21.125 5.625 21.25 6.75 21.375C7.875 21.375 8.25 21.375 11 21.375C13.75 21.375 14.125 21.375 15.25 21.375C16.375 21.375 17.125 21.125 17.75 20.875C18.375 20.625 19 20.25 19.625 19.625C20.25 19 20.5 18.5 20.875 17.75C21.125 17.125 21.25 16.375 21.375 15.25C21.375 14.125 21.375 13.75 21.375 11C21.375 8.25 21.375 7.875 21.375 6.75C21.375 5.625 21.125 4.875 20.875 4.25C20.625 3.625 20.25 3 19.625 2.375C19 1.75 18.5 1.5 17.75 1.125C17.125 0.875001 16.375 0.75 15.25 0.625C14.125 0.625 13.875 0.625 11 0.625Z"
                            fill="currentColor"
                          ></path>{" "}
                          <path
                            d="M11 5.625C8 5.625 5.625 8 5.625 11C5.625 14 8 16.375 11 16.375C14 16.375 16.375 14 16.375 11C16.375 8 14 5.625 11 5.625ZM11 14.5C9.125 14.5 7.5 13 7.5 11C7.5 9.125 9 7.5 11 7.5C12.875 7.5 14.5 9 14.5 11C14.5 12.875 12.875 14.5 11 14.5Z"
                            fill="currentColor"
                          ></path>{" "}
                          <path
                            d="M16.5 6.75C17.1904 6.75 17.75 6.19036 17.75 5.5C17.75 4.80965 17.1904 4.25 16.5 4.25C15.8096 4.25 15.25 4.80965 15.25 5.5C15.25 6.19036 15.8096 6.75 16.5 6.75Z"
                            fill="currentColor"
                          ></path>{" "}
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCu7i61GXqR08xc1WAgh9GkA"
                      target="_blank"
                      className="footer-link-icon w-inline-block"
                    >
                      <div className="html-embed-2 w-embed">
                        <svg
                          width="20"
                          height="14"
                          viewBox="0 0 20 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M19.5 2.125C19.25 1.25 18.625 0.625 17.75 0.375C16.25 2.38419e-07 9.87499 0 9.87499 0C9.87499 0 3.62501 2.38419e-07 2.00001 0.375C1.12501 0.625 0.499996 1.25 0.249996 2.125C-3.8147e-06 3.75 0 7 0 7C0 7 3.8147e-06 10.25 0.375004 11.875C0.625004 12.75 1.25 13.375 2.125 13.625C3.625 14 10 14 10 14C10 14 16.25 14 17.875 13.625C18.75 13.375 19.375 12.75 19.625 11.875C20 10.25 20 7 20 7C20 7 20 3.75 19.5 2.125ZM7.99999 10V4L13.25 7L7.99999 10Z"
                            fill="currentColor"
                          ></path>{" "}
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/finance-able/"
                      target="_blank"
                      className="footer-link-icon w-inline-block"
                    >
                      <div className="html-embed-2 w-embed">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M4.50001 20H0.249996V6.625H4.50001V20ZM2.375 4.75C1 4.75 0 3.75 0 2.375C0 0.999999 1.125 0 2.375 0C3.75 0 4.75 0.999999 4.75 2.375C4.75 3.75 3.75 4.75 2.375 4.75ZM20 20H15.75V12.75C15.75 10.625 14.875 10 13.625 10C12.375 10 11.125 11 11.125 12.875V20H6.875V6.625H10.875V8.5C11.25 7.625 12.75 6.25 14.875 6.25C17.25 6.25 19.75 7.625 19.75 11.75V20H20Z"
                            fill="currentColor"
                          ></path>{" "}
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/financeable1"
                      target="_blank"
                      className="footer-link-icon w-inline-block"
                    >
                      <div className="html-embed-2 w-embed">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15 3.625 19.125 8.375 19.875V12.875H5.875V10H8.375V7.75C8.375 5.25 9.875 3.875 12.125 3.875C13.25 3.875 14.375 4.125 14.375 4.125V6.625H13.125C11.875 6.625 11.5 7.375 11.5 8.125V10H14.25L13.75 12.875H11.375V20C16.375 19.25 20 15 20 10Z"
                            fill="currentColor"
                          ></path>{" "}
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.tiktok.com/@survivefinance"
                      target="_blank"
                      className="footer-link-icon w-inline-block"
                    >
                      <div className="html-embed-2 w-embed">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            d="M14.2265 0H10.8559V13.6232C10.8559 15.2464 9.55951 16.5797 7.94624 16.5797C6.33296 16.5797 5.03659 15.2464 5.03659 13.6232C5.03659 12.029 6.30416 10.7246 7.85983 10.6667V7.24639C4.43161 7.30433 1.66602 10.1159 1.66602 13.6232C1.66602 17.1594 4.48923 20 7.97506 20C11.4608 20 14.284 17.1304 14.284 13.6232V6.63767C15.5516 7.56522 17.1073 8.11594 18.7493 8.14495V4.72464C16.2142 4.63768 14.2265 2.55072 14.2265 0Z"
                            fill="currentColor"
                            fill-opacity="0.8"
                          ></path>{" "}
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-link white">
                © 2024 Financeable Training. All Rights Reserved
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FooterWrapper;

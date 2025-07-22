import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";

export const FrameSubsection = (): JSX.Element => {
  // Data for the x-axis labels on the main chart
  const xAxisLabels = [
    { value: "5k", position: "left-[76px]" },
    { value: "10k", position: "left-[156px]" },
    { value: "15k", position: "left-[242px]" },
    { value: "20k", position: "left-[328px]" },
    { value: "25k", position: "left-[414px]" },
    { value: "30k", position: "left-[500px]" },
    { value: "35k", position: "left-[586px]" },
    { value: "40k", position: "left-[672px]" },
    { value: "45k", position: "left-[758px]" },
    { value: "50k", position: "left-[844px]" },
    { value: "55k", position: "left-[930px]" },
    { value: "60k", position: "left-[1016px]" },
  ];

  // Data for the y-axis labels on the main chart
  const yAxisLabels = [
    { value: "100%", position: "top-0" },
    { value: "80%", position: "top-[47px]" },
    { value: "60%", position: "top-[93px]" },
    { value: "40%", position: "top-[140px]" },
    { value: "20%", position: "top-[187px]" },
  ];

  // Data for the stat cards
  const statCards = [
    {
      title: "Total User",
      value: "40,689",
      increase: "8.5%",
      description: "Up from yesterday",
      iconSrc: "/icon-2.png",
    },
    {
      title: "Total Completed Jobs",
      value: "10293",
      increase: "1.3%",
      description: "Up from past week",
      iconSrc: "/icon-1.png",
    },
    {
      title: "Total Pending",
      value: "2040",
      increase: "1.8%",
      description: "Up from yesterday",
      iconSrc: "/icon.png",
    },
  ];

  // Data for the sales analytics chart
  const salesYears = ["2015", "2016", "2017", "2018", "2019"];
  const salesValues = ["0", "25", "50", "75", "100"];

  // Navigation menu items
  const navItems = [
    { name: "Dashboard", active: true },
    { name: "Inbox", active: false },
    { name: "Users", active: false },
    { name: "Jobs", active: false },
    { name: "Settings", active: false },
    { name: "Logout", active: false },
  ];

  return (
    <div className="w-full h-full bg-white">
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-[240px] h-full bg-white border-r">
          <div className="p-5">
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-[30.22px]"
                alt="Frame"
                src="/frame-3-2.svg"
              />
              <div className="font-bold text-[#25324b] text-2xl tracking-[1.20px] leading-9 whitespace-nowrap">
                JobBoost
              </div>
            </div>
          </div>

          <nav className="mt-5">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <div
                  className={`h-[50px] px-10 flex items-center ${
                    item.active
                      ? "bg-[url(/hide-bg---hide-bg-copy-mask-4.png)] bg-[100%_100%] text-white"
                      : "text-[#202224]"
                  }`}
                >
                  <div className="text-[22px] text-center mr-4"></div>
                  <div className="font-semibold text-sm tracking-[0.30px]">
                    {item.name}
                  </div>
                </div>
                {index === 4 && <Separator className="mx-0.5 my-0" />}
              </React.Fragment>
            ))}
          </nav>
        </aside>

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-[70px] bg-white border-b flex items-center justify-between px-8">
            <div className="flex items-center">
              <div className="w-6 h-6 opacity-90 mr-4">
                <div className="text-[22px] text-[#202224] text-center"></div>
              </div>
              <div className="relative">
                <Input
                  className="w-[388px] h-[38px] bg-[#f5f6fa] rounded-[19px] border-[0.6px] border-solid border-neutral-300 pl-11"
                  placeholder="Search"
                />
                <div className="absolute w-[15px] h-[15px] top-2.5 left-4 opacity-50">
                  <img className="w-3.5 h-3.5" alt="Search" src="/oval-3.svg" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative w-[31px] h-8">
                <div className="absolute w-6 h-[26px] top-[5px] left-0">
                  <img
                    className="absolute w-6 h-[18px] top-0 left-0"
                    alt="Notifications"
                    src="/combined-shape.svg"
                  />
                  <div className="absolute w-1.5 h-1.5 top-5 left-[9px] bg-[#ff0000] rounded-[2.25px] opacity-30" />
                </div>
                <Badge className="absolute top-0 right-0 bg-[#ff0000] text-white rounded-full w-4 h-4 flex items-center justify-center p-0">
                  6
                </Badge>
              </div>

              <div className="flex items-center">
                <img className="w-10 h-[27px]" alt="Flag" src="/flag-2.png" />
                <span className="ml-4 font-semibold text-[#646464] text-sm">
                  English
                </span>
                <img
                  className="w-2 h-[5px] ml-2"
                  alt="Drop down"
                  src="/drop-down-2.png"
                />
              </div>

              <div className="flex items-center">
                <Avatar className="w-11 h-11">
                  <AvatarImage src="/man-438081-960-720-2.png" alt="Moni Roy" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <div className="font-bold text-neutral-700 text-sm">
                    Moni Roy
                  </div>
                  <div className="font-semibold text-[#565656] text-xs">
                    Admin
                  </div>
                </div>
                <div className="ml-4 w-[18px] h-[18px]">
                  <img
                    className="w-1.5 h-1"
                    alt="Chevron down"
                    src="/chevron-down-2.png"
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 bg-[#f5f6fa] p-8 overflow-y-auto">
            <h1 className="font-bold text-[#202224] text-[32px] tracking-[-0.11px] mb-8">
              Dashboard
            </h1>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {statCards.map((card, index) => (
                <Card
                  key={index}
                  className="rounded-[14px] shadow-[6px_6px_54px_#0000000d]"
                >
                  <CardContent className="p-0">
                    <div className="p-[17px] relative">
                      <div className="opacity-70 font-semibold text-[#202224] text-base">
                        {card.title}
                      </div>
                      <div className="font-bold text-[#202224] text-[28px] tracking-[1.00px] mt-5">
                        {card.value}
                      </div>
                      <img
                        className="absolute w-[60px] h-[60px] top-[17px] right-[17px]"
                        alt="Icon"
                        src={card.iconSrc}
                      />
                      <div className="flex items-center mt-12">
                        <div className="w-6 h-6">
                          <img
                            className="w-5 h-3 mt-1.5 ml-0.5"
                            alt="Path"
                            src="/path-10.svg"
                          />
                        </div>
                        <div className="font-semibold text-base ml-2">
                          <span className="text-[#00b69b]">
                            {card.increase}
                          </span>
                          <span className="text-[#606060]">
                            {" "}
                            {card.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Jobs Completed Details Chart */}
            <Card className="mb-8 rounded-none shadow-none">
              <CardContent className="p-0 relative">
                <div className="p-8">
                  <CardTitle className="text-2xl font-bold text-[#202224] mb-6">
                    Jobs Completed Details
                  </CardTitle>

                  <div className="absolute top-[25px] right-[25px]">
                    <Select>
                      <SelectTrigger className="w-[104px] h-[22px] bg-[#fcfcfc] rounded border-[0.6px] border-solid border-neutral-300">
                        <div className="flex items-center">
                          <SelectValue
                            placeholder="October"
                            className="font-semibold text-[#2b303466] text-xs"
                          />
                          <img
                            className="w-2.5 h-[5px] ml-2"
                            alt="Shape"
                            src="/shape.svg"
                          />
                        </div>
                      </SelectTrigger>
                    </Select>
                  </div>

                  <div className="relative h-[220px] mt-4">
                    {/* Y-axis labels */}
                    {yAxisLabels.map((label, index) => (
                      <div
                        key={index}
                        className={`absolute ${label.position} left-0 font-semibold text-[#2b303466] text-xs tracking-[0] leading-[9px] whitespace-nowrap`}
                      >
                        {label.value}
                      </div>
                    ))}

                    {/* X-axis labels */}
                    {xAxisLabels.map((label, index) => (
                      <div
                        key={index}
                        className={`absolute w-[21px] top-[213px] ${label.position} font-semibold text-[#2b303466] text-xs text-center tracking-[0] leading-[9px] whitespace-nowrap`}
                      >
                        {label.value}
                      </div>
                    ))}

                    {/* Grid lines */}
                    <div className="absolute w-[998px] h-[187px] top-[3px] left-[76px] opacity-70">
                      {[0, 47, 93, 140, 187].map((top, index) => (
                        <img
                          key={index}
                          className={`absolute w-[998px] h-px top-[${top}px] left-0`}
                          alt="Line"
                          src="/line-9.svg"
                        />
                      ))}
                    </div>

                    {/* Chart */}
                    <div className="absolute w-[998px] h-[154px] top-[40px] left-[76px]">
                      <img
                        className="absolute w-[998px] h-[154px]"
                        alt="Gradient"
                        src="/gradient.svg"
                      />
                      <img
                        className="absolute w-[996px] h-[154px]"
                        alt="Outline graph"
                        src="/ouline-graph.svg"
                      />
                      <img
                        className="absolute w-[938px] h-[162px]"
                        alt="Point"
                        src="/point.png"
                      />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute w-[82px] h-[22px] top-[9px] left-[348px]">
                      <div className="relative w-20 h-[22px] bg-[url(/combined-shape-2.svg)] bg-[100%_100%]">
                        <div className="w-16 top-0.5 left-2.5 font-bold text-white text-xs tracking-[0] whitespace-nowrap absolute">
                          64,3664.77
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bottom row cards */}
            <div className="grid grid-cols-3 gap-6">
              {/* Users Card */}
              <Card className="rounded-[14px] shadow-[6px_6px_54px_#0000000d]">
                <CardContent className="p-6">
                  <CardTitle className="text-[22px] font-bold text-[#202224] mb-8">
                    Users
                  </CardTitle>

                  <div className="flex justify-center mb-10">
                    <div className="w-[146px] h-[146px] bg-[url(/gradient-base.svg)] bg-[100%_100%]">
                      <div className="h-[146px] bg-[url(/color-base.svg)] bg-[100%_100%]" />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex">
                      <img
                        className="w-3 h-3 mt-[50px]"
                        alt="Oval"
                        src="/oval.svg"
                      />
                      <div className="ml-5">
                        <div className="font-bold text-[#202224] text-[28px] tracking-[1.00px]">
                          34,249
                        </div>
                        <div className="opacity-80 font-semibold text-[#282d32] text-base mt-5">
                          New Users
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <img
                        className="w-3 h-3 mt-1"
                        alt="Oval"
                        src="/oval.svg"
                      />
                      <div className="ml-5">
                        <div className="font-bold text-[#202224] text-[28px] text-center tracking-[1.00px]">
                          1420
                        </div>
                        <div className="opacity-80 font-semibold text-[#282d32] text-base mt-5">
                          Employers
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Product Card */}
              <Card className="rounded-[14px] shadow-[6px_6px_54px_#0000000d]">
                <CardContent className="p-6 relative">
                  <CardTitle className="text-[22px] font-bold text-[#202224] mb-8">
                    Featured Product
                  </CardTitle>

                  <div className="flex justify-center items-center h-[200px] relative">
                    <Button
                      variant="outline"
                      className="absolute left-[17px] w-[41px] h-[41px] rounded-full p-0 flex items-center justify-center"
                    >
                      <img
                        className="w-[7px] h-3 rotate-180"
                        alt="Path"
                        src="/path-1.svg"
                      />
                    </Button>

                    <img
                      src="/headphones.jpg"
                      alt="Beats Headphone"
                      className="max-h-full"
                    />

                    <Button
                      variant="outline"
                      className="absolute right-[17px] w-[41px] h-[41px] rounded-full p-0 flex items-center justify-center"
                    >
                      <img
                        className="w-[7px] h-3 rotate-90"
                        alt="Path"
                        src="/path-14.svg"
                      />
                    </Button>
                  </div>

                  <div className="text-center mt-4">
                    <h3 className="font-bold text-[#282d32] text-lg">
                      Beats Headphone 2019
                    </h3>
                    <p className="opacity-70 font-bold text-[#4640de] text-base mt-2">
                      $89.00
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Sales Analytics Card */}
              <Card className="rounded-[14px] shadow-[6px_6px_54px_#0000000d]">
                <CardContent className="p-6">
                  <CardTitle className="text-[22px] font-bold text-[#202224] mb-8">
                    Sales Analytics
                  </CardTitle>

                  <div className="relative h-[250px]">
                    {/* Y-axis labels */}
                    {salesValues.map((value, index) => (
                      <div
                        key={index}
                        className="absolute font-semibold text-[#282c2f66] text-xs text-right"
                        style={{
                          top: `${index * 59}px`,
                          left: index === 0 ? "31px" : "6px",
                        }}
                      >
                        {value}
                      </div>
                    ))}

                    {/* Horizontal grid lines */}
                    {[0, 59, 118, 177, 236].map((top, index) => (
                      <img
                        key={index}
                        className="absolute w-[298px] h-px left-[43px]"
                        style={{ top: `${top}px` }}
                        alt="Line"
                        src="/line-2-16.svg"
                      />
                    ))}

                    {/* Chart */}
                    <div className="absolute top-[43px] left-[43px]">
                      <img
                        className="absolute w-[299px] h-[228px]"
                        alt="Profit"
                        src="/profit.png"
                      />
                      <img
                        className="absolute w-[279px] h-[178px]"
                        alt="Sales"
                        src="/sales.png"
                      />
                    </div>

                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-[43px] w-[298px] flex justify-between">
                      {salesYears.map((year, index) => (
                        <div
                          key={index}
                          className="font-semibold text-[#292c2f66] text-xs"
                        >
                          {year}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

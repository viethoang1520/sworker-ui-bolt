import { SearchIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const DashboardSubsection = (): JSX.Element => {
  // Status badge data
  const statusBadges = {
    completed: {
      bg: "bg-[#00b69b]",
      text: "text-[#00b69b]",
      label: "Completed",
    },
    processing: {
      bg: "bg-[#6225ee]",
      text: "text-[#6225ee]",
      label: "Processing",
    },
    rejected: { bg: "bg-[#ee3825]", text: "text-[#ef3826]", label: "Rejected" },
    onHold: { bg: "bg-[#ffa755]", text: "text-[#ffa755]", label: "On Hold" },
    inTransit: {
      bg: "bg-[#ba29ff]",
      text: "text-[#ba29ff]",
      label: "In Transit",
    },
  };

  // Job data
  const jobs = [
    {
      id: "00001",
      name: "Example Name",
      description: "We are seeking a creative...",
      employer: "Discord",
      category: "Design",
      status: "completed",
    },
    {
      id: "00002",
      name: "Example Name",
      description: "We're looking for a Full Stack...",
      employer: "GS25",
      category: "IT",
      status: "processing",
    },
    {
      id: "00003",
      name: "Example Name",
      description: "We're looking for a Full Stack...",
      employer: "FPT",
      category: "Design",
      status: "rejected",
    },
    {
      id: "00004",
      name: "Example Name",
      description: "We are seeking a creative...",
      employer: "GS25",
      category: "IT",
      status: "completed",
    },
    {
      id: "00005",
      name: "Example Name",
      description: "We are seeking a creative...",
      employer: "FPT",
      category: "Design",
      status: "processing",
    },
    {
      id: "00006",
      name: "Example Name",
      description: "We're looking for a Full Stack...",
      employer: "GS25",
      category: "Design",
      status: "completed",
    },
    {
      id: "00007",
      name: "Example Name",
      description: "We are seeking a creative...",
      employer: "FPT",
      category: "IT",
      status: "processing",
    },
    {
      id: "00008",
      name: "Example Name",
      description: "We are seeking a creative...",
      employer: "FPT",
      category: "Design",
      status: "onHold",
    },
    {
      id: "00009",
      name: "Example Name",
      description: "We're looking for a Full Stack...",
      employer: "FPT",
      category: "IT",
      status: "inTransit",
    },
  ];

  // Navigation items
  const navItems = [
    { name: "Dashboard", active: false },
    { name: "Inbox", active: false },
    { name: "Users", active: false },
    { name: "Jobs", active: true },
    { name: "Settings", active: false },
    { name: "Logout", active: false },
  ];

  // Filter items
  const filterSections = [
    { name: "Filter By", hasSeparator: true },
    { name: "Categories", hasSeparator: true, hasDropdown: true },
    { name: "Job Status", hasSeparator: true, hasDropdown: true },
  ];

  return (
    <div className="flex h-full bg-white">
      {/* Sidebar */}
      <aside className="w-60 h-full bg-white border-r border-neutral-300">
        <div className="flex items-center gap-2 p-5">
          <img className="w-8 h-[30.22px]" alt="Logo" src="/frame-3.svg" />
          <div className="[font-family:'Clash_Display_Variable-Bold',Helvetica] font-bold text-[#25324b] text-2xl tracking-[1.20px] leading-9 whitespace-nowrap">
            JobBoost
          </div>
        </div>

        <nav className="mt-4">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className={`w-60 h-[50px] flex items-center px-10 ${
                item.active
                  ? item.name === "Jobs"
                    ? "bg-[url(/hide-bg---hide-bg-copy-mask-1.png)] bg-[100%_100%] text-white"
                    : "bg-[url(/hide-bg---hide-bg-copy-mask.png)] bg-[100%_100%] text-black"
                  : "text-[#202224]"
              }`}
            >
              <div className="[font-family:'LineAwesome-Medium',Helvetica] font-medium text-[22px] text-center tracking-[0] whitespace-nowrap mr-4">
                {/* Icon placeholder */}
              </div>
              <div
                className={`[font-family:'Nunito_Sans',Helvetica] font-semibold text-sm tracking-[0.30px] leading-normal`}
              >
                {item.name}
              </div>
            </div>
          ))}

          {/* Divider */}
          <div className="px-0.5 mt-2">
            <img className="w-60 h-px" alt="Divider" src="/divider-.svg" />
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-[#f5f6fa]">
        {/* Header */}
        <header className="h-[70px] bg-white flex items-center justify-between px-8 border-b border-neutral-300">
          {/* SearchIcon */}
          <div className="relative w-[388px]">
            <Input
              className="h-[38px] bg-[#f5f6fa] rounded-[19px] pl-11 text-center text-sm opacity-50 [font-family:'Nunito_Sans',Helvetica]"
              placeholder="Search"
            />
            <div className="absolute w-[15px] h-[15px] top-2.5 left-4 opacity-50">
              <SearchIcon className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Language selector */}
            <div className="flex items-center">
              <img className="w-10 h-[27px]" alt="Flag" src="/flag.png" />
              <span className="ml-4 [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#646464] text-sm">
                English
              </span>
              <img
                className="ml-2 w-2 h-[5px]"
                alt="Drop down"
                src="/drop-down.png"
              />
            </div>

            {/* Notifications */}
            <div className="relative w-[31px] h-8">
              <div className="absolute w-[31px] h-[30px] top-px left-0">
                <div className="relative w-[29px] h-[30px]">
                  <div className="absolute w-6 h-[26px] top-[5px] left-0">
                    <img
                      className="absolute w-6 h-[18px] top-0 left-0"
                      alt="Combined shape"
                      src="/combined-shape.svg"
                    />
                    <div className="absolute w-1.5 h-1.5 top-5 left-[9px] bg-[#ff0000] rounded-[2.25px] opacity-30" />
                  </div>
                  <img
                    className="absolute w-4 h-4 top-0 left-[13px]"
                    alt="Oval"
                    src="/oval.svg"
                  />
                  <div className="top-0 left-[17px] font-bold text-white text-xs tracking-[0] leading-[normal] absolute [font-family:'Nunito_Sans',Helvetica]">
                    6
                  </div>
                </div>
              </div>
            </div>

            {/* User profile */}
            <div className="flex items-center">
              <Avatar className="h-11 w-11">
                <img
                  src="/man-438081-960-720.png"
                  alt="User avatar"
                  className="h-full w-full"
                />
              </Avatar>
              <div className="ml-4">
                <div className="[font-family:'Nunito_Sans',Helvetica] font-bold text-neutral-700 text-sm">
                  Moni Roy
                </div>
                <div className="[font-family:'Nunito_Sans',Helvetica] font-semibold text-[#565656] text-xs">
                  Admin
                </div>
              </div>
              <div className="ml-2 w-[18px] h-[18px] bg-[url(/border.svg)] bg-[100%_100%]">
                <img
                  className="w-1.5 h-1 mt-[7px] ml-1.5"
                  alt="Chevron down"
                  src="/chevron-down.png"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 p-8">
          <h1 className="[font-family:'Nunito_Sans',Helvetica] font-bold text-[#202224] text-[32px] tracking-[-0.11px] leading-normal">
            Jobs List
          </h1>

          {/* SearchIcon product */}
          <div className="flex justify-between items-center mt-4">
            {/* Filter card */}
            <Card className="w-[679px] h-[70px] bg-[#f8f9fa] border-[0.6px] border-neutral-300 rounded-[10px]">
              <CardContent className="p-0 h-full flex items-center">
                {filterSections.map((section, index) => (
                  <div
                    key={index}
                    className="h-full flex items-center relative"
                  >
                    {index === 0 && (
                      <div className="w-5 h-[22px] mx-6">
                        <div className="relative w-[21px] h-6 -top-px -left-px">
                          <img
                            className="absolute w-[21px] h-2.5 top-0 left-0"
                            alt="Oval"
                            src="/oval-6.svg"
                          />
                          <img
                            className="absolute w-[21px] h-5 top-1 left-0"
                            alt="Path"
                            src="/path-6.svg"
                          />
                        </div>
                      </div>
                    )}

                    <div
                      className={`${index === 0 ? "w-[83px]" : index === 1 ? "w-[149px]" : "w-[158px]"} h-full flex items-center`}
                    >
                      <div className="[font-family:'Nunito_Sans',Helvetica] font-bold text-[#202224] text-sm tracking-[0] leading-normal ml-4">
                        {section.name}
                      </div>

                      {section.hasDropdown && (
                        <div className="w-6 h-6 ml-auto mr-4">
                          <img
                            className="w-3 h-[7px] mt-[9px] ml-1.5"
                            alt="Path"
                            src="/path-4.svg"
                          />
                        </div>
                      )}
                    </div>

                    {section.hasSeparator && (
                      <img
                        className="h-[70px] w-px"
                        alt="Line"
                        src="/line.svg"
                      />
                    )}
                  </div>
                ))}

                {/* Reset filter */}
                <div className="flex items-center ml-auto mr-6">
                  <div className="w-[18px] h-[18px] mr-2">
                    <img
                      className="w-3 h-[15px] mt-px ml-[3px]"
                      alt="Path"
                      src="/path-3.svg"
                    />
                  </div>
                  <div className="[font-family:'Nunito_Sans',Helvetica] font-semibold text-[#ea0234] text-sm tracking-[0] leading-normal">
                    Reset Filter
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SearchIcon product input */}
            <div className="relative w-[253px]">
              <Input
                className="h-[38px] bg-white rounded-[19px] border-[0.6px] border-neutral-300 pl-11 [font-family:'Nunito_Sans',Helvetica] font-normal text-[#202224] text-sm opacity-50"
                placeholder="SearchIcon product name"
              />
              <div className="absolute w-[15px] h-[15px] top-2.5 left-4 opacity-50">
                <SearchIcon className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Jobs table */}
          <Card className="mt-8 border-[0.3px] border-[#b8b8b8] rounded-[14px]">
            <Table>
              <TableHeader className="bg-[#fcfcfc] rounded-t-[14px] border-[0.6px] border-neutral-300">
                <TableRow>
                  <TableHead className="opacity-90 [font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#202224] text-sm pl-[30px]">
                    ID
                  </TableHead>
                  <TableHead className="opacity-90 [font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#202224] text-sm">
                    JOB NAME
                  </TableHead>
                  <TableHead className="opacity-90 [font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#202224] text-sm">
                    DESCRIPTION
                  </TableHead>
                  <TableHead className="opacity-90 [font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#202224] text-sm">
                    EMPLOYER
                  </TableHead>
                  <TableHead className="opacity-90 [font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#202224] text-sm">
                    CATEGORY
                  </TableHead>
                  <TableHead className="opacity-90 [font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#202224] text-sm">
                    STATUS
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job, index) => (
                  <TableRow key={job.id}>
                    <TableCell className="opacity-90 [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#202224] text-sm pl-8">
                      {job.id}
                    </TableCell>
                    <TableCell className="opacity-90 [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#202224] text-sm">
                      {job.name}
                    </TableCell>
                    <TableCell className="opacity-90 [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#202224] text-sm">
                      {job.description}
                    </TableCell>
                    <TableCell className="opacity-90 [font-family:'Nunito_Sans',Helvetica] font-normal text-neutrals-100 text-base whitespace-nowrap">
                      {job.employer}
                    </TableCell>
                    <TableCell className="opacity-90 [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#202224] text-sm">
                      {job.category}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`rounded-[4.5px] ${statusBadges[job.status].bg} opacity-20 px-4 py-1`}
                      >
                        <span
                          className={`${statusBadges[job.status].text} [font-family:'Nunito_Sans',Helvetica] font-bold text-xs`}
                        >
                          {statusBadges[job.status].label}
                        </span>
                      </Badge>
                    </TableCell>
                    {index < jobs.length - 1 && (
                      <img
                        className="absolute w-[1141px] h-px left-0 mt-[51px]"
                        alt="Line"
                        src="/line-2.svg"
                      />
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <div className="opacity-60 [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#202224] text-sm tracking-[0] leading-normal">
              Showing 1-09 of 78
            </div>
            <img
              className="w-[86px] h-[30px]"
              alt="Pagination"
              src="/indicator.png"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

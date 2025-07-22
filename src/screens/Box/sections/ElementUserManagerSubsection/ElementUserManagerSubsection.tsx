import { ChevronDownIcon, FilterIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const ElementUserManagerSubsection = (): JSX.Element => {
  // User data for the table
  const users = [
    {
      id: "00001",
      name: "Christine Brooks",
      email: "example@gmail.com",
      phone: "+44 1245 572 135",
      role: "Employer",
      status: { label: "Completed", color: "bg-[#00b69b] text-[#00b69b]" },
    },
    {
      id: "00002",
      name: "Rosie Pearson",
      email: "example@gmail.com",
      phone: "+44 1245 572 135",
      role: "Student",
      status: { label: "Processing", color: "bg-[#6225ee] text-[#6225ee]" },
    },
    {
      id: "00003",
      name: "Darrell Caldwell",
      email: "example@gmail.com",
      phone: "+44 1245 572 135",
      role: "Student",
      status: { label: "Rejected", color: "bg-[#ee3825] text-[#ef3826]" },
    },
    {
      id: "00004",
      name: "Gilbert Johnston",
      email: "example@gmail.com",
      phone: "+44 1245 572 135",
      role: "Student",
      status: { label: "Completed", color: "bg-[#00b69b] text-[#00b69b]" },
    },
    {
      id: "00005",
      name: "Alan Cain",
      email: "example@gmail.com",
      phone: "+44 1245 572 135",
      role: "Employer",
      status: { label: "Processing", color: "bg-[#6225ee] text-[#6225ee]" },
    },
    {
      id: "00006",
      name: "Alfred Murray",
      email: "example@gmail.com",
      phone: "+44 1245 572 135",
      role: "Employer",
      status: { label: "Completed", color: "bg-[#00b69b] text-[#00b69b]" },
    },
    {
      id: "00007",
      name: "Maggie Sullivan",
      email: "example@gmail.com",
      phone: "+44 1245 572 135",
      role: "Student",
      status: { label: "Processing", color: "bg-[#6225ee] text-[#6225ee]" },
    },
    {
      id: "00008",
      name: "Rosie Todd",
      email: "example@gmail.com",
      phone: "+44 1245 572 135",
      role: "Student",
      status: { label: "On Hold", color: "bg-[#ffa755] text-[#ffa755]" },
    },
    {
      id: "00009",
      name: "Dollie Hines",
      email: "example@gmail.com",
      phone: "+44 1245 572 135",
      role: "Employer",
      status: { label: "In Transit", color: "bg-[#ba29ff] text-[#ba29ff]" },
    },
  ];

  // Navigation items
  const navItems = [
    { label: "Dashboard", active: false, icon: "" },
    { label: "Inbox", active: false, icon: "" },
    { label: "Users", active: true, icon: "" },
    { label: "Jobs", active: false, icon: "" },
    { label: "Settings", active: false, icon: "" },
    { label: "Logout", active: false, icon: "" },
  ];

  // FilterIcon options
  const filterOptions = [
    { label: "FilterIcon By" },
    { label: "Role" },
    { label: "User Status" },
    { label: "Reset Filter", isReset: true },
  ];

  return (
    <div className="w-full h-full bg-white overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-[240px] h-full bg-white border-r border-neutral-200">
          <div className="p-5 flex items-center gap-2">
            <img className="w-8 h-[30.22px]" alt="Logo" src="/frame-3-1.svg" />
            <div className="[font-family:'Clash_Display_Variable-Bold',Helvetica] font-bold text-[#25324b] text-2xl tracking-[1.20px] leading-9">
              JobBoost
            </div>
          </div>

          <nav className="mt-4">
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <div
                  className={`h-[50px] px-10 flex items-center ${
                    item.active
                      ? "bg-[url(/hide-bg---hide-bg-copy-mask-3.png)] bg-[100%_100%]"
                      : ""
                  }`}
                >
                  <span
                    className={`[font-family:'LineAwesome-Medium',Helvetica] font-medium text-[22px] text-center mr-4 ${
                      item.active ? "text-white" : "text-[#202224]"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`[font-family:'Nunito_Sans',Helvetica] font-semibold text-sm tracking-[0.30px] ${
                      item.active ? "text-white" : "text-[#202224]"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                {index === 3 && <Separator className="mx-2 my-1" />}
              </React.Fragment>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 bg-[#f5f6fa]">
          {/* Header */}
          <header className="h-[70px] bg-white flex items-center justify-between px-6 border-b border-neutral-200">
            <div className="relative w-[388px]">
              <Input
                className="pl-10 bg-[#f5f6fa] rounded-[19px] border-neutral-300"
                placeholder="Search"
              />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
            </div>

            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-6 h-[26px]">
                  <img
                    className="w-6 h-[18px]"
                    alt="Notifications"
                    src="/combined-shape.svg"
                  />
                  <div className="absolute w-1.5 h-1.5 top-5 left-[9px] bg-[#ff0000] rounded-[2.25px] opacity-30" />
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-[url(/oval.svg)] flex items-center justify-center">
                  <span className="[font-family:'Nunito_Sans',Helvetica] font-bold text-white text-xs">
                    6
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img className="w-10 h-[27px]" alt="Flag" src="/flag-1.png" />
                <span className="[font-family:'Nunito_Sans',Helvetica] font-semibold text-[#646464] text-sm">
                  English
                </span>
                <img
                  className="w-2 h-[5px]"
                  alt="Drop down"
                  src="/drop-down-1.png"
                />
              </div>

              <div className="flex items-center gap-4">
                <img
                  className="w-11 h-11 rounded-full"
                  alt="Profile"
                  src="/man-438081-960-720-1.png"
                />
                <div>
                  <div className="[font-family:'Nunito_Sans',Helvetica] font-bold text-neutral-700 text-sm">
                    Moni Roy
                  </div>
                  <div className="[font-family:'Nunito_Sans',Helvetica] font-semibold text-[#565656] text-xs">
                    Admin
                  </div>
                </div>
                <ChevronDownIcon className="w-4 h-4 text-neutral-700" />
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-8">
            <h1 className="[font-family:'Nunito_Sans',Helvetica] font-bold text-[#202224] text-[32px] tracking-[-0.11px] mb-6">
              Users Lists
            </h1>

            {/* Filters */}
            <Card className="w-[679px] h-[70px] bg-[#f8f9fa] border-neutral-300 mb-6">
              <CardContent className="p-0 h-full">
                <div className="flex h-full">
                  <div className="flex items-center justify-center w-[45px] border-r border-neutral-300">
                    <FilterIcon className="w-5 h-5" />
                  </div>

                  {filterOptions.map((filter, index) => (
                    <div
                      key={filter.label}
                      className={`flex items-center ${
                        filter.isReset
                          ? "ml-auto text-[#ea0234]"
                          : "border-r border-neutral-300"
                      } ${index === 0 ? "px-6" : "px-4"}`}
                    >
                      <span
                        className={`[font-family:'Nunito_Sans',Helvetica] ${
                          filter.isReset
                            ? "font-semibold text-[#ea0234]"
                            : "font-bold text-[#202224]"
                        } text-sm`}
                      >
                        {filter.label}
                      </span>

                      {!filter.isReset && index > 0 && (
                        <ChevronDownIcon className="ml-4 w-3 h-3" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Users Table */}
            <Card className="border-[0.3px] border-[#b8b8b8] rounded-[14px] mb-6">
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-[#fcfcfc] border-b-[0.6px] border-neutral-300 rounded-t-[14px]">
                    <TableRow>
                      <TableHead className="pl-8 [font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#202224] text-sm opacity-90">
                        ID
                      </TableHead>
                      <TableHead className="[font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#202224] text-sm opacity-90">
                        NAME
                      </TableHead>
                      <TableHead className="[font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#202224] text-sm opacity-90">
                        EMAIL
                      </TableHead>
                      <TableHead className="[font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#202224] text-sm opacity-90">
                        PHONE
                      </TableHead>
                      <TableHead className="[font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#202224] text-sm opacity-90">
                        ROLE
                      </TableHead>
                      <TableHead className="[font-family:'Nunito_Sans',Helvetica] font-extrabold text-[#202224] text-sm opacity-90">
                        STATUS
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow
                        key={user.id}
                        className="border-b border-neutral-200"
                      >
                        <TableCell className="pl-8 py-4 [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#202224] text-sm opacity-90">
                          {user.id}
                        </TableCell>
                        <TableCell className="py-4 [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#202224] text-sm opacity-90">
                          {user.name}
                        </TableCell>
                        <TableCell className="py-4 [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#202224] text-sm opacity-90">
                          {user.email}
                        </TableCell>
                        <TableCell className="py-4 [font-family:'Nunito_Sans',Helvetica] font-normal text-[#25324b] text-base leading-[25.6px]">
                          {user.phone}
                        </TableCell>
                        <TableCell className="py-4 [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#202224] text-sm opacity-90">
                          {user.role}
                        </TableCell>
                        <TableCell className="py-4">
                          <Badge
                            className={`${user.status.color} opacity-20 rounded-[4.5px] px-4 py-1`}
                          >
                            <span
                              className={`[font-family:'Nunito_Sans',Helvetica] font-bold text-xs`}
                            >
                              {user.status.label}
                            </span>
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Pagination */}
            <div className="flex justify-between items-center">
              <div className="opacity-60 [font-family:'Nunito_Sans',Helvetica] font-semibold text-[#202224] text-sm">
                Showing 1-09 of 78
              </div>
              <img
                className="w-[86px] h-[30px]"
                alt="Pagination"
                src="/indicator-1.png"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

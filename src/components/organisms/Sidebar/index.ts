import type { ReactNode } from "react";
import Sidebar from "./Sidebar.module";

export type ContactProps = {
  label: string;
  value: ReactNode;
};

export type SocialProps = {
  url: string;
  label: string;
  logo: string;
};

export type AcademicEducationProps = {
  courseTitle: string;
  institutionName: string;
  period: {
    startYear: string;
    endYear?: string;
  };
};

export type SidebarProps = {
  contactRecords: ContactProps[];
  socialRecords: SocialProps[];
  academicEducationRecords: AcademicEducationProps[];
};

export default Sidebar;

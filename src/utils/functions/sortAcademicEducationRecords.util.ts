import type { AcademicEducationProps } from "../../components/molecules/AcademicEducation/AcademicEducation.interface";

export const sortAcademicEducationRecords = (
  academicEducationRecords: AcademicEducationProps[],
): AcademicEducationProps[] =>
  academicEducationRecords.sort((a, b) => {
    const isSameStartYear = a.period.startYear === b.period.startYear;
    if (isSameStartYear) return (b.period.endYear ?? 0) - (a.period.endYear ?? 0);
    return b.period.startYear - a.period.startYear;
  });

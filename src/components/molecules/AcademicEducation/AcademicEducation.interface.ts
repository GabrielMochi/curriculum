export type AcademicEducationProps = {
  courseTitle: string;
  institutionName: string;
  period: {
    startYear: number;
    endYear?: number;
  };
  isIncomplete?: boolean;
};

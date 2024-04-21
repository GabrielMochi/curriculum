export type JobDetailsProps = {
  company: string;
  jobTitle: string;
  period: {
    startDate: Date;
    endDate?: Date;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  description: string;
  skills: string[];
};

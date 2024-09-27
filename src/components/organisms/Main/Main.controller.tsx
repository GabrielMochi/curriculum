import type { MainControllerReturn } from "./Main.interface";
import type { JobDetailsProps } from "../../molecules/JobDetails/JobDetails.interface";
import useTranslationController from "../../../common/controllers/Translation.controller";
import { TextStructureStack } from "../../../common/models/TextStructureStack.model";
import { BulletPoints } from "../../../common/models/BulletPoints.model";
import { Months } from "../../../constants";

const useMainController = (): MainControllerReturn => {
  const { t } = useTranslationController();

  const estateablyJobDetails: JobDetailsProps = {
    company: t("professionalHistory.records.estateably.company"),
    jobTitle: t("professionalHistory.records.estateably.jobTitle"),
    period: {
      startDate: new Date(2022, Months.MAY),
    },
    location: {
      city: t("professionalHistory.records.estateably.location.city"),
      state: t("professionalHistory.records.estateably.location.state"),
      country: t("professionalHistory.records.estateably.location.country"),
    },
    description: new TextStructureStack(
      new BulletPoints(
        t("professionalHistory.records.estateably.description.highlights", { returnObjects: true }),
      ),
    ).toMarkdown(),
    skills: [
      "Node.js",
      "NestJS",
      "React",
      "Redux",
      "TypeScript",
      "JavaScript",
      "AWS S3",
      "MongoDB",
      "Redis",
      "Docker",
      "Cypress",
      "Cucumber",
      "Jest",
      "Stripe",
      "Swagger",
    ],
  };

  const monisJobDetails: JobDetailsProps = {
    company: t("professionalHistory.records.monis.company"),
    jobTitle: t("professionalHistory.records.monis.jobTitle"),
    period: {
      startDate: new Date(2020, Months.OCTOBER),
      endDate: new Date(2022, Months.MAY),
    },
    location: {
      city: t("professionalHistory.records.monis.location.city"),
      state: t("professionalHistory.records.monis.location.state"),
      country: t("professionalHistory.records.monis.location.country"),
    },
    description: new TextStructureStack(
      new BulletPoints(
        t("professionalHistory.records.monis.description.highlights", { returnObjects: true }),
      ),
    ).toMarkdown(),
    skills: [
      "Node.js",
      "NestJS",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "Redis",
      "GCP",
      "Docker",
      "Cypress",
      "Jest",
      "Flutter",
      "Stripe",
      "Auth0",
    ],
  };

  const mutantJobDetails: JobDetailsProps = {
    company: t("professionalHistory.records.mutant.company"),
    jobTitle: t("professionalHistory.records.mutant.jobTitle"),
    period: {
      startDate: new Date(2020, Months.MAY),
      endDate: new Date(2020, Months.OCTOBER),
    },
    location: {
      city: t("professionalHistory.records.mutant.location.city"),
      state: t("professionalHistory.records.mutant.location.state"),
      country: t("professionalHistory.records.mutant.location.country"),
    },
    description: new TextStructureStack(
      new BulletPoints(
        t("professionalHistory.records.mutant.description.highlights", { returnObjects: true }),
      ),
    ).toMarkdown(),
    skills: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "ElasticSearch",
      "Kibana",
      "Docker",
      "Bitbucket",
      "Google API's",
      "Scrum",
      "Jira",
      "Swagger",
      "AWS",
    ],
  };

  const kpmgJobDetails: JobDetailsProps = {
    company: t("professionalHistory.records.kpmg.company"),
    jobTitle: t("professionalHistory.records.kpmg.jobTitle"),
    period: {
      startDate: new Date(2017, Months.NOVEMBER),
      endDate: new Date(2020, Months.MAY),
    },
    location: {
      city: t("professionalHistory.records.kpmg.location.city"),
      state: t("professionalHistory.records.kpmg.location.state"),
      country: t("professionalHistory.records.kpmg.location.country"),
    },
    description: new TextStructureStack(
      new BulletPoints(
        t("professionalHistory.records.kpmg.description.highlights", { returnObjects: true }),
      ),
    ).toMarkdown(),
    skills: [
      "Node.js",
      "Vue.js",
      "Nuxt",
      "JavaScript",
      "MongoDB",
      "Redis",
      "IIS",
      "IBM Cloud",
      "Azure",
      "Selenium",
      "Puppeteer",
      "Python",
      "R",
    ],
  };

  const britechJobDetails: JobDetailsProps = {
    company: t("professionalHistory.records.britech.company"),
    jobTitle: t("professionalHistory.records.britech.jobTitle"),
    period: {
      startDate: new Date(2016, Months.AUGUST),
      endDate: new Date(2017, Months.MAY),
    },
    location: {
      city: t("professionalHistory.records.britech.location.city"),
      state: t("professionalHistory.records.britech.location.state"),
      country: t("professionalHistory.records.britech.location.country"),
    },
    description: new TextStructureStack(
      new BulletPoints(
        t("professionalHistory.records.britech.description.highlights", { returnObjects: true }),
      ),
    ).toMarkdown(),
    skills: [
      "Node.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Aurelia",
      "MySQL",
      "IBM Watson",
      "NLP",
    ],
  };

  return {
    t,
    jobDetailsRecords: [
      estateablyJobDetails,
      monisJobDetails,
      mutantJobDetails,
      kpmgJobDetails,
      britechJobDetails,
    ],
  };
};

export default useMainController;

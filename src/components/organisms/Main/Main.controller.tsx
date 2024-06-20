import type { MainControllerReturn } from "./Main.interface";
import type { JobDetailsProps } from "../../molecules/JobDetails/JobDetails.interface";
import useTranslationController from "../../../common/controllers/Translation.controller";
import { TextStructureStack } from "../../../common/models/TextStructureStack.model";
import { BulletPoints } from "../../../common/models/BulletPoints.model";

const useMainController = (): MainControllerReturn => {
  const { t } = useTranslationController();

  const estateablyJobDetails: JobDetailsProps = {
    company: t("professionalHistory.records.estateably.company"),
    jobTitle: t("professionalHistory.records.estateably.jobTitle"),
    period: {
      startDate: new Date(2022, 4),
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
      "TypeScript",
      "Nest.js",
      "Docker",
      "MongoDB",
      "Redis",
      "React",
      "Next.js",
      "Stripe",
      "Jest",
    ],
  };

  const monisJobDetails: JobDetailsProps = {
    company: t("professionalHistory.records.monis.company"),
    jobTitle: t("professionalHistory.records.monis.jobTitle"),
    period: {
      startDate: new Date(2020, 9),
      endDate: new Date(2022, 3),
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
      "TypeScript",
      "Nest.js",
      "Docker",
      "PostgreSQL",
      "Redis",
      "React",
      "Next.js",
      "GCP",
      "Stripe",
      "Jest",
      "Flutter",
      "Auth0",
    ],
  };

  const mutantJobDetails: JobDetailsProps = {
    company: t("professionalHistory.records.mutant.company"),
    jobTitle: t("professionalHistory.records.mutant.jobTitle"),
    period: {
      startDate: new Date(2020, 4),
      endDate: new Date(2020, 9),
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
      "Docker",
      "AWS",
      "Bitbucket",
      "Google API's",
      "ElasticSearch",
      "Kibana",
      "Scrum",
      "Jira",
      "Swagger",
    ],
  };

  const kpmgJobDetails: JobDetailsProps = {
    company: t("professionalHistory.records.kpmg.company"),
    jobTitle: t("professionalHistory.records.kpmg.jobTitle"),
    period: {
      startDate: new Date(2017, 10),
      endDate: new Date(2020, 4),
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
      "MongoDB",
      "Redis",
      "IIS",
      "IBM Cloud",
      "Azure",
      "Selenium",
      "Puppeteer",
      "Python",
      "R",
      "Java",
    ],
  };

  const britechJobDetails: JobDetailsProps = {
    company: t("professionalHistory.records.britech.company"),
    jobTitle: t("professionalHistory.records.britech.jobTitle"),
    period: {
      startDate: new Date(2016, 7),
      endDate: new Date(2017, 4),
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
      "HTML",
      "CSS",
      "IBM Watson",
      "NLP",
      "Aurelia",
      "TypeScript",
      "MySQL",
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

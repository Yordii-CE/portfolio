import apalworkflow from "./assets/work_screenshots/apalworkflow.png";
export function getJobData(type) {
  try {
    const data = [
      {
        name: "Apalworkflow",
        content: "Hello world",
        image: apalworkflow,
        technologiesName: ["React", "Javascript"],
        urlToSite: "https:://youtube.com",
        type: "Projects",
      },
      {
        name: "Apalworkflow",
        content: "Hello world",
        image: apalworkflow,
        technologiesName: ["React", "Javascript"],
        urlToSite: "https:://youtube.com",
        type: "Projects",
      },
      {
        name: "Apalworkflow",
        content: "Hello world",
        image: apalworkflow,
        technologiesName: ["React", "Javascript"],
        urlToSite: "https:://youtube.com",
        type: "Samples",
      },
      {
        name: "Apalworkflow",
        content: "Hello world",
        image: apalworkflow,
        technologiesName: ["React", "Javascript"],
        urlToSite: "https:://youtube.com",
        type: "Others",
      },
    ];
    return data.filter((el) => el.type == type);
  } catch (error) {
    throw error;
  }
}

export default {
  getJobData,
};

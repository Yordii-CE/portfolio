import React, { createContext, useState } from "react";
import { getJobData } from "./Service";

const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [option, setOption] = useState('Projects')
  const jobData = getJobData(option);

  return <JobContext.Provider value={{jobData,option, setOption}}>{children}</JobContext.Provider>;
};

export { JobContext, JobProvider };

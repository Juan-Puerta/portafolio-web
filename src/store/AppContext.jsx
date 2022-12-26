import React from "react";

const AppContext = React.createContext();

export const AppContextWrapper = (props) => {
  const info_pro = [
    {
      title: "¿Cómo voy?",
      description: "Web project for students to track their grades",
      link: "https://github.com/Juan-Puerta/ComoVoy",
    },
    {
      title: "Grafo universitario",
      description:
        "Project that helps ICESI University students find the shortest way to get around the campus",
      link: "https://github.com/Juan-Puerta/ProyectoGrafo",
    },
    {
      title: "Foro",
      description:
        "Project for an online forum so that anyone can comment on what they want to say",
      link: "https://github.com/Juan-Puerta/tarea-foro",
    },
    {
      title: "Metro Cali Simulator",
      description:
        "Software that reads the location data of the buses of the MIO transport system and calculates the level of delay of the buses",
      link: "https://github.com/Juan-Puerta/MetroCaliSimulator",
    },
    {
      title: "Degree project",
      description:
        "Creation of an analytics model for the detection of fake news on Colombian politics",
      link: "https://github.com/Juan-Puerta/proyecto_de_grado",
    },
    {
      title: "List of countries",
      description:
        "Web project that displays information on all the countries of the world",
      link: "https://github.com/Juan-Puerta/lista-paises",
    },
  ];

  const info_tec = [
    {
      title: "Front-End",
      description:
        "I have been able to work mainly with Frameworks such as: Vue JS and React JS, having more knowledge and mastery in React JS. I also have strong knowledge in HTML and CSS.",
    },
    {
      title: "Back-End",
      description:
        "I have worked throughout my university career with programming languages such as: Python, Java, JavaScript and C#, having strong knowledge in the first three. I have developed Back-Ends using libraries such as Django - Python, Node JS - JavaScript and Spring Boot - Java.",
    },
    {
      title: "Cloud computing",
      description:
        "Mainly I have worked with Azure, specifically with Azure Funtions such as HttpTrigger and ServiceBusQueueTrigger, I have managed different services offered by Azure such as: App Services, Key Vault, Storage Account. Finally, I have been able to deploy my code using Azure DevOps and Pipeline CI/CS. I also have knowledge in AWS as I took a course in college on that technology.",
    },
    {
      title: "Data Science & Machine Learning",
      description:
        "I have had the opportunity to participate in several projects related to data science and machine learning. I have been in projects that have to do with fake news detection, image processing and data analysis.",
    },
  ];

  const state = { info_tec, info_pro };

  return (
    <AppContext.Provider value={state} displayName="AppContext">
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;

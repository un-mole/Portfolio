import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "SJ Chikan Vatika",
      image: "Sj.png", // Replace with actual image path
      description:
        "Ecommerce website to buy and sell Chikankari Clothes, developed using MERN",
    },
    {
      name: "Video Games Sales Predictor",
      image: "VG.png", // Replace with actual image path
      description:
        "Machine Learning project to Predict Global sales based on Regional data, developed using Python Libraries and Jupyter Notebook",
    },
    {
      name: "Glaucoma Detection",
      image: "Glaucoma.png", // Replace with actual image path
      description:
        "Machine Learning Project with Interactive front-end and ChatBot, developed using Reactjs and IBM facilities",
    },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen p-5">
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-bold mb-5 text-center">Projects</h2>
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-3">{project.name}</h3>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover mb-3 rounded"
              />
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

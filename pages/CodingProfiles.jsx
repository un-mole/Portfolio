import React from "react";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "Codeforces",
      image: "codeforces.png", // Replace with actual image path
      description: "Specialist(1559) on Codeforces",
    },
    {
      name: "CodeChef",
      image: "codechef.png", // Replace with actual image path
      description: "4*(1949) on CodeChef",
    },
    {
      name: "LeetCode",
      image: "leetcode.png", // Replace with actual image path
      description: "Knight(2123) on LeetCode",
    },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen p-5">
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-bold mb-5 text-center">Coding Profiles</h2>
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded shadow">
              <h3 className="text-xl font-bold mb-3">{profile.name}</h3>
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-40 object-cover mb-3 rounded"
              />
              <p className="text-gray-400">{profile.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useEffect, useState, useRef } from "react";
import Knight from "../src/assets/Knight.gif";

export default function CodingProfiles() {
  const [isVisible, setIsVisible] = useState(false);
  const cpRef = useRef(null);
  const [responseData, setResponseData] = useState(null);
  const [badgesData, setBadgesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/unm0l/solved");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResponseData(data);
      } catch (error) {
        console.error("Error fetching solved data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/unm0l/badges");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBadgesData(data);
      } catch (error) {
        console.error("Error fetching solved data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cpRef.current) {
      observer.observe(cpRef.current);
    }

    return () => {
      if (cpRef.current) {
        observer.unobserve(cpRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cpRef}
      className={`h-screen justify-center items-center flex flex-col ${
        isVisible ? "scale-100" : "scale-0"
      } transition-transform duration-1000`}
    >
      {responseData && (
        <div className="flex items-center gap-2 justify-between md:flex-row flex-col">
          <div className="text-2xl font-medium bg-red-500 px-3 py-1 rounded-lg">
            Total Solved- {responseData.solvedProblem}
          </div>
          <PieChart width={300} height={300}>
            <Pie
              data={[
                { name: "Easy", value: responseData.easySolved },
                { name: "Medium", value: responseData.mediumSolved },
                { name: "Hard", value: responseData.hardSolved },
              ]}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
              dataKey="value"
            >
              <Cell fill="#1b4004" />
              <Cell fill="#918407" />
              <Cell fill="#961206" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      )}
      {/* <div className="h-full flex">
        {badgesData && (
          <div className="flex">
            {badgesData.badges.map((item, index) => (
              <div key={index}>
                <img
                  src={
                    item.icon[0] === "/"
                      ? "https://assets.leetcode.com" + item.icon
                      : item.icon
                  }
                  alt={"https://leetcode.com" + item.icon}
                  className="h-1/4"
                />
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}

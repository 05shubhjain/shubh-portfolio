import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          background: "rgba(255,255,255,0.04)",
          padding: "3rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
          lineHeight: 1.8,
        }}
      >
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.9)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Shubh Jain</strong> — a passionate Machine Learning and
          Artificial Intelligence enthusiast currently pursuing a B.Tech in{" "}
          <strong>Computer Science Engineering (Data Science)</strong> at{" "}
          <strong>IPS Academy, Indore</strong>.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          I love building intelligent systems using Machine Learning, Deep
          Learning, NLP, and Data Analysis. I enjoy working on AI-powered
          projects such as predictive models, chatbots, analytics dashboards, and
          full-stack applications.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          I’ve developed 5+ websites, 2 Android apps, participated in multiple
          hackathons, collaborated in AI research, and led workshops on Machine
          Learning and Data Visualization. My goal is to contribute to impactful
          and scalable AI-driven solutions.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.2rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            
            {/* --- B.Tech --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.6rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.3rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.Tech in Computer Science (Data Science)
                </h4>

                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 4 }}>
                  <strong>IPS Academy, Indore</strong>
                </p>

                <p style={{ color: "rgba(255,255,255,0.75)" }}>
                  2023 – 2027 (Present) | CGPA: 8.75 / 10
                </p>
              </div>
            </motion.div>

            {/* --- Class 12 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.6rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.3rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary (Class 12)
                </h4>

                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 4 }}>
                  <strong>Delhi Public School, Gwalior</strong>
                </p>

                <p style={{ color: "rgba(255,255,255,0.75)" }}>
                  2022-23 | CBSE Board | 70%
                </p>
              </div>
            </motion.div>

            {/* --- Class 10 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.6rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.3rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (Class 10)
                </h4>

                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 4 }}>
                  <strong>Delhi Public School, Gwalior</strong>
                </p>

                <p style={{ color: "rgba(255,255,255,0.75)" }}>
                  2020-21 | CBSE Board | 92%
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;

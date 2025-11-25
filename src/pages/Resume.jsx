import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A snapshot of my academic background, projects and skills — focused on AI & Data Science.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👋 Shubh Jain
            </h3>
            <p style={{ marginTop: 6, fontSize: 15, color: "#ccc" }}>
              B.Tech in Data Science — IPS Academy, Indore 
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Indore, Madhya Pradesh, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ jainshubh2206@gmail.com • 📞 +91 9329375694
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff22, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.06)",
              maxWidth: 420,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary</strong>
            <p style={{ marginTop: 8, color: "#ccc" }}>
              Aspiring Data Scientist currently pursuing B.Tech in Data Science. Completed
              multiple ML projects including time-series forecasting and supervised learning.
              Experienced with Python, Pandas, scikit-learn, and basic deep learning workflows.
              Building practical web and mobile demos using React, Streamlit and Flutter/FlutterFlow.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech — Data Science</strong> — IPS Academy, Indore (2023 – present) <br />
              <span style={{ color: "#aaa" }}>CGPA: 8.7</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Standard</strong> — Delhi Public School, Gwalior (CBSE, 2022-23) <br />
              <span style={{ color: "#aaa" }}>Percentage: 70% </span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Standard</strong> — Delhi Public School, Gwalior (CBSE, 2020-21)<br />
              <span style={{ color: "#aaa" }}>Percentage: 92% </span>
            </li>
          </ul>
        </motion.div>

        {/* Projects (reworked to be attractive & short) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Highlight Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>• <strong>Darshan Setu</strong> — Real-time crowd-density tracker for temples (React, live deployment).</li>
            <li>• <strong>Breast Cancer Detector</strong> — Mammogram-based detection using YOLO + CNN for high-sensitivity screening.</li>
            <li>• <strong>DocuChat</strong> — Document Q&A chatbot powered by embeddings and a generative model for instant answers.</li>
            <li>• <strong>Face Recognition Attendance</strong> — Robust webcam attendance system using face_recognition + OpenCV.</li>
            <li>• <strong>Indian Sign Language Interpreter</strong> (in progress) — Vision model prototype translating sign gestures to text.</li>
            <li>• <strong>Weather Forecasting</strong> — Time-series forecasting model with a Streamlit web UI for approachable predictions.</li>
            <li>• <strong>Laptop Price Predictor</strong> — End-to-end regression pipeline predicting realistic laptop prices from specs.</li>
            <li>• <strong>Mobile App Suite</strong> — Expense tracker, Health monitor and Food delivery prototypes (Flutter / FlutterFlow).</li>
            <li>• <strong>Mental Health Analyzer</strong> — Prototype NLP model analyzing mood signals from short text entries.</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "TensorFlow",
              "PyTorch",
              "OpenCV",
              "face_recognition",
              "SQL",
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Flutter / FlutterFlow",
              "Power BI",
              "Git",
              "DSA",
              "Excel",
              "Streamlit",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,180,255,0.12)" }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                  border: "1px solid rgba(255,255,255,0.02)",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 GeekForGeeks", link: "https://www.geeksforgeeks.org/user/jainshudifp/" },
            { name: "💻 GitHub", link: "https://github.com/05shubhjain" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/shubh-jain-860071291/" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.08, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <iframe
            src="/Shubh_Jain_s_CV.pdf"
            title="Shubh Jain Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/Shubh_Jain_s_CV.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}

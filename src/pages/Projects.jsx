import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import darshanImg from '../../public/darshan setu.png'
import nepSinImg from '../../public/nepsin.png'
import portfolioImg from '../../public/portfolio.png'
import powerbiImg from '../../public/powerbi.webp'
import analyticsImg from '../../public/Analytics Report.webp'
import weatherImg from '../../public/weather forcast.png'
import laptopImg from '../../public/Laptop Price Predictor.png'
import expenseImg from '../../public/expense tracker.png'
import healthImg from '../../public/health monitor.png'
import foodImg from '../../public/food delivery.png'
import trackingImg from '../../public/tracking.png'

const PROJECTS = [
  {
    title: '🖥️ Darshan Setu Website', ///////////////////////////// COMPLETED ////////////////////////////////////
    desc: 'Website to track real-time crowd density in temples across Gujarat.',
    ss: darshanImg,
    tech: ['Typescript', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://darshan-setu.vercel.app/',
    code: 'https://github.com/05shubhjain/darshan-setu'
  },
  {
    title: '🧠 Nepali & Sinhala Translator', ///////////////////////////// COMPLETED ////////////////////////////////////
    desc: 'Multilingual translator converting Nepali and Sinhala text into English.',
    ss: nepSinImg,
    tech: ['Python', 'Typescript', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://nep-sin.vercel.app/',
    code: 'https://github.com/05shubhjain/NepSin'
  },
  {
    title: '💼 Portfolio Website', ///////////////////////////// COMPLETED ////////////////////////////////////
    desc: 'Dynamic personal website showcasing technical projects, skills, and certifications.',
    ss: portfolioImg,
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://shubh-s-portfolio.vercel.app/',
    code: 'https://github.com/05shubhjain/Shubh-s_Portfolio'
  },
  {
    title: '💻 Laptop Price Predictor', ///////////////////////////// COMPLETED ////////////////////////////////////
    desc: 'ML model predicting laptop prices based on specifications and brand.',
    ss: laptopImg,
    tech: ['scikit-learn', 'Pandas', 'Pandas'],
    live: '#',
    code: 'https://github.com/05shubhjain/Laptop-prediction'
  },
  {
    title: '⛈️ Weather Forecasting Model', ///////////////////////////// COMPLETED ////////////////////////////////////
    desc: 'AI-powered time-series model for accurate weather predictions.',
    ss: weatherImg,
    tech: ['Streamlit', 'Pandas', 'Matplotlib'],
    live: 'https://weather-forecasting-shubh.vercel.app/',
    code: 'https://github.com/05shubhjain/Weather-Forecasting'
  },
  {
    title: '📊 Power BI Dashboard', ///////////////////////////// COMPLETED ////////////////////////////////////
    desc: 'Developed an interactive Power BI dashboard for business analytics, enabling detailed reports and KPI tracking.',
    ss: powerbiImg,
    tech: ['MySQL', 'Power BI', 'Excel'],
    live: '#',
    code: '#'
  },
  {
    title: '📃 Analytics Report', ///////////////////////////// COMPLETED ////////////////////////////////////
    desc: 'Created detailed Power BI reports visualizing sales, performance metrics, and trends.',
    ss: analyticsImg,
    tech: ['MySQL', 'Power BI', 'Excel'],
    live: '#',
    code: '#'
  },
  {
    title: '📱 Expense Tracker', ///////////////////////////// COMPLETED ////////////////////////////////////
    desc: 'Mobile app for managing and analyzing financial expenses with interactive dashboards.',
    ss: expenseImg,
    tech: ['Flutter', 'Dart', 'Figma'],
    live: '#',
    code: '#',
    isMobile: true
  },
  {
    title: '🩺 Health Monitoring App', ///////////////////////////// COMPLETED ////////////////////////////////////
    desc: 'App to track vital health parameters and provide personalized wellness insights.',
    ss: healthImg,
    tech: ['Flutter', 'Dart', 'Figma'],
    live: '#',
    code: '#',
    isMobile: true
  },
  {
    title: '🍱 Food Delivery App', ///////////////////////////// COMPLETED ////////////////////////////////////
    desc: 'Delivers healthy meals and customized nutrition plans straight to your doorstep.',
    ss: foodImg,
    tech: ['Flutter', 'Dart', 'FlutterFlow'],
    live: '#',
    code: '#',
    isMobile: true
  },
  {
    title: '🚌 Public Transport App', ///////////////////////////// COMPLETED ////////////////////////////////////
    desc: 'Real-time GPS-based transit system improving public transportation experience.',
    ss: trackingImg,
    tech: ['Flutter', 'Dart', 'FlutterFlow'],
    live: '#',
    code: '#',
    isMobile: true
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div
        className="card"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: 16,
          padding: 30
        }}
      >
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation, and modern UI design.
        </p>

        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background:
                  'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div
                className="ss"
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: 12, overflow: 'hidden' }}
              >
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: p.isMobile ? '260px' : '200px',
                    objectFit: 'contain',          // so portrait images aren't cropped
                    borderRadius: 12,
                    backgroundColor: '#050816'     // fills empty space around contain
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3
                  style={{
                    fontSize: 18,
                    color: '#0ea5e9',
                    marginBottom: 6
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: '#bbb',
                    marginBottom: 8,
                    lineHeight: 1.6
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 10
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 10
                  }}
                >
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background:
                        'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

import React from 'react'
import Title from '../Layouts/Title'
import ProjectCard from './ProjectCard'
import { ecommerece, expensestracker, foodorder1, galleryApp, placePicker, quiz, socialMedia, wareHouseManageMent,ai_assistant } from '../../images'
import ToolTip from '../Layouts/ToolTip'

export default function Projects() {
  return (
    <section
    id="projects"
    className="w-full pb-20 border-b-[1px] border-b-black mt-5 px-4 md:px-10"
  >
    {/* Title */}
    <div className="flex justify-center items-center text-center">
      <Title title={"Innovations in Action"} des={"My Projects"} />
    </div>

    {/* Project Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 mt-5">
      <ProjectCard
        title="SOCIAL MEDIA WEB CLONE"
        des="A fully functional social media web application clone built using React.js and Firebase. Features include user authentication, real-time chat, post creation, and a dynamic feed. Designed for an engaging user experience with modern UI components."
        src={socialMedia}
        link={"https://github.com/Srinu7231/MERN-Stack-Social-Media-application"}
      />
      <ProjectCard
        title="E-COMMERCE WEB APPLICATION"
        des="MongoDB, Stripe. We are going to use Redux for state management to implement Authentication & Authorization."
        src={ecommerece}
        link={"https://github.com/Srinu7231/MERN-E-Commerce-Application"}
      />
      <ProjectCard
        title="EXPENSES TRACKER MOBILE & WEB"
        des="A robust expense tracking application that helps users manage and visualize their financial data effectively. Built using React Native and Firebase, featuring real-time sync and intuitive charts for a seamless experience."
        src={expensestracker}
        link={"https://github.com/Srinu7231/expense-Tracker"}
      />
      <ProjectCard
        title="PLACES PICKER"
        des="A travel guide application that provides users with a list of cities to explore. Users can tap to select cities, which are dynamically added to an input field. Selected cities can be removed by tapping on them in the input field. The app acts as a comprehensive travel companion, offering recommendations for the best places to visit, affordable hotels, and convenient transportation options."
        src={placePicker}
      />
      <ProjectCard
        title= "AI Voice Assistant"
        des= "A Python-based voice assistant integrated with OpenAI’s API. It supports natural language conversations, tells jokes or stories, provides weather updates, performs online searches, and sends emails through voice commands. Built with speech recognition and text-to-speech for interactive voice control. More features like WhatsApp calling, job applications, and bookings are planned."
        src={ai_assistant}
        link='https://github.com/Srinu7231/AI-Voice-Assistant-Automation-Chatbot-Integration-'
      />
      <ProjectCard
        title="GALLERY MOBILE APPLICATION"
        des="A mobile application designed to organize, view, and manage images with an attractive and minimalist UI. Built with React Native, it supports album creation, image sharing, and a responsive layout."
        src={galleryApp}
        msg='Internal Project'
      />
      <ProjectCard
        title="WAREHOUSE MANAGEMENT MOBILE APPLICATION"
        des="An enterprise-grade application to streamline warehouse operations. Features include inventory management, order tracking, and real-time data visualization, developed with React Native to enhance operational efficiency."
        src={wareHouseManageMent}
        msg='Internal Project'
      />
      <ProjectCard
        title="QUIZ MOBILE APPLICATION"
        des="An interactive quiz application that allows users to participate in multiple-choice quizzes with real-time score tracking. Designed with React Native to provide an engaging and visually appealing experience for learners."
        src={quiz}
        link='https://github.com/Srinu7231/Quiz-App'
      />
    </div>
  </section>
  )
}

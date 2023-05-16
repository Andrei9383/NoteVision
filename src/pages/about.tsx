/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react'

function About (): JSX.Element {
  const [selectedButton, setSelectedButton] = useState('Default')

  const handleButtonClick = (title: any) => {
    setSelectedButton(title)
  }

  const renderContent = () => {
    switch (selectedButton) {
      case 'Default':
        return (
          <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Welcome to NoteVision!</h2>
            <p className="text-lg">
              At NoteVision, we are dedicated to revolutionizing the way you optimize your notes and unlock your creativity. We believe that effective note-taking is the foundation for knowledge retention and innovative thinking. Our mission is to provide you with a powerful platform to create, organize, and visualize your notes and ideas effortlessly.
            </p>
          </div>
        )
      case 'Split Notes':
        return (
          <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Split Your Notes into Notebooks and Pages</h2>
            <p className="text-lg">
              With NoteVision, you can take control of your note-taking experience. Our intuitive interface allows you to split your notes into notebooks and pages, ensuring seamless organization and easy access to your information.
            </p>
          </div>
        )
      case 'Create Mind Maps':
        return (
          <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Create Mind Maps and Visualize Your Ideas</h2>
            <p className="text-lg">
              We go beyond conventional note-taking by empowering you to create mind maps, diagrams, and other visual representations of your thoughts, helping you explore connections and spark new insights.
            </p>
          </div>
        )
      case 'Our Journey':
        return (
          <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg">
              Our journey began with a shared passion for optimizing productivity and enhancing the learning process. As a team of dedicated developers, designers, and enthusiasts, we have poured our expertise and creativity into building NoteVision from the ground up. We have crafted a feature-rich, user-friendly platform that caters to the diverse needs of students, professionals, and lifelong learners.
            </p>
          </div>
        )
      case 'Continuous Improvement':
        return (
          <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Continuous Improvement and Innovation</h2>
            <p className="text-lg">
              What sets NoteVision apart is our commitment to continuous improvement and innovation. We value your feedback and actively seek to enhance our platform based on your suggestions and evolving needs. We strive to stay at the forefront of technology, integrating the latest advancements to provide you with a seamless and cutting-edge note-taking experience.
            </p>
          </div>
        )
      case 'Join Us':
        return (
          <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Join Us on this Exciting Journey</h2>
            <p className="text-lg">
              Join us on this exciting journey as we empower you to unleash your full potential through optimized note-taking and dynamic visualization. Whether you&apos;re a student striving for academic excellence, a professional seeking to boost productivity, or a creative mind craving a digital canvas, NoteVision is here to support you every step of the way.
            </p>
          </div>
        )
      default:
        return null
    }
  }

  return (
  <>
    <div className="bg-white p-4 mb-8 rounded-lg">
      Navbar
    </div>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
          <button
            className="w-full p-2 rounded-lg ${ selectedButton === 'Default' ? 'bg-blue-500 text-white' : 'bg-gray-200' }"
            onClick={() => { handleButtonClick('Default') }}
          >
            What is NoteVision?
          </button>
        </div>
        <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
          <button
            className="w-full p-2 rounded-lg ${ selectedButton === 'Split Notes' ? 'bg-blue-500 text-white' : 'bg-gray-200' }"
            onClick={() => { handleButtonClick('Split Notes') }}
          >
            Split Your Notes
          </button>
        </div>
        <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
          <button
          className="w-full p-2 rounded-lg ${ selectedButton === 'Create Mind Maps' ? 'bg-blue-500 text-white' : 'bg-gray-200' }"
          onClick={() => { handleButtonClick('Create Mind Maps') }}
          >
            Create Mind Maps
          </button>
        </div>
        <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
          <button
          className="w-full p-2 rounded-lg ${ selectedButton === 'Our Journey' ? 'bg-blue-500 text-white' : 'bg-gray-200' }"
          onClick={() => { handleButtonClick('Our Journey') }}
          >
            Our Journey
          </button>
        </div>
        <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
          <button
          className="w-full p-2 rounded-lg ${ selectedButton === 'Continuous Improvement' ? 'bg-blue-500 text-white' : 'bg-gray-200' }"
          onClick={() => { handleButtonClick('Continuous Improvement') }}
          >
            Continuous Improvement
          </button>
        </div>
        <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-6">
          <button
          className="w-full p-2 rounded-lg ${ selectedButton === 'Join Us' ? 'bg-blue-500 text-white' : 'bg-gray-200' }"
          onClick={() => { handleButtonClick('Join Us') }}
          >
            Join Us
          </button>
        </div>
      </div>
    <div className="mt-8">
    {renderContent()}
  </div>
  <div className="bg-white p-4 mb-8 rounded-lg p-4 inset-x-0 bottom-0 absolute h-16 mb-0">
    Footer
  </div>
  </div>
</>
  )
}

export default About

//@ts-nocheck
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
export default function Example(): JSX.Element {
  const [open, setOpen] = useState(1);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <div>
        <div className="mt-48">
          <div>
            <div className="text-center">
              <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-black">
                About{" "}
              </span>
              <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500">
                NoteVision
              </span>
            </div>
          </div>
          <div className="mt-32 text-center mx-[5%]">
            <Accordion open={open === 1}>
              <AccordionHeader
                className="w-auto ml-[43.5%]"
                onClick={() => {
                  handleOpen(1);
                }}
              >
                Welcome to NoteVision!
              </AccordionHeader>
              <AccordionBody className="text-lg">
                At NoteVision, we are dedicated to revolutionizing the way you
                optimize your notes and unlock your creativity. We believe that
                effective note-taking is the foundation for knowledge retention
                and innovative thinking. Our mission is to provide you with a
                powerful platform to create, organize, and visualize your notes
                and ideas effortlessly.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader
                className="w-auto ml-[45.6%]"
                onClick={() => {
                  handleOpen(2);
                }}
              >
                Split Your Notes
              </AccordionHeader>
              <AccordionBody className="text-lg">
                With NoteVision, you can take control of your note-taking
                experience. Our intuitive interface allows you to split your
                notes into notebooks and pages, ensuring seamless organization
                and easy access to your information.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader
                className="w-auto ml-[45.1%]"
                onClick={() => {
                  handleOpen(3);
                }}
              >
                Create Mind Maps
              </AccordionHeader>
              <AccordionBody className="text-lg">
                We go beyond conventional note-taking by empowering you to
                create mind maps, diagrams, and other visual representations of
                your thoughts, helping you explore connections and spark new
                insights.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
              <AccordionHeader
                className="w-auto ml-[46.8%]"
                onClick={() => {
                  handleOpen(4);
                }}
              >
                Our Journey
              </AccordionHeader>
              <AccordionBody className="text-lg">
                Our journey began with a shared passion for optimizing
                productivity and enhancing the learning process. As a team of
                dedicated developers, designers, and enthusiasts, we have poured
                our expertise and creativity into building NoteVision from the
                ground up. We have crafted a feature-rich, user-friendly
                platform that caters to the diverse needs of students,
                professionals, and lifelong learners.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5}>
              <AccordionHeader
                className="w-auto ml-[43.2%]"
                onClick={() => {
                  handleOpen(5);
                }}
              >
                Continuous Improvement
              </AccordionHeader>
              <AccordionBody className="text-lg">
                What sets NoteVision apart is our commitment to continuous
                improvement and innovation. We value your feedback and actively
                seek to enhance our platform based on your suggestions and
                evolving needs. We strive to stay at the forefront of
                technology, integrating the latest advancements to provide you
                with a seamless and cutting-edge note-taking experience.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6}>
              <AccordionHeader
                className="w-auto ml-[48.1%]"
                onClick={() => {
                  handleOpen(6);
                }}
              >
                Join Us
              </AccordionHeader>
              <AccordionBody className="text-lg">
                Join us on this exciting journey as we empower you to unleash
                your full potential through optimized note-taking and dynamic
                visualization. Whether you&apos;re a student striving for
                academic excellence, a professional seeking to boost
                productivity, or a creative mind craving a digital canvas,
                NoteVision is here to support you every step of the way.
              </AccordionBody>
            </Accordion>
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10  overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-cyan-300 to-blue-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[650/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-300 to-blue-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative right-[calc(0%+11rem)] aspect-[600/600] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-red-500 to-green-500 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
//  TODO: Add a logo

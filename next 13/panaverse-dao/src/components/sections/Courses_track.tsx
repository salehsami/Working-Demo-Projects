// import  from 'react'
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"
import Quarters from "../shared/quarters"

const Courses_track = () => {
    const heading = "Core Courses\n(Common in All Specializations)"
    const parag = "Every paticipant of the program will start by completing the following three courses"
  return (

      <section className="mt-15 md:mt-25">
          <Wrapper >
              <div className="max-w-screen-sm" >
                  <h2 className=" text-teal-800 font-semibold text-md sm:text-lg">PROGRAM OF STUDIES</h2>
                  <h4 className="font-bold sm:text-3xl text-xl whitespace-pre">{heading}</h4>
                  <p className="mt-5 text-sm text-slate-800 sm:text-lg">{parag}</p>
                  <div className="mt-5">
                      <Button text = "Learn more"/>
                  </div>
              </div>
              <div className="flex flex-col my-20 gap-x-0 md:gap-x-4 sm:flex-row">
                  <Quarters header = "Quarter 1" number = "1" para = "CLO-1 Object Oriented Programming Using JavaScript"/>
                  <Quarters header = "Quarter 2" number = "2" para = "CLO-2 Object Oriented Programming Using JavaScript"/>
                  <Quarters header = "Quarter 3" number = "3" para = "CLO-3 Object Oriented Programming Using JavaScript"/>
                  <Quarters header = "Quarter 4" number = "4" para = "CLO-4 Object Oriented Programming Using JavaScript"/>

                  </div>
              
          </Wrapper>
      </section>
    )
}

export default Courses_track;
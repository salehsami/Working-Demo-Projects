// import  from 'react'
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"
const Courses_track = () => {
    const heading = "Core Courses\n(Common in All Specializations)"
    const para = "Every paticipant of the program will start by completing the following three courses"
  return (

      <section className="mt-15 md:mt-25">
          <Wrapper >
              <div className="max-w-screen-sm" >
                  <h2 className=" text-teal-800 font-semibold text-md sm:text-lg">PORGRAM OF STUDIES</h2>
                  <h4 className="font-bold sm:text-3xl text-xl whitespace-pre">{heading}</h4>
                  <p className="mt-5 text-sm text-slate-800 sm:text-lg">{para}</p>
                  <div className="mt-5">
                      <Button text = "Learn more"/>
                  </div>
              </div>
              <div className="mt-20 border w-4/12">
                  <h4 className="text-md font-extrabold">Quarter 1</h4>
                  <p className="text-md">CLO-4 Object Oriented Programming Using JavaScript</p>
                  <h1>1</h1>
              </div>
              
          </Wrapper>
      </section>
    )
}

export default Courses_track
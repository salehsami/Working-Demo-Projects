// import  from 'react'
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"
import Quarters from "../shared/quarters"

const all_courses = [
    {
        header: "Quarter 1",
        description: "CLO-1 Object Oriented Programming Using JavaScript",
        number: 1
    },{
        header: "Quarter 2",
        description: "CLO-1 Object Oriented Programming  Object Oriented Programming Using JavaScript Using JavaScript",
        number: 2
    },
    {
        header: "Quarter 3",
        description: "CLO-1 Object Using JavaScript",
        number: 3
    },
    {
        header: "Quarter 4",
        description: "CLO-1 Object Oriented Object Oriented Programming Using JavaScript Object Oriented Programming Using JavaScript Programming Using JavaScript",
        number: 4
    }
]


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

              {/* <div className="flex flex-col my-20 gap-x-0 md:gap-x-4 sm:flex-row">
                  <Quarters header = "Quarter 1" number = "1" para = "CLO-1 Object Oriented Programming Using JavaScript"/>
                  <Quarters header = "Quarter 2" number = "2" para = "CLO-2 Object Oriented Programming Using JavaScript"/>
                  <Quarters header = "Quarter 3" number = "3" para = "CLO-3 Object Oriented Programming Using JavaScript"/>
                  <Quarters header = "Quarter 4" number = "4" para = "CLO-4 Object Oriented Programming Using JavaScript"/>
              </div> */}

              <div className="flex flex-col my-20 gap-x-5 gap-y-3 md:flex-row px-15 py-10">
                  {
                      all_courses.map(items => {
                          return(
                            <div className="rounded border relative flex flex-col flex-1 px-5 py-14 md:py-8 justify-center">
                            <h4 className="text:md md:text-lg font-bold md:font-extrabold ">{ items.header }</h4>
                            <p className="text:sm md:text-md text-slate-600 z-0">{ items.description }</p>
                            <span className="absolute -top-7 right-10 text-[170px] text-gray-300 -z-10">{ items.number }</span>
                        </div>
                        )
                      }
                    )
                  }
              </div>
          </Wrapper>
      </section>
    )
}

export default Courses_track;
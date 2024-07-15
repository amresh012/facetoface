import React from 'react'
import Meeting from '../meeting/[id]/page'
import MeetingTypeList from '@/components/MeetngTypeList'
const Home = () => {
  const date = new Date()
  
  const time = date.toLocaleString('en-us', { hour: "2-digit", minute: "2-digit" })
  const fullyear = (new Intl.DateTimeFormat("en-US", {
    dateStyle: "full"
  })).format(date)

  return (
    <section className="flex size-full flex-col gap-10  justify-around items-center text-white ">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover ">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h1 className="bg-white/20 backdrop-blur-lg p-2 rounded-lg text-center w-fit font-mono">
            Upcoming Meeting at :
            <span className=" rounded-lg text-center bg-transparent  ">
              12:30 PM
            </span>{" "}
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className='text-5xl font-bold'>{ time}</h1>
            <p className='text-sky-200 text fomt-medium text-xl'>{fullyear}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList/>
    </section>
  );
}

export default Home
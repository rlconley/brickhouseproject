import lyndaBrickhouse from '.././photos/lyndaBrickhouse.jpg'
import { CONTENT } from './journeyContent'
import army from '.././photos/army.jpg'

export default function JourneyMotherArmy () {
  return (
    <div className='relative bg-spiritualNecklace pt-16 pb-32 overflow-hidden'>
      <div className='relative'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-3xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
            <div>
              <div className='mt-6'>
                <h2 className='text-3xl font-poppins font-extrabold tracking-tight text-spiritualRed'>
                  Lynda Brickhouse
                </h2>
                <p className='mt-4 text-lg font-nunito text-richBlack'>
                  {CONTENT.mother}
                </p>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pl-4 pr-4 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full right-16 xl:right-0'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                src={lyndaBrickhouse}
                alt='Junious mother, Lynda Brickhouse'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-3xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
            <div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold font-poppins tracking-tight text-spiritualRed'>
                  Military Service
                </h2>
                <p className='mt-4 text-lg font-nunito text-richBlack'>
                  {CONTENT.army}
                </p>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
            <div className='pr-4 pl-4 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                src={army}
                alt='Junious enlisting into the US Army'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

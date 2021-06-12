import { useEffect, useState } from 'react'
import JourneyIntro from './JourneyIntro'
import JourneyNav from './JourneyNav'
import JourneyArmy from './JourneyArmy'
import JourneyUrbanArtistry from './JourneyUrbanArtistry'
import useDocumentScrollThrottle from '../customComponents/useDocumentScrollThrottle'
import JourneyNextLevel from './JourneyNextLevel'
import JourneyAccomplishments from './JourneyAccomplishments'

export default function Journey ({ triggerPageChangeAnimation }) {
  const [navBtnFade, setNavBtnFade] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const MINIMUM_SCROLL = 0
  const TIMEOUT_DELAY = 0

  useDocumentScrollThrottle(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setNavBtnFade(currentScrollTop > 2)

    setTimeout(() => {
      setNavBtnFade(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  return (
    <div className='h-screen overflow-x-hidden overflow-y-auto perspective'>
      <JourneyNav triggerPageChangeAnimation={triggerPageChangeAnimation} navBtnFade={navBtnFade} />
      <JourneyIntro />
      <JourneyArmy />
      <JourneyUrbanArtistry />
      <JourneyNextLevel />
      <JourneyAccomplishments />
    </div>
  )
}

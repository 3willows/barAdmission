import { useAppContext } from "../Context.js"
import Heading from "../components/AffirmationHeading.js"
import { Tab } from "../components/Tab.js"


export default function AffidavitOfIdentity() {
  const { applicant } = useAppContext()
  return (
    <>
      <Heading />
      <p className="">  AFFIRMATION OF IDENTITY</p>
    
<p className="">I, Chan Chung Yin, Victor of 2/F, Wing On Cheong Building, 5 Wing Lok Street, Sheung Wan, Hong Kong, Solicitor, solemnly, sincerely and truly declare and affirm as follows: 
</p>
<ol>
  <li>
      The photograph attached hereto and marked 
      
      ” is a true likeness of {applicant} of 
      
      applicant <address>
        </address>, the Applicant herein.

  </li>
<li>

  I have examined the Hong Kong Identity Card <Tab /> of the said {applicant}  and I am satisfied that he is the Applicant in these proceedings.

</li>
</ol>


    </>
  )
}

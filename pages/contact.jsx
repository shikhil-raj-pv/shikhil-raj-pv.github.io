import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import BannerLayout from '../components/Common/BannerLayout';
import Footer from '../components/Footer';
import { CONTACTS, DETAILS, SOCIAL_LINKS } from '../constants/constants';

const Contact = () => (
  <BannerLayout>
    <div className="px-4 py-2">
      <div className="my-6 text-Snow flex flex-col gap-y-5">
        <h1 className='text-lg font-bold'>Contact Information</h1>
        <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
          <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
            <div className="flex justify-between"><span>Country:</span><span className='text-LightGray'>{DETAILS.Residence}</span></div>
            <div className="flex justify-between"><span>City:</span><span className='text-LightGray'>{DETAILS.City}</span></div>
            <div className="flex justify-between"><span>Availability:</span><span className='text-LightGray'>Available</span></div>
          </div>
          <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
            <div className="flex justify-between"><span>Email:</span><span className='text-LightGray'>{CONTACTS.EMAIL}</span></div>
            <div className="flex justify-between"><span>Phone:</span><span className='text-LightGray'>{CONTACTS.PHONE}</span></div>
            <div className="flex justify-between"><span>LinkedIn:</span><span className='text-LightGray'><a href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer" className='hover:underline text-Green'>shikhil-raj-p-v</a></span></div>
          </div>
        </div>
      </div>
      <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 items-center justify-center text-Snow">
        <a className='hover:scale-125 ease-in-out duration-700' href={`mailto:${CONTACTS.EMAIL}`}><HiMail /></a>
        <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.GITHUB} target='_blank' rel="noreferrer"><FaGithub /></a>
        <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer"><FaLinkedin /></a>
      </div>
    </div>
    <Footer />
  </BannerLayout>
);

export default Contact;

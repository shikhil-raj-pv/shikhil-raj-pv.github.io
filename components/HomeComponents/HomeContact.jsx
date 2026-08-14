import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import { CONTACTS, DETAILS, SOCIAL_LINKS } from '../../constants/constants';

const HomeContact = () => {
    return (
        <section className="px-2 md:px-8 py-6" aria-label="Contact Information">
            <div className="text-Snow flex flex-col gap-y-5">
                <h2 className="text-lg font-bold">Contact Information</h2>
                <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                    <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                        <div className="flex justify-between"><span>Country:</span><span className='text-LightGray'>{DETAILS.Residence}</span></div>
                        <div className="flex justify-between"><span>City:</span><span className='text-LightGray'>{DETAILS.City}</span></div>
                        <div className="flex justify-between"><span>Availability:</span><span className='text-LightGray'>Open to Opportunities</span></div>
                    </div>
                    <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                        <div className="flex justify-between"><span>Email:</span><span className='text-LightGray'><a href={`mailto:${CONTACTS.EMAIL}`} className="hover:underline text-Green">{CONTACTS.EMAIL}</a></span></div>
                        <div className="flex justify-between"><span>Phone:</span><span className='text-LightGray'><a href={`tel:${CONTACTS.PHONE}`} className="hover:underline text-Green">{CONTACTS.PHONE}</a></span></div>
                        <div className="flex justify-between"><span>LinkedIn:</span><span className='text-LightGray'><a href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer" className='hover:underline text-Green'>shikhil-raj-p-v</a></span></div>
                    </div>
                </div>
            </div>
            <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 items-center justify-center text-Snow mt-5">
                <a className='hover:scale-125 ease-in-out duration-700' href={`mailto:${CONTACTS.EMAIL}`} title="Send Email"><HiMail /></a>
                <a className='hover:scale-125 ease-in-out duration-700 text-[0.9em]' href={`tel:${CONTACTS.PHONE}`} title="Call Phone"><HiPhone /></a>
                <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.GITHUB} target='_blank' rel="noreferrer" title="GitHub"><FaGithub /></a>
                <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
            </div>
        </section>
    );
};

export default HomeContact;

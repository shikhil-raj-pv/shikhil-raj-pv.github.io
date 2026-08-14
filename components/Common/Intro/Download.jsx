import { RESUME_URL } from '../../../constants/constants';

const Download = ({ icon }) => {
  return (
    <a href={RESUME_URL} download className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4 hover:text-Green' title='Download resume PDF'>
      <span className='text-Snow'>Download Resume</span>
      <span>{icon}</span>
    </a>
  );
};

export default Download;

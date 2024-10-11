import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BsHeart, BsStar, BsPrinter } from "react-icons/bs";
import { IoIosShareAlt, IoMdHeartEmpty } from "react-icons/io";
import { CiHeart } from "react-icons/ci";


const SocialButtonsTest = () => {

  return (
    <>
<div className='d-flex align-items-center'>
  <div className="py-2" style={{ backgroundColor: '#F7F0F5' }}>
    <button className='d-flex align-items-center border-0 border-end bg-transparent'>
      <span className='pe-1'>Save</span>
      <BsHeart />
    </button>
  </div>
  <div className="py-2" style={{ backgroundColor: '#F7F0F5' }}>
    <button className='d-flex align-items-center border-0 border-end bg-transparent'>
      <span className='pe-1'>Save</span>
      <CiHeart />
    </button>
  </div>
  <div className="py-2" style={{ backgroundColor: '#F7F0F5' }}>
    <button className='d-flex align-items-center border-0 border-end bg-transparent'>
      <span className='pe-1'>Save</span>
      <IoMdHeartEmpty />
    </button>
  </div>
  <div className='py-2' style={{ backgroundColor: '#F7F0F5' }}>
    <button className='d-flex align-items-center border-0 border-end bg-transparent'>
      <span className='pe-1'>Rate</span>
      <BsStar />
    </button>
  </div>
  <div className='py-2' style={{ backgroundColor: '#F7F0F5' }}>
    <button className='d-flex align-items-center border-0 border-end bg-transparent'>
      <span className='pe-1'>Print</span>
      <BsPrinter />
    </button>
  </div>
  <div className='py-2' style={{ backgroundColor: '#F7F0F5' }}>
    <button className='d-flex align-items-center border-0 bg-transparent'>
      <span className='pe-1'>Share</span>
      <IoIosShareAlt />
    </button>
  </div>
</div>

    </>
  )

}

export default SocialButtonsTest;
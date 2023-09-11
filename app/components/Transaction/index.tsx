import './index.css'
import {IoCheckboxOutline} from 'react-icons/io5'
import {FaArrowUpLong} from 'react-icons/fa6'
import {LuRefreshCw} from 'react-icons/lu'
import {HiOutlineArrowDown} from 'react-icons/hi'
import {CiPause1} from 'react-icons/ci'
import {RxCrossCircled} from 'react-icons/rx'

const Transaction = () => (
  <div className="transaction-container">
    <h1 className="transaction-heading">Transactions</h1>
    <div className="count-container">
      <IoCheckboxOutline className="logo-1" />
      <div>
        <h1 className="first-heading">30,000</h1>
        <p className="first-paragraph">Success</p>
      </div>
      <div>
        <h1 className="second-heading">20%</h1>
        <p className="second-paragraph">+2.54%</p>
      </div>
      <FaArrowUpLong className="arrow-1" />
    </div>
    <div className="count-container">
      <LuRefreshCw className="logo-2" />
      <div>
        <h1 className="first-heading">600</h1>
        <p className="second-paragraph-2">Inprogress</p>
      </div>
      <div>
        <h1 className="second-heading">40%</h1>
        <p className="second-description">-1.54%</p>
      </div>
      <HiOutlineArrowDown className="arrow-2" />
    </div>
    <div className="count-container">
      <CiPause1 className="logo-3" />
      <div>
        <h1 className="first-heading">200</h1>
        <p className="first-paragraph-3">On Hold</p>
      </div>
      <div>
        <h1 className="second-heading-1">30%</h1>
        <p className="second-paragraph-3">+12.54%</p>
      </div>
      <FaArrowUpLong className="arrow-1" />
    </div>
    <div className="count-container">
      <RxCrossCircled className="logo-4" />
      <div>
        <h1 className="first-heading">100</h1>
        <p className="first-paragraph-4">Failed</p>
      </div>
      <div>
        <h1 className="second-heading-2">10%</h1>
        <p className="second-description-2">-12.20%</p>
      </div>
      <HiOutlineArrowDown className="arrow-2" />
    </div>
  </div>
)

export default Transaction
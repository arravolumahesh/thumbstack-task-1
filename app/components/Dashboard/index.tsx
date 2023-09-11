import './index.css'
import {AiOutlineEye} from 'react-icons/ai'
import {FiFilePlus} from 'react-icons/fi'
import {LiaHourglassEndSolid} from 'react-icons/lia'
import {BsListCheck} from 'react-icons/bs'
import {RiGroupLine} from 'react-icons/ri'
import {IoSettingsSharp} from 'react-icons/io5'

const Dashboard = () => (
  <>
    <div className="bg-container">
      <h1 className="heading">
        BV<span>DOC</span>
      </h1>
      <div className="button-container">
        <button type="button" className="button">
          <AiOutlineEye className="logos-1" />
          overview
        </button>
      </div>
      <div className="dashboard-container">
        <h1 className="main-content">Dashboard</h1>
        <div className="section-container">
          <FiFilePlus className="logo1" />
          <h1 className="name">Create New Extract</h1>
        </div>
        <div className="section-container">
          <LiaHourglassEndSolid className="logo1" />
          <h1 className="name">History</h1>
        </div>
      </div>
      <div className="dashboard-container">
        <h1 className="main-content">Management</h1>
        <div className="section-container">
          <BsListCheck className="logo1" />
          <h1 className="name">Manage Role</h1>
        </div>
      </div>
      <div className="dashboard-container">
        <h1 className="main-content">Accounts</h1>
        <div className="section-container">
          <RiGroupLine className="logo1" />
          <h1 className="name">User Profiles</h1>
        </div>
        <div className="section-container">
          <IoSettingsSharp className="logo1" />
          <h1 className="name">My Account Settings</h1>
        </div>
      </div>
    </div>
  </>
)

export default Dashboard
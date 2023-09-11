import './index.css'
import {HiOutlineDocumentText} from 'react-icons/hi2'

const Management = () => (
  <div className="management-container">
    <h1 className="conversions">Total Conversions</h1>
    <p className="amount">$12,8490</p>
    <div className="box-container">
      <div className="dashed-box">
        <HiOutlineDocumentText className="icon" />
        <p className="content">
          Click to browser or
          <br /> drag and drop your files
        </p>
      </div>
      <p className="footer">@ 2023 - By Admin Dashboard</p>
    </div>
  </div>
)

export default Management
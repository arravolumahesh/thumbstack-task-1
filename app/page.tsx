import Image from 'next/image'
import './page.css'

import Dashboard from './components/Dashboard'
import Header from './components/Header'
import History from './components/History'
import Management from './components/Management'
import Chart from './components/Chart'
import Transaction from './components/Transaction'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
      <div className='app-container'>
      <Dashboard/>
      <div className='app-container-1'>
        <Header/>
        <History/>
        <div className='app-container-2'>
          <Management/>
          <Chart/>
          <Transaction/>
        </div>
      </div>
      </div>
      </>
    </main>
  )
}

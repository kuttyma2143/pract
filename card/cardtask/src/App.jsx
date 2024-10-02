import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='cardtas'>
       <div className='basic'>
        
        <h3>FREE</h3>
        <h1>$0/month</h1>
        <div className='td'></div>
        <div className='access'>
       <h4>✓ Single User</h4>
       <h4>✓ 50GB Storage</h4>
       <h4>✓ Unlimited Public Projects</h4>
       <h4>✓ Community Access</h4>
       
       <div className='denied'>
       <h4>x Unlimited Private Projects</h4>
       <h4>x Dedicated Phone Support</h4>
       <h4>x Free Subdomain</h4>
       <h4>x Monthly Status Reports</h4>
       </div>
       <button>Button</button>
        </div>
        </div>


       <div className='medium'>
       <h3>PLUS</h3>
        <h1>$9/month</h1>
        <div className='td'></div>
        <div className='access'>
       <h4>✓ 5 Users</h4>
       <h4>✓ 50GB Storage</h4>
       <h4>✓ Unlimited Public Projects</h4>
       <h4>✓ Community Access</h4>
       <h4>✓ Unlimited Private Projects</h4>
       <h4>✓ Dedicated Phone Support</h4>
       <h4>✓ Free Subdomain</h4>
       
       <div className='denied'>
       <h4>x Monthly Status Reports</h4>
       </div>
       <button>
          Button
        </button>
       </div>
       
        </div>


       <div className='advance'><h3>PRO</h3>
        <h1>$49/month</h1>
        <div className='td'></div>
        <div className='access'>
      
       <h4>✓ Unlimited Users</h4>
       <h4>✓ 50GB Storage</h4>
       <h4>✓ Unlimited Public Projects</h4>
       <h4>✓ Community Access</h4>
       <h4>✓ Unlimited Private Projects</h4>
       <h4>✓ Dedicated Phone Support</h4>
       <h4>✓ Free Subdomain</h4>
       <h4>✓ Monthly Status Reports</h4>
       <button>Button</button>
       </div>
       
        </div>

       </div>
     
    </>
  )
}

export default App

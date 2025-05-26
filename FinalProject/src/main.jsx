import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Enquiry from './enquiry.jsx'
import AnimatedCursor from "react-animated-cursor"
import { toast, ToastContainer } from 'react-toastify'
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'white'
  }}
  outerStyle={{
    border: '3px solid white'
  }}
/>
<ToastContainer/>
    <Enquiry />
  </StrictMode>,
)

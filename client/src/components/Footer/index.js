import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faSquarePhone,faCodeCompare,faUser} from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return(
<footer className="p-2 p-md-5 bg-dark">

      <address style={{fontSize:"20px"}} >
        <ul className=" d-md-flex justify-content-between list-unstyled">
        <li><a href="mailto:satwinder47@outlook.com" className="text-white text-decoration-none">
        <FontAwesomeIcon icon={faEnvelope} 
        style={{color:"white",width:"40px",fontSize:"25px"}} />
        Satwinder47@outlook.com
          </a></li>
        <li><a href="tel:2899523216" className="text-white text-decoration-none">
        <FontAwesomeIcon icon={faSquarePhone}
        style={{color:"white",width:"40px",fontSize:"25px"}} />
        (289) 952-3216</a></li>
        <li><a href="https://github.com/satwinder191995" className="text-white text-decoration-none">
        <FontAwesomeIcon icon={faCodeCompare} 
        style={{color:"white",width:"40px",fontSize:"25px"}}/>
        Git-hub</a></li>
        <li><a href="https://www.linkedin.com/in/satwinder-singh-53a83022b" className="text-white text-decoration-none">
        <FontAwesomeIcon icon={faUser} 
        style={{color:"white",width:"40px",fontSize:"25px"}}/>
        Linkedin</a></li>
        </ul>
      </address>
      <div className="text-center">Thanks for visiting my site</div>
      <div className="text-center">&copy; Satwinder Singh.</div>
  </footer>
    )
}

export default Footer;
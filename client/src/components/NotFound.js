import { NavLink } from "react-router-dom"
import {FaHandPointLeft} from "react-icons/fa"

function NotFound(){
    return(
        <div id="errorPage">
            <div id="errorImage">
                <img src="https://media.tenor.com/M2lkyMMq5woAAAAM/seinfeld-babu-bhatt.gif" alt="no_no_no" />
                <NavLink id='errorLink'to='/home'>Here are you going? The food's over there</NavLink>
                <NavLink to='/home'><FaHandPointLeft id="errorIcons"></FaHandPointLeft></NavLink>
            </div>
        </div>
    )
}
export default NotFound
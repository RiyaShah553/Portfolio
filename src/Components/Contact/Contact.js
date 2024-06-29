import React from 'react'
import './Contact.css'
import { IoLocationSharp } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
const Contact = () => {
    return (
        <div id='contact' className='contact-container'>
            <div className="contact-head">
                <h1>Contact</h1>
                <hr />
                <p>
                    If you have any questions or would like to get in touch, please don't hesitate to reach out. You can contact me through the following channels:</p>
            </div>
            <div className="contact-details">
                <ul>

                    <li>
                        <IoLocationSharp className='contact-icon' />
                        <p>Address</p>
                        <br />
                        B-1002, Vastu Shilp App.,Near TGB Circle,Pal,Surat,India 395009</li>
                    <li><MdAddIcCall className='contact-icon' /><p>Call Details</p><br />+91 99787 77764</li>
                    <li><MdOutlineMarkEmailRead className='contact-icon' /><p>Email Details</p><br />shahriya553@gmail.com</li>
                </ul>
            </div>
        </div >

    )
}

export default Contact

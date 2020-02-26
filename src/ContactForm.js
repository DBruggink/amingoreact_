import React from 'react'
const ContactForm=()=>{
    
    const formStyle={
        height:'200px'
    }
    
    
    return(
        <div className="container">
  <form action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Dubai</option>
      <option value="canada">Sharjah</option>
      <option value="usa">Abu Dhabi</option>
      <option value="usa">Ajman</option>
      <option value="usa">Fujairah</option>
      <option value="usa">Ras al Khaimah</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={formStyle}></textarea>

    <input type="submit" value="Submit"/>

  </form>
</div>




    )




}
export default ContactForm
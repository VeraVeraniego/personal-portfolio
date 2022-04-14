import ContactMedia from './ContactMedia';
import "../stylesheets/ContactLinks.css"

function ContactLinks(){
    return(
        <div id="contact-links">
            <ContactMedia 
            redirect="https://github.com/VeraVeraniego" 
            name="Github"/>
            <ContactMedia 
            redirect="https://www.linkedin.com/in/brayan-vera-9441b2222/" 
            name="Linkedin"  />
            <ContactMedia 
            redirect="https://www.freecodecamp.org/VeraVeraniego" 
            name="Free-code-camp"  />
            <ContactMedia 
            redirect="https://facebook.com/itsBrayanVeraniego" 
            name="Facebook"  />

          </div>
    );
}
export default ContactLinks;
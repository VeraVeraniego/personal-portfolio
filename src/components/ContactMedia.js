import "../stylesheets/ContactMedia.css"

function ContactMedia(props) {
    return (
        <a target="_blank" href={props.redirect}>
            <i className={`fa-brands fa-${props.name.toLowerCase()}`}>
            </i>{props.name}
        </a>
    );
};
export default ContactMedia;
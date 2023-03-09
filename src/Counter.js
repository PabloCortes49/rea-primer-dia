export const Counter = (props) =>{
    const {value
    return <div>
        Estto es mi componente
    </div>;
}
import React from 'react';
import './Contact.css';

export default function Contact() {

  return <>
    <article className="contact">
      <img className="contact__image" src="https://www.un.org/sites/un2.un.org/files/user.png" />
      <p>
        <span className="contact__user">Jon</span>
        <a href="mailto:1joroji@gmail.com">1joroji@gmail.com</a>
      </p>
    </article>
  </>
}
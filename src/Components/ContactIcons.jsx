import React from 'react'

function ContactIcons() {
  return (
    <>
      <li key={"linkedin"}><a href={"https://www.linkedin.com/in/ayushw"}><i className={"fa fa-linkedin"}></i></a></li>
      <li key={"github"}><a href={"http://github.com/ayush-warikoo"}><i className={"fa fa-github"}></i></a></li>
      <li key={"email"}><a href={"mailto:ayush.warikoo77@gmail.com"}><i className={"fa fa-envelope"}></i></a></li>
    </>
  )
}

export default ContactIcons
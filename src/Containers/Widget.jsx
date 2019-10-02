import React from 'react'

import { Input, FileUploader, Button } from '../Components'

import { imagePath } from '../utils/constants'

const Widget = () => {
  const onInputChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <section className="widget-contaier">
      <div className="widget-contaier--center white">
        <div className="widget-left-contaier">
          <form action="" className="widget-form-contaier">
            <h1 className="widget-form-heading dark text-center">Transfer files</h1>
            <div className="widget-form--input">
              <Input
                label="Send files to this email"
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={onInputChange}
              />
            </div>
            <FileUploader />
            <Button className="big dark wide">Send</Button>
          </form>
        </div>
        <aside className="widget-aside-right-container">
          <img src={`${imagePath}/image-library.jpg`} alt="bibrary gallery"/>
        </aside>
      </div>
    </section>
  )
}

export default Widget

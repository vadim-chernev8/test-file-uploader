import React from 'react'
import { useDropzone } from 'react-dropzone'


import { getFileTypes } from '../utils/function.utils'
import { iconPath } from '../utils/constants'

export const FileUploader = () => {
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  });

  const files = acceptedFiles.map(file => {
    console.log(getFileTypes(file.type), file.type);
    return (
      <li key={file.path}>
        <img src={getFileTypes(file.type)} alt={getFileTypes(file.type)} className="icon-image-type"/>
        <span>{file.path}</span>
        <img src={`${iconPath}/check-icon.svg`} alt="check icon" className="icon-check"/>
      </li>
    )
  });

  return (
    <div className="uploader-container">
      <aside className="files-list">
        <ul>{files}</ul>
      </aside>
      <div {...getRootProps({className: 'dropzone'})}>
        <img src={`${iconPath}/cloud-upload.svg`} alt="upload icon"/>
        <input {...getInputProps()} />

        <p className="dropzone-label">Drag and drop files here</p>
        <p className="dropzone-label light">or</p>
        <button type="button" onClick={open} className="dropzone-button">
          browse
        </button>
      </div>
    </div>
  )
}


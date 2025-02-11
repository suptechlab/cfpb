import React from "react"
import external from "../../../static/img/external-link-128px.png"
import "./ExternalLink.css"
import S3FileInfo from "./S3FileInfo"

export const ExternalLink = ({ url, text, title, className, displayFileInfo, children }) => {
  return (
    <>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={url}
        className={"external link " + className}
        title={title}
      >
        {children || text || url} <img src={external} alt='External Link' />
      </a>
      {displayFileInfo && (
        <S3FileInfo url={url} />
      )}
    </>
  )
}

export default ExternalLink

import React, { useState, useEffect } from "react"
import './S3FileInfo.css'

function S3FileInfo({ url }) {
  const [fileSize, setFileSize] = useState()
  const [lastUpdated, setLastUpdated] = useState(new Date())

  const humanFileSize = size => {
    if (!size) return "0B"
    var i = Math.floor(Math.log(size) / Math.log(1024))
    return (
      (size / Math.pow(1024, i)).toFixed(2) * 1 +
      " " +
      ["B", "kB", "MB", "GB", "TB"][i]
    )
  }

  const readableDate = date => {
    return date
      .toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .replaceAll(",", "")
  }

  useEffect(() => {
    async function getFileData() {
      try {
        const result = await fetch(url, { method: "HEAD" })
        console.log(result)
        const size = result.headers.get("content-length")
        const lastMod = new Date(result.headers.get("last-modified"))
        setFileSize(humanFileSize(size))
        setLastUpdated(lastMod)
      } catch (err) {
        console.error(err)
      }
    }
    getFileData()
  }, [url])

  return (
    <div className='s3-file-info'>
      <p>
        Size: <span>{fileSize}</span>
      </p>
      {lastUpdated && (
        <p>
          Last Updated: <span>{readableDate(lastUpdated)}</span>
        </p>
      )}
    </div>
  )
}

export default S3FileInfo

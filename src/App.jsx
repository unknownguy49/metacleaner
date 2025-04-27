import React, { useState } from 'react'
import axios from 'axios'
import './index.css'

export default function App() {
  const [img, setImg] = useState(null)
  const [res, setRes] = useState(null)
  const [loading, setLoading] = useState(false)

  const hChange = async (e) => {
    const f = e.target.files[0]
    if (!f) return
    setImg(URL.createObjectURL(f))
    const fd = new FormData()
    fd.append("img", f)
    setLoading(true)
    const { data } = await axios.post("http://localhost:5000/clean", fd)
    setRes(data.url)
    setLoading(false)
  }

  return (
    <div className="page">
      <nav className="nav">
        <div className="nav-logo">MetaCleaner</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className="main">
        <h1 className="title">Image Metadata Cleaner</h1>
        <p className="subtitle">Upload your image to remove location/device info before sharing</p>
        <input type="file" accept="image/*" onChange={hChange} className="upload" />

        <div className="preview">
          {loading && <p>Cleaning...</p>}
          {img && (
            <div className="section">
              <h3>Original Image</h3>
              <img src={img} alt="original" />
            </div>
          )}
          {res && (
            <div className="section">
              <h3>Clean Image</h3>
              <a href={res} download="cleaned_image.jpg">Download Clean Image</a>
              <img src={res} alt="clean" />
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 MetaCleaner. All rights reserved.</p>
      </footer>
    </div>
  )
}

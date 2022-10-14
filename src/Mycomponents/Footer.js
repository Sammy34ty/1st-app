import React from 'react'

function Footer() {
  let footerstyle = {
    top: "100vh",
    width: "100",
  }
  return (
    <div>
      <>
        <footer className="bg-light text-center text-lg-start" style={footerstyle}>
          <div className="text-center p-3">
            <h6>© 2022 Copyright:Todos For Daily</h6>
          </div>
        </footer>
      </>
    </div>
  )
}

export default Footer
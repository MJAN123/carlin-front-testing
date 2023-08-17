import React from "react"
import { ToastContainer, Zoom } from "react-toastify"

const Toaster = () => {
  return (
    <>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        position="bottom-right"
        rtl={false}
        transition={Zoom}
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  )
}

export default Toaster

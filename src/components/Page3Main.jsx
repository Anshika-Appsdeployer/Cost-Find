import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Page3Main = () => {
  return (
    <>
      {/* <Header /> */}

      <button type="button" className="flex items-center justify-center m-auto text-sm text-white px-4 py-2 bg-green-400">
        <Link to={" "}> Next {'>'} </Link>
      </button>
    </>
  )
}

export default Page3Main
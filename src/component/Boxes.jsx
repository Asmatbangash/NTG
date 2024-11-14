import React from 'react'
import { GrSecure } from "react-icons/gr";
import { MdOutlineGppGood } from "react-icons/md"
import { GrShieldSecurity } from "react-icons/gr";
import { FaCommentDollar } from "react-icons/fa";
import { MdNaturePeople } from "react-icons/md";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { GrIntegration } from "react-icons/gr";
import { BsDatabaseFillCheck } from "react-icons/bs";

function Boxes() {
  let boxInnerData = [
    {
      icon: '',
      title: ''
    },
    {
      icon: <GrSecure />,
      title: 'Secure document solution'
    },
    {
      icon: <MdOutlineGppGood />,
      title: 'e-Governance solution'
    },
    {
      icon: '',
      title: ''
    },
    {
      icon: <GrShieldSecurity />,
      title: 'Integrated Security managment solution'
    },
    {
      icon: <FaCommentDollar />,
      title: 'Financial services solution'
    },
    {
      icon: <MdNaturePeople />,
      title: 'Consultancy and Advisory Services'
    },
    {
      icon: <BsPcDisplayHorizontal />,
      title: 'Enterprise level software Development'
    },
    {
      icon: '',
      title: '',
    },
    {
      icon: <GrIntegration />,
      title: 'System integration Development & training'
    },
    {
      icon: <BsDatabaseFillCheck />,
      title: 'Data wharehousing & secure document production'
    },
    {
      icon: '',
      title: ''
    }


  ]
  return (
    <div className='d-flex justify-content-center item-center flex-wrap'>
      {boxInnerData.map((res) => (
   <div className="card m-2 bg-light" style={{width: "16rem", minHeight: '15rem'}}>
    <div className="card-body text-center ">
       <h1>{res.icon}</h1>
       <h2>{res.title}</h2>
    </div>
  </div>
      ))}

  </div>
  )
}

export default Boxes
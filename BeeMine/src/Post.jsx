import {React, useState} from 'react'

export default function Post({content}) {
    const getTime = () => {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;
        return dateTime;
    }

  return (
    <div className='post'>
        <sup>{getTime()}</sup>
        <div>
        {content}
        </div>
        </div>
  )
}

'use client'
import { useState } from 'react';
import { useSocket } from '../context/SocketProvider'
import classes from './page.module.css'

export default function Page() {
  const { sendMessage } = useSocket();
  const [message, setMessage] = useState('')

  return (
    <div className={`${classes['center']}`}>
      <div>
        <h1>all messages will appear here</h1>
      </div>
      <div>
        <input onChange={(e) => setMessage(e.target.value)} className={classes["chat-input"]} placeholder="Enter message"></input>
        <button onClick={e => sendMessage(message)} className={classes["send-button"]}>Send</button>
      </div>
    </div>
  )
}
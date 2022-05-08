import { createElement, useContext, useState } from 'react'
import './App.css'
import ToastProvider, {useToast, configToast} from './ToastContext'

function Toast() {
  configToast({
    portal: 'caca'
  })

  const toast = useToast()
  toast.triggerToast()
  
  
  
  return (
    <ToastProvider>
    <div className="app">
      Hello
    </div>
    </ToastProvider>
  )

}
export default Toast

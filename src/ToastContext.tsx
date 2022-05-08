import React, { Provider, useContext, useState } from 'react'
import ReactDom from 'react-dom';
type ToastState = { 
    portal: string
    isOpen: boolean,
    triggerToast: () => void
}

const initialState:ToastState = {
    portal: 'portal',
    isOpen: false,
    
    triggerToast() {
        this.isOpen = !this.isOpen
        
        
    }
}

const ToastContext = React.createContext(initialState);



type ProviderProps = {
    children: React.ReactNode,
    value?: ToastState,
    node?: HTMLElement
}

function ToastProvider({children, value=initialState}: ProviderProps) {
    const [node] = useState(document?.createElement('div'))
    return <ToastContext.Provider value={value}>
        {children}
        </ToastContext.Provider>
}

function ToastComponent() {
    return (
        <div>Prout</div>
    )
}




export const useToast = () => useContext(ToastContext)
export const configToast = ({portal} : {portal:string}) => {
    const context = useContext(ToastContext);
    context.portal = portal
}
export default ToastProvider;







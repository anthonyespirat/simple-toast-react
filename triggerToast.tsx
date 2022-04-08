import ReactDOM from 'react-dom'
import './toast.css'

function animationToast (toast:HTMLElement, duration:number) {
    toast.style.transform = "translate(-50%, 0)"
    setTimeout(()=> {
      toast.style.transform = "translate(-50%, 100px)"
    }, duration)
     setTimeout(() => {
      toast.removeAttribute('style')
      ReactDOM.unmountComponentAtNode(toast)
    }, duration + 500)
}

const triggerToast = (title:string, msg:string, type:string, duration: number = 4000): void => {
  
  const possibleType:any = {
    error: 'rgba(224, 50, 50, 0.9)',
    warn: 'blue',
    success: 'rgba(74, 194, 74, 0.9)'
  }
  const toastContainer = document.getElementById('toast') as HTMLElement;

  if(possibleType.hasOwnProperty(type)) { 
    toastContainer.style.backgroundColor = possibleType[type]
      ReactDOM.render(
        <div className='toast-inner'><span>{title} : {msg}</span></div>,
        document.getElementById('toast')
      )
      animationToast(toastContainer, duration)
  } 

}

export default triggerToast;
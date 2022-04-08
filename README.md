# SIMPLE TOAST REACT

## Instruction

Add `div` with id `#toast`  
This `div` is in `position: absolute`, so don't forget to be relative to something else  
```js
ReactDOM.render(
  <React.StrictMode>
    <App />
    
    <div id="toast"></div>
  </React.StrictMode>,
  document.getElementById('root')
)
```
```js
import triggerToast from '../lib/toast/triggerToast'
```

## Usage

```jsx

triggerToast(title, message, toastType, duration)

```

### Exemple
```jsx

triggerToast('Error', 'End of the world', 'error', 6000)

```

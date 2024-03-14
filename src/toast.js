import { createToast, clearToasts as clearToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const toast = (text, type = 'error', timeout = 3000) => {
  let color = 'positive'
  if (type == 'success') color = 'green'
  if (type == 'error') color = 'red'
  if (type == 'warning') color = 'orange'
  createToast(text, {
    showIcon: true,
    position: 'top-center',
    timeout: timeout,
    toastBackgroundColor: color,
    type: type,
    transition: 'slide',
    swipeClose: true,
  })
}

const clearToasts = function(){
  clearToast()
}

export { toast, clearToasts }
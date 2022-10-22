import menuArray from './data.js'
import {renderSuccessHtml,renderModel,renderHtml} from './renderHtml.js'

const placeholder = document.querySelector('.place-holder')
const orderHolder = document.querySelector('.order-holder')
const $order = document.querySelector('.order')
const modalHolder = document.querySelector('.modal-holder')
const successPLaceholder = document.querySelector('.success-placeholder')
let array = []
let sum = 0


document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        handleAdd(e.target.dataset.add)
    }
    else if(e.target.dataset.id){
         handleRemove(e.target.dataset.id)
    }
    else if(e.target.matches('.order-btn')){
        handleOrderCompletebtn()
    }
   else if(e.target.matches('#pay-btn')){
       handleSubmit(e)
   }
   else if(e.target.matches('.toggler')){    
    handleToggler()
   }
    
})

function handleToggler(){
     document.querySelector('.main').classList.toggle('bg-main')
     document.querySelectorAll('.add-btn').forEach(btn => btn.classList.toggle('btn-dark')) 
}

function handleAdd(itemId){
    orderHolder.innerHTML = ''    
    const targetMenuItem = menuArray.filter(item =>{
        return item.id === itemId
    })[0]
    sum += targetMenuItem.price
    renderOrder(targetMenuItem)
    orderHolder.innerHTML = render(array)
    if(array.length > 0){
        $order.classList.remove('hidden')
    }
    successPLaceholder.classList.add('hidden')
    if(array.length >= 2){
        document.querySelector('.discount').classList.remove('hidden')
        document.querySelector('.discount').innerHTML = renderDIscount(array.length)
    }
}


function handleRemove(orderId){
    const targetOrder = array.filter(item => {
        return item.id === orderId
    })[0]
    sum -= targetOrder.price
    const index = array.indexOf(targetOrder)
    if(index > -1){
        array.splice(index, 1)
    }
    if(array.length === 0){
        $order.classList.add('hidden')
    }
    orderHolder.innerHTML = render(array)
}

function handleOrderCompletebtn(){
    modalHolder.innerHTML = renderModel
    modalHolder.classList.remove('hidden')
}

function handleSubmit(event){
    event.preventDefault()
    const name = document.getElementById('uname').value
    document.querySelector('form').reset()
    modalHolder.classList.add('hidden')
    $order.classList.add('hidden')
    successPLaceholder.classList.remove('hidden')
    document.querySelector('.discount').classList.add('hidden')
    successPLaceholder.innerHTML = renderSuccessHtml(name)
    sum = 0;
    array = []
}



function render(arr){
    console.log(arr)
    return arr.map(item => renderOrder(item)).join('')
}

function renderOrder(order){
    if(array.indexOf(order) === -1){
        array.push(order)
    }
    document.querySelector(".total-amount").innerText = sum
    return `        
        <div class="order-content">
            <h3 class="order-title">${order.name}</h3>
            <button class="remove-order" data-id="${order.id}">remove</button>
            <h3 class="order-price">${order.price}</h3>
        </div>
        
`}

function renderDIscount(discount){
        sum -= discount;
        document.querySelector(".total-amount").innerText = sum      
        return `
            <div class="discount-prop">
                <h3>Discount</h3>
                <h3>-${discount}</h3>
            </div>
        `
}


placeholder.innerHTML = renderHtml(menuArray)



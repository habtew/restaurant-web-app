

function renderModel(){
    return `
        <div class="model">
            <h1 class="model-title">Enter card details</h1>
            <form>
                <input  type="text" 
                        placeholder="Enter your name" 
                        name="uname" 
                        id="uname"
                        required 
                        />
                <input  type="text" 
                        placeholder="Enter your card number" 
                        name="cardnum" 
                        id="cardnum" 
                        required />
                <input  type="text" 
                        placeholder="Enter CVV" 
                        name="cvv" id="cvv" 
                        required />
                <button id="pay-btn">Pay</button>
            </form>
        </div>
    `
}

function renderSuccessHtml(name){
    return `
        <div class"success">
            <h3 class="success-text">Thanks, ${name}! your order is on it's way!</h3>
        </div>
    `
}


function renderHtml(Array){
    return Array.map(item => {
        return `
            <div class="menu">
        <img src="${item.menuIcon}" alt="pizza image" class="menu-icon"/>
        <div class="menu-item">
            <h2 class="menu-title">${item.name}</h2>
            <p class="menu-content">${item.ingredients}</p>
            <h4 class="price">${item.price}</h4>
        </div>
        <button class="add-btn" id="add" data-add="${item.id}">+</button>
    </div>
        `
    }).join('')
}



export {renderSuccessHtml,renderModel,renderHtml}
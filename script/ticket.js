const ticketBtn=document.querySelectorAll('.bus-ticketSet');
let clickBtn=0;
const ticketSet=document.getElementById('current-seat');
let convertTicketSet=parseInt(ticketSet.innerText);
const trBody=document.getElementById('booking-list');
const applyBtn=document.getElementById('applyBTN');
const totalPrice=document.getElementById('displayTotal');
let convertTotalPrice=parseInt(totalPrice.innerText);
let ticketPrice=550;
const GrandTotal=document.getElementById('Grand-total');
const inputDiscount=document.getElementById('inputDiscount');
const discount=document.getElementById('discount');
const phnnumberInput=document.getElementById('phnnumberInput');
const NextButton=document.getElementById('NextButton');
const myModal=document.getElementById('my_modal_1');



ticketBtn.forEach(btn => {
  btn.addEventListener('click',function(){
   
   if(clickBtn<4){
    clickBtn++;
   btn.disabled=true;
   phnnumberInput.disabled=false;

   btn.style.backgroundColor='#1DD100';
   btn.style.color='white';
   convertTicketSet--;
   ticketSet.innerText=convertTicketSet;


   const tr=document.createElement(`tr`);
   tr.innerHTML=`<td>${btn.innerText}</td>
                <td>Economy</td>
                <td>$550.00</td>`
        trBody.appendChild(tr);

      tr.classList='flex lg:gap-28 gap-5 py-3'

  if(clickBtn===4){
    applyBtn.disabled=false;
  }

  convertTotalPrice += ticketPrice;
  totalPrice.innerText=convertTotalPrice;

  GrandTotal.innerText=convertTotalPrice;
                
 }
  })
});

applyBtn.addEventListener('click',function(){
 if (inputDiscount.value==='NEW15') {
  const discountAmmount=convertTotalPrice*0.15;
  const discountTotalPrice=convertTotalPrice-discountAmmount;
  discount.innerText=discountAmmount;
  GrandTotal.innerText=discountTotalPrice;
  inputDiscount.value='';
  applyBtn.disabled=true
 }
 else if(inputDiscount.value==='Couple20'){
  const discountAmmount=convertTotalPrice*0.20;
  const discountTotalPrice=convertTotalPrice-discountAmmount;
  discount.innerText=discountAmmount;
  GrandTotal.innerText=discountTotalPrice;
  inputDiscount.value='';
  applyBtn.disabled=true
 }
})

phnnumberInput.addEventListener('input',function(){
  if(phnnumberInput.value.length===11){
   NextButton.disabled=false;
  }
})

NextButton.addEventListener('click',function(){
  myModal.showModal()
})



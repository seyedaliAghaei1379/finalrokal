
const btnCommission1 = document.getElementById('btn_commission1')
const btnCommission2 = document.getElementById('btn_commission2')
const lableInput1 = document.querySelector('.lable_input1')
const lableInput2 = document.querySelector('.lable_input2')
const lableInput3 = document.querySelector('.lable_input3')


btnCommission2.addEventListener('click' , () => {
    btnCommission1.style.background = "rgb(161 161 170)"
    btnCommission2.style.background = "rgb(239 68 68)"
    lableInput1.style.display = "block"
    lableInput2.style.display = "block"
    lableInput3.innerHTML = "درصورت نداشتن اجاره خالی باقی بماند"
})



btnCommission1.addEventListener('click' , () => {
    btnCommission2.style.background = "rgb(161 161 170)"
    btnCommission1.style.background = "rgb(239 68 68)"
    lableInput1.style.display = "none"
    lableInput2.style.display = "none"
    lableInput3.innerHTML = "ثمن مامعله به تومان"
})
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donate-btn').classList.remove('bg-[#B4F461]')
    document.getElementById('history-btn').classList.add('bg-[#B4F461]')
})
document.getElementById('donate-btn').addEventListener('click', function(){
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]')
    document.getElementById('donate-btn').classList.add('bg-[#B4F461]')
})

document.getElementById('history-btn').addEventListener('click',function(){
    showSection('history-section')
})
document.getElementById('donate-btn').addEventListener('click',function(){
    showSection('donation-section')
})
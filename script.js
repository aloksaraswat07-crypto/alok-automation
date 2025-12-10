// Replace with your full international number (country code + number)
const WHATSAPP_NUMBER = '918273135013';

document.getElementById('waBtn').addEventListener('click', () => {
    const message = encodeURIComponent('Hi Alok, I want a free demo for WhatsApp automation. My business: ');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
});

document.getElementById('ctaDemo').addEventListener('click', () => 
    document.getElementById('waBtn').click()
);

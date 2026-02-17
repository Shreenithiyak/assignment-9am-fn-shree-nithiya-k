<script>
    const THEME_COLOR = '#3f88d0ff';
    const API_URL = 'https://api.example.com/';
    const TAX_RATE = 0.07;
    
    document.body.style.backgroundColor = THEME_COLOR;

    let price = 100;
    let taxAmount = price*TAX_RATE;
    let finalPrice = price + taxAmount;

    document.getElementById("priceInfo").innerText='base price:${price},Tax(18%):${taxAmount},Final Price:${finalPrice}';

    document.write("data will be fetched from:"+API_URL);
    

    
let counter = 0; // variable to track counter

const counterDisplay = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

incrementBtn.addEventListener("click", () => {
  counter++;
  counterDisplay.innerText = counter;
});
decrementBtn.addEventListener("click", () => {
  counter--;
  counterDisplay.innerText = counter;
});
// -------------------------------
// Toggle functionality
// -------------------------------
let isOn = false; // variable to track toggle state
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () =>)
  isOn = !isOn; // flip state
  if (isOn) {
    toggleBtn.innerText = "ON";
    toggleBtn.classList.remove("toggle-off");
    toggleBtn.classList.add("toggle-on");
  } else {
    toggleBtn.innerText = "OFF";
    toggleBtn.classList.remove("toggle-on");
    toggleBtn.classList.add("toggle-off");
  };


</script>



/* const THEME_COLOR = '#3f88d0ff';
    const API_BASE_URL = 'https://api.example.com/';
    // const SUPPORT_EMAIL = 'support@example.com';
    const TAX_RATE = 0.07; // 7% */

    /* const APP_CONFIG = Object.freeze({
        theme-Color: THEME_COLOR,
        apiBaseUrl: API_BASE_URL,
        supportEmail: SUPPORT_EMAIL,
        salesTaxRate: SALES_TAX_RATE
    });

    // Apply theme color to meta
     
     const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', APP_CONFIG.themeColor);
 // Example usages
    
    console.log('App config:', APP_CONFIG);
    function calculateTax(amount) {
        return +(amount * APP_CONFIG.salesTaxRate).toFixed(2);
    }
    console.log('Tax on 100:', calculateTax(100));          */
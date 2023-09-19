

// mobile country code
const input = document.querySelector("#number");

 intlTelInput(input, {
    initialCountry: geoplugin_countryCode(),
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
  });
const a="/AilinBaudinCV/demo/images/flag/flag_placeholder.png";class o{getCustomersSmall(){return fetch("/demo/data/customers-small.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>e.data)}getCustomersMedium(){return fetch("/demo/data/customers-medium.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>e.data)}getCustomersLarge(){return fetch("/demo/data/customers-large.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>e.data)}}export{o as C,a as _};
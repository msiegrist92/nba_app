const kobe = {
  element: document.getElementById('Kobe'),
  label: "Kobe",
  json_path: '../json/Kobe.json',
  pale_class: 'kobe_pale',
  chart_color: 'rgba(85, 37, 130, .8)'
}
kobe.element.addEventListener("click", (e) => {
  e.preventDefault();
  buttonController(myChart, kobe);
})

const allen = {
  element: document.getElementById('Allen'),
  label: 'AI',
  json_path: '../json/Allen.json',
  pale_class: 'allen_pale',
  chart_color: 'rgba(187, 151, 84, .8)'
}

allen.element.addEventListener("click", (e) => {
  e.preventDefault();
  buttonController(myChart, allen);
})

const derrick = {
  element: document.getElementById('Derrick'),
  label: 'DRose',
  json_path: '../json/Derrick.json',
  pale_class: 'derrick_pale',
  chart_color: 'rgba(206, 17, 65, .8)'
}

derrick.element.addEventListener("click", (e) => {
  e.preventDefault();
  buttonController(myChart, derrick);
})

const hakeem = {
  element: document.getElementById('Hakeem'),
  label: 'Dream',
  json_path: '../json/Hakeem.json',
  pale_class: 'hakeem_pale',
  chart_color: 'rgba(255,  199,44, .8)'
}

hakeem.element.addEventListener("click", (e) => {
  e.preventDefault();
  buttonController(myChart, hakeem);
})

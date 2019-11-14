// API key daf90bf3cb90d58f344174ca345725da;
//unsplash auth 5e58f855051d6436bc43a9b1a127727f330c137360afcdcd32c1252f27955d79

//function to create elements
function createNode (element) {
  return document.createElement (element);
}

//function to append elements to the DOM
function append (parent, el) {
  return parent.appendChild (el);
}

//declare elements
let ul = createNode ('ul');
let li = createNode ('li');
let img = createNode ('img');
let input = createNode ('input');
let button = createNode ('button');
let p = createNode ('p');
let h1 = createNode ('h1');
//append elements
// document.body.appendChild(ul);
// append(ul, li);
// append(li, img);
document.body.appendChild (h1);
h1.innerText = 'Weater in your city';
h1.marginBottom = '1em';
h1.style.fontFamily = 'Arial';
h1.style.fontSize = '1.5em';

//appent and style input
document.body.appendChild (input);
input.type = 'text';
input.placeholder = 'type city name';
input.style.height = '3em';
input.style.borderRadius = '0.4em';
input.style.borderStyle = 'solid';
input.style.borderWidth = 'thin';
input.style.width = '200px';
input.style.paddingLeft = '1em';
input.style.marginBottom = '1em';
input.style.fontSize = '.8em';
input.id = 'cityName';

//append and style search button
document.body.appendChild (button).innerText = 'Search';
button.type = 'submit';
button.style.padding = '0.955em';
button.style.borderRadius = '0.4em';
button.style.borderStyle = 'solid';
button.style.borderWidth = 'thin';
button.style.marginLeft = '10px';
button.style.fontSize = '.8em';
button.id = 'cityWeather';

p.style.fontFamily = 'Arial';
p.style.fontSize = '0.8em';
p.style.textTransform = 'uppercase';
p.style.fontWeight = '800';

//get new weather by clicking the button
document.getElementById ('cityWeather').onclick = function () {
 
  if (input.value === '') {
    document.body.appendChild(p).innerText = 'Please enter a city name';
  } else {
    document.body.appendChild(p).innerText = input.value + ' weather';
  }
  console.log (input.value);

  fetch (
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=daf90bf3cb90d58f344174ca345725da`
  )
    .then (function (resp) {
      return resp.json ();
    })
    // .then (function(data) {
    //    for (const i in data) {
    //     if (data.hasOwnProperty(i)) {
    //        console.log(`${i}: ${data[i]}`);
    //    }
    //   }
    .then (function(data) {
      Object.entries(data).forEach (([key, value]) => {
        console.log (`${key}: ${value}`);

        // document.body.appendChild(p).innerText = `${key}: ${value}`;

      });
    });
};
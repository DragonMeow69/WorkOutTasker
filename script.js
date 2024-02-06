const ChestBiceps = [
  'Жим на смите',
  'Бабочка/хаммер',
  'Кривой гриф на бицепс',
  'Бицепс гантелями',
  'Молотки',
  'Французкий жим',
  'Зелёный трицепс',
  'Бык трицепс',
  'Брусья + пресс',
  'The end!',
];

const BackTriceps = [
  'Зайчик',
  'Верхняя тяга',
  'Р-с гантелей ',
  'Смит на плечи',
  'Жим ногами',
  'С-р ногами',
  'С-р ногами',
  'С-р ногами наоборот',
  'Икры на смите + пресс',
  'The end!',
];

// const LegsShoulders = [
//   'Legs + Shoulders 1',
//   'Legs + Shoulders 2',
//   'Legs + Shoulders 3',
//   'Legs + Shoulders 4',
//   'The end!',
// ];

let currentIndex = 0;

let dataItem = ChestBiceps

const body = document.body

DataInput = []

function mainPage() {



  const section = document.createElement('section')
  section.classList = ('section')
  body.appendChild(section)

  const h1 = document.createElement('h1')
  h1.classList = ('main-text')
  h1.textContent = 'Choose the workout what you want';
  section.appendChild(h1)


  const select = document.createElement('select')
  select.classList = ('select')
  section.appendChild(select)

  const option0 = document.createElement('option')
  option0.classList = ('option')
  option0.value = '0'
  option0.selected = true
  option0.disabled = true
  option0.textContent = 'Type:'
  select.appendChild(option0)

  const option1 = document.createElement('option')
  option1.classList = ('option')
  option1.value = '1'
  option1.textContent = 'Chest + Arms'
  select.appendChild(option1)

  const option2 = document.createElement('option')
  option2.classList = ('option')
  option2.value = '2'
  option2.textContent = 'Back + Shoulders + Legs'
  select.appendChild(option2)

  const option3 = document.createElement('option')
  option3.classList = ('option')
  option3.value = '3'
  option3.disabled = true
  option3.textContent = 'Other'
  select.appendChild(option3)

  const buttonStart = document.createElement('button')
  buttonStart.classList = ('buttonStart')
  buttonStart.textContent = `Satrt`
  section.appendChild(buttonStart)

  buttonStart.addEventListener('click', () => {
    if (select.value === '0') {
      alert('Choose option!');
      return
    } else if (select.value === '1') {
       dataItem = ChestBiceps
      //  console.log(dataItem);
    } else if (select.value === '2') {
       dataItem = BackTriceps
      //  console.log(dataItem);
    }
     else if (select.value === '3') {
       dataItem = LegsShoulders
      //  console.log(dataItem);
    } else {
      alert('Mistkae in buttonStart')
    }

    section.remove()
    WorkOutTest()
  });




} 

mainPage()



function WorkOutTest() {

    
  const section = document.createElement('section')
  section.classList = ('section')
  body.appendChild(section)

  const h1 = document.createElement('h1')
  h1.classList = ('task-text')
  h1.textContent = dataItem[currentIndex];
  section.appendChild(h1)

  const input = document.createElement('input')
  input.classList = ('tsakInput')
  input.placeholder = 'Write ur progress'
  section.appendChild(input)
  
  const progress = document.createElement('div')
  progress.classList = ('progress')
  section.appendChild(progress)

  const progressDone = document.createElement('div')
  progressDone.classList = ('progress-done')
  progress.appendChild(progressDone)

  const btnSection = document.createElement('section')
  btnSection.classList = ('btnSection')
  section.appendChild(btnSection)

  const button2 = document.createElement('button')
  button2.classList = ('task-btn')
  button2.textContent = `<`
  btnSection.appendChild(button2)

  const button = document.createElement('button')
  button.classList = ('task-btn')
  button.textContent = `>`
  btnSection.appendChild(button)

  const buttonEnd = document.createElement('button')
  buttonEnd.classList = ('task-btn-end')
  buttonEnd.textContent = `End this workout`
  buttonEnd.style.display = 'none'
  section.appendChild(buttonEnd)


  let finalValue = 0
  let max = dataItem.length - 1


  function CheckBar(){
    progressDone.style.width = `${(finalValue / max) * 100}%`
  }

  function SaveInputData(){
    var inputValue = input.value
    console.log(h1.textContent, ':',inputValue);
    var inputTimeData = `${h1.textContent} : ${inputValue}`
    var existingIndex = DataInput.findIndex(item => item.startsWith(`${h1.textContent} : `));
    if (existingIndex !== -1) {
        DataInput[existingIndex] = inputTimeData;
    } else {
        DataInput.push(inputTimeData);
    }
    console.log(DataInput);
    input.value = ''
  }

  CheckBar()

  if (currentIndex === 0) {
    button2.disabled = true;
    button2.classList.add('dis');
  }


  button.addEventListener('click', ()=>{

    SaveInputData()


    currentIndex = (currentIndex + 1) % dataItem.length;
    h1.textContent = dataItem[currentIndex];
    finalValue += 1



    if (h1.textContent === "The end!") {
      buttonEnd.style.display = 'block'
      btnSection.style.display = 'none'
      input.style.display = 'none'
      var outputText = DataInput.join('\n');
      console.log(outputText);
      h1.textContent = outputText
    }

    if (currentIndex != 0) {
      button2.disabled = false;
      button2.classList.remove('dis');
    } else if (currentIndex === 0) {
      button2.disabled = true;
      button2.classList.add('dis');
    }


    CheckBar()
  });



  button2.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + dataItem.length) % dataItem.length;
    h1.textContent = dataItem[currentIndex];
    finalValue -= 1
    CheckBar()



    if (currentIndex === 0) {
      button2.disabled = true;
      button2.classList.add('dis');
    }
  });

  buttonEnd.addEventListener('click', ()=> {
    currentIndex = 0
    section.remove()
    mainPage()
  })
}

// WorkOutTest()


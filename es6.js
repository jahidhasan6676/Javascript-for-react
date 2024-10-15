// template string---->
const obj = {
    name:'jahid',
    age: 21,
    class: 13,
    subjects:[
        {
            bangla: 80,
            english: 60,
            math: 50,
            ict:{
                first: 40,
                second: 60,
            } 
        }
    ],
    collage: 'govt collage'
};
const chaining = obj.subjects[1]?.ict?.second;
console.log(chaining)

// const sentence = `My name is ${obj.name}. My english marks: ${obj.subjects[0].english}`;
// console.log(sentence)



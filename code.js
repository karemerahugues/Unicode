const button = document.getElementById('getCode');

button.addEventListener('click',function(){
    input = document.getElementById('info').value;
    if(input.length === 0){
        document.getElementById('output').textContent ="Please enter anything";
        return;
    }
 const result = input.codePointAt(0);
 document.getElementById('output').textContent = `The unicode of ${input} is ${result}`;
});
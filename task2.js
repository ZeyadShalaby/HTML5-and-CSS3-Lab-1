document.getElementById('red').addEventListener('input', color);
document.getElementById('green').addEventListener('input', color);
document.getElementById('blue').addEventListener('input', color);

function color(){
    let red=document.getElementById('red').value;
    let green=document.getElementById('green').value
    let blue=document.getElementById('blue').value
    let color='rgb('+red+','+green+','+blue+')';
    document.getElementById('text').style.color=color;
}

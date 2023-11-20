document.write('Q1')
document.write('<br>')
var code=prompt('Enter  your code')
if(code>='67' && code<'92'){
alert('Your Enterd Upercase letter')
document.write('Your Enterd Upercase letter')
}
else if(code>='97' && code<'122'){
    alert('Your Enterd Upercase letter')
    document.write('Your Enterd Upercase letter')
    }
    else{
        alert('you entered invalid code')
    }
document.write('<br>')
document.write('<br>')

document.write('Q2')
document.write('<br>')
var num1= prompt ("Enter your first number")
var num2= prompt ("Enter your second number")
if (num1 == num2){
    alert(num1+'is equal to'+num2)
    document.write(num1+'is equal to'+num2)
} 
else if(num1>num2){
    alert(num1+'is larger than'+num2)
    document.write(num1+'is larger than'+num2)
} 
else if(num1<num2){
    alert(num2+'is larger than'+num1)
    document.write(num2+'is larger than'+num1)
}
else{alert('Give the correct command')}
document.write('<br>')
document.write('<br>')

document.write('Q3')
document.write('<br>')
var a=prompt('Enter any number')
if(a==0){
    alert ('This number is 0')
    document.write('This number is 0')
}
else if(a>0){
    alert('This number is positive')
    document.write('This number is Positive')
}
else if(a<0){
    alert('This number is Negative')
    document.write('This number is Negative')
}
else(alert('Give the correct command'))
document.write('<br>')
document.write('<br>')

document.write('Q4')
document.write('<br>')
var vowel= prompt('Enter any English alphabet')
if(vowel==='a'){
    alert('This letter is vowel.')
    document.write('This letter is vowel.')
}
else if(vowel==='e'){
    alert('This letter is vowel.')
    document.write('This letter is vowel.')
}
else if(vowel==='i'){
    alert('This letter is vowel.')
    document.write('This letter is vowel.')
}
else if(vowel==='o'){
    alert('This letter is vowel.')
    document.write('This letter is vowel.')
}
else if(vowel==='u'){
    alert('This letter is vowel.')
    document.write('This letter is vowel.')
}
else{
    alert('This letter is consonant.')
    document.write('This letter is consonant.')
}
document.write('<br>')
document.write('<br>')

document.write('Q5')
document.write('<br>')
var strongPassword = "12345678"
var password = prompt ( " Enter  your password " )
if ( password === " "  ){
alert (" plz Enter your  password ")
document.write('plz Enter your password')
} else if ( password === strongPassword  ){
alert (" loging in...")
document.write('loging in...')
}
else {
alert('Enter the Correct Password')
document.write('Enter the Correct Password')
}
document.write('<br>')
document.write('<br>')

document.write('Q6')
document.write('<br>')
var greeting=prompt('Enter the hour')
if (greeting < 18) {
alert ("Good Day")
document.write('Good Day')
}
else
{alert ("Good Evening")
document.write('Good Evening')}
document.write('<br>')

document.write('Q7')
document.write('<br>')
var time=prompt('Enter the time in 24hours clock. like(13,14,17')
if(time>=5 && time<12){
alert('Good Morning')
document.write('Good Morning')
}
else if(time>=12 && time<17){
    alert('Good Afternoon')
    document.write('Good Afternoon')
}
else if(time>=17 && time<21){
    alert('Good Evening')
    document.write('Good Evening')
}
else if(time>=21 &&  time<24){
    alert('Good Night')
    document.write('Good Night')
}
else if(time== ""){
    alert('Fill the field to get answer')
    document.write('Fill the field to get answer')
}
else{alert('Enter the correct hour in 24hrs clock only')
document.write('Enter the correct hour in 24hrs clock only')}

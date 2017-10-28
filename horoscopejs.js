//happy friday
var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius",
    "Capricorn", "Invalid birthday"];
var zodiac = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];

function doIt() {
    var user = prompt("What is your name?", "");
    document.getElementById("name").innerHTML = "Hello " + user + "! Here is your horoscope:";    var month =
        document.getElementById("Month").value;
    console.log(typeof month);
    console.log(typeof parseInt(month));
    var day = document.getElementById("Day").value;
    console.log(typeof day);
    console.log(typeof parseInt(day));
    var sign = determineSign(parseInt(month), parseInt(day));
    console.log(sign);
    document.getElementById("output").innerHTML = getHoroscope(sign);
    document.getElementById("image").innerHTML = "<img src= 'img/" + getImage(sign) + ".png'>";
}

function getHoroscope (sign){
    if (sign === 0){
        return "You are an Aquarius. In the future, you will likely stumble upon a large sum of money. It could " +
            "come to you at any time, likely when you will least expect it. This fortune may help you in some ways, " +
            "but beware of the ways in which it can hurt you. Money alone does not bring contentment. Remember to use" +
            "your riches for good.";
    }
    if (sign === 1){
        return "You are a Pisces! Beware... in your near future you will experience extreme hardship. Those close to you " +
            "will guide you through your trying times, but it is ultimately up to you and you alone to work through your " +
            "problems. Struggling to overcome your issues will end up being a pivotal accomplishment in your life and will " +
            "end up serving you very well.";
    }
    if (sign === 2){
        return "You an an Aries. In your near future, you will meet someone that will change your life. It could be a " +
            "stranger at a bus stop, a waiter at a restaurant, or any random passerby. When you first meet them, you will" +
            "not know their significance in your life, but with time, you'll understand how great the impact they've" +
            "had on your life is.";

    }
    if (sign === 3){
        return "Taurus! In your near future, you will be presented with an incredible opportunity. If your eyes are not " +
            "fully open it may be easy to miss this opportunity, so stay alert so as not to miss out on an amazing future." +
            "It could be disguised as a daunting opportunity, but it is essential that you abandon your fears in order" +
            "to benefit from it.";
    }
    if (sign === 4){
        return "You are a Gemini. Your future holds immense humor. Your life will suddenly become funnier than it ever has" +
            "been in the past. Embrace this. Laughter is the best medicine for any ailment. Have fun giggling!";
    }
    if (sign === 5){
        return "You are a Cancer. Unfortunately, your future holds great confusion. You will be presented with multiple " +
            "ethical dilemmas that will be difficult to resolve. Stay true to your heart though, and all will end up " +
            "working out in you favor.";
    }
    if (sign === 6){
        return "Leo! Big changes are in your future. Change can be a source of discomfort, but if you relax and get some" +
            "perspective on your life, you will find that you can handle any change that life throws at you.";
    }
    if (sign === 7){
        return "You are a Virgo! Your future holds riches, happiness, and love. Even if you've been feeling down lately," +
            "the tides will soon change and you will notice your mood significantly improving. All the hard work you've" +
            "been putting into your daily tasks will end up paying off! That doesn't mean you can slack off though--" +
            "you must continue to work hard in order to see the benefits of your labor.";
    }
    if (sign === 8){
        return "You are a Libra and it is extremely likely that you will lose a large sum of money in the near future." +
            " This can be avoided, so keep a close eye on your spending. In fact, this loss will be a great financial " +
            "lesson for you to grow as a responsible person.";
    }
    if (sign === 9){
        return "Scorpio! Your most creative self will blossom in the near future. When you feel a creative idea coming, " +
            "treasure it and use it to create something amazing. Your hard work and innovation will pay off very soon.";
    }
    if (sign === 10){
        return "You are a Sagittarius! You've been feeling anxious and worrisome about what the future holds for you, " +
            "but take a deep breath and relax. You will find yourself managing anything that is thrown at you with grace " +
            "and positivity.";
    }
    if (sign === 11){
        return "You are a Capricorn. Be grateful to all those around you. Your support network is what is holding you " +
            "together, and in the near future something may jeopardize one of your closest relationships. It is up to " +
            "you to prevent conflict for both of your best interests.";
    }
    if (sign === 12){
        return "I'm sorry. You've entered an invalid birthday. Please try again with a valid birthday.";
    }
}


function determineSign(month, day) {
    if (month === 1 && day >= 20 || month === 2 && day <= 19) {
        return 0;
    }
    if (month === 2 && day >= 19 && day <= 28 || month === 3 && day <= 20) {
        return 1;
    }
    if (month === 2 && day > 28){
        return 12;
    }
    if (month === 3 && day >= 21 || month === 4 && day <= 19) {
        return 2;
    }
    if (month === 4 && day >= 20 && day < 31 || month === 5 && day <= 20) {
        return 3;
    }
    if (month === 4 && day === 31){
        return 12;
    }
    if (month === 5 && day >= 21 || month === 6 && day <= 20) {
        return 4;
    }
    if (month === 6 && day >= 21 && day < 31|| month === 7 && day <= 22) {
        return 5;
    }
    if (month === 6 && day === 31){
        return 12;
    }
    if (month === 7 && day >= 23 || month === 8 && day <= 22) {
        return 6;
    }
    if (month === 8 && day >= 23 || month === 9 && day <= 22) {
        return 7;
    }
    if (month === 9 && day >= 23 && day < 31 || month === 10 && day <= 22) {
        return 8;
    }
    if (month === 9 && day === 31){
        return 12;
    }
    if (month === 10 && day >= 23 || month === 11 && day <= 21) {
        return 9;
    }
    if (month === 11 && day >= 22 && day < 31 || month === 12 && day <= 21) {
        return 10;
    }
    if (month === 11 && day === 31){
        return 12;
    }
    if (month === 12 && day >= 22 || month === 1 && day <= 19) {
        return 11;
    }

}


function getImage(sign){

    if (sign === 0){
        return "aquarius";
    }
    if (sign === 1){
        return "pisces";
    }
    if (sign === 2){
        return "aries";
    }
    if (sign === 3){
        return "taurus";
    }
    if (sign === 4){
        return "gemini";
    }
    if (sign === 5){
        return "cancer";
    }
    if (sign === 6) {
        return "leo";
    }
    if (sign === 7){
        return "virgo";
    }
    if (sign === 8){
        return "libra";
    }
    if (sign === 9){
        return "scorpio";
    }
    if (sign === 10){
        return "sagittarius";
    }
    if (sign === 11) {
        return "capricorn";
    }
}

function determineZodiac (year){
    if (year === 1 || year === 13 || year === 24 || year === 36 || year === 48){
        return 0;
    }
    if (year === 2 || year === 14 || year === 25 || year === 37 || year === 49){
        return 1;
    }
    if (year === 3 || year === 15 || year === 26 || year === 38 || year === 50){
        return 2;
    }
    if (year === 4 || year === 16 || year === 27 || year === 39 || year === 51){
        return 3;
    }
    if (year === 5 || year === 17 || year === 28 || year === 40 || year === 52){
        return 4;
    }
    if (year === 6 || year === 18 || year === 29 || year === 41 || year === 53){
        return 5;
    }
    if (year === 7 || year === 19 || year === 30 || year === 42 || year === 54){
        return 6;
    }
    if (year === 8 || year === 20 || year === 31 || year === 43 || year === 55){
        return 7;
    }
    if (year === 9 || year === 21 || year === 32 || year === 44 || year === 56){
        return 8;
    }
    if (year === 10 || year === 22 || year === 33 || year === 45 || year === 57){
        return 9;
    }
    if (year === 11 || year === 23 || year === 34 || year === 46){
        return 10;
    }
    if (year === 12 || year === 24 || year === 35 || year === 47){
        return 11;
    }
}

function getSymbol(symbol){
    if (symbol === 0){
        return "Rat";
    }
    if (symbol === 1){
        return "Ox";
    }
    if (symbol === 2){
        return "Tiger";
    }
    if (symbol === 3){
        return "Rabbit";
    }
    if (symbol === 4){
        return "Dragon";
    }
    if (symbol === 5){
        return "Snake";
    }
    if (symbol === 6){
        return "Horse";
    }
    if (symbol === 7){
        return "Goat";
    }
    if (symbol === 8){
        return "Monkey";
    }
    if (symbol === 9){
        return "Rooster";
    }
    if (symbol === 10){
        return "Dog";
    }
    if (symbol === 11){
        return "Pig";
    }
}

function chineseZodSymbol (){
    var theYear = document.getElementById("Year").value;
    var yearNum = parseInt(theYear);
    var zodiacSign = determineZodiac(yearNum);
    document.getElementById("output2").innerHTML = getSymbol(zodiacSign);

}

function reset() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("image").innerHTML = "";
    document.getElementById("name").innerHTML = "";
    document.getElementById("output2").innerHTML = "";
}

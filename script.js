function recipe(){
    return new Promise(function(resolve) {
        document.getElementById("step1").innerHTML = "First blanch the spinach, this helps to keep the spinach color bright. To blanch the spinach, boil about 6 cups of water in a saucepan, and let the spinach boil for one minutes. Drain the water and put the spinach in ice cold water for about two minutes. Drain the water.";
        document.getElementById("step2").innerHTML = "Blend the spinach, ginger and green chili. Spinach should be creamy but not pasty.";
        document.getElementById("step3").innerHTML = "Soak the cubed paneer in about three cups of hot water, for about 5 minutes or more. This helps to give the paneer soft texture. Set aside.";
        document.getElementById("step4").innerHTML = "While cooking, spinach can splatter, use larger sauce pan. Heat the oil in a sauce pan, over medium high heat. Test the heat by adding one cumin seed to the oil; if it cracks right away it is ready.";
        document.getElementById("step5").innerHTML = "Add cumin seed, and asafetida. After cumin seeds crack, add the tomatoes and stir fry for 1-2 minutes. Tomatoes should be tender not mushy. Add coriander, turmeric, red chili powder, salt, and sugar, stir and add the spinach.";
        document.getElementById("step6").innerHTML = "After spinach comes to boil lower the heat to low, and let the spinach cook for about 5-6 minutes do not cover the pot. This helps keeping the green color of spinach.";
        document.getElementById("step7").innerHTML = "Mix the flour to 1/2 cup of water and add to the spinach, also add the cream. Mix it well and let it cook for five minutes. If needed add little more water.";
        document.getElementById("step8").innerHTML = "Drain the paneer and fold it gently with spinach and let it simmer for about five minutes.";
        resolve();
    });
}
document.getElementById('button').addEventListener('click', function(){
    recipe().then(function(){
        setTimeout(()=>{
    document.getElementById('step9').innerHTML+= '<br> P.s: It is made purely out of love'},2000)});
});
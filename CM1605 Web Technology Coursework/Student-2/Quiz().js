function Quiz() {
    let total = 0;
    let ans1 = prompt("What is the currency of Denmark?");
    if (ans1.toLowerCase() == "danish krone") {
        alert("Correct Answer! You received 2 points.")
        total = total + 1;
    } else {
        alert("Wrong Answer! Reduced 1 point.")
        total = total - 1;
    }
    let ans2 = prompt("Which country in the world is believed to have the most miles of motorway?");
    if (ans2.toLowerCase() == "china") {
        alert("Correct Answer! You received 2 points.")
        total = total + 1;
    } else {
        alert("Wrong Answer! Reduced 1 point.")
        total = total - 1;
    }
    let ans3 = prompt("Which European city hosted the 1936 Summer Olympics?");
    if (ans3.toLowerCase() == "berlin") {
        alert("Correct Answer! You received 2 points.")
        total = total + 1;
    } else {
        alert("Wrong Answer! Reduced 1 point.")
        total = total - 1;
    }
    let ans4 = prompt("What is the capital city of Australia?");
    if (ans4.toLowerCase() == "canberra") {
        alert("Correct Answer! You received 2 points.")
        total = total + 1;
    } else {
        alert("Wrong Answer! Reduced 1 point.")
        total = total - 1;
    }
    let ans5 = prompt("How many notes are there in a musical scale?");
    if (ans5.toLowerCase() == "7" || "seven") {
        alert("Correct Answer! You received 2 points.")
        total = total + 1;
    } else {
        alert("Wrong Answer! Reduced 1 point.")
        total = total - 1;
    }
    let badge = "";
    if (total >= 6) {
        badge = "Gold";
    }
    if (total >= 3) {
        badge = "Silver";
    }
    if (total >= 1) {
        badge = "Bronze";
    }
    if (total <= 0) {
        badge = "no";
    }
    alert("Congratulation! You have earned " + total + " points in total with " + badge + " badge.");
    alert(" with " + badge + " badge.");
}
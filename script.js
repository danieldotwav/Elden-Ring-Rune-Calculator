function calculateRunes(currentLevel, desiredLevel) {
    function runesForLevel(level) {
        let x = ((level + 81) - 92) * 0.02;
        x = Math.max(x, 0); // Ensure x is not below 0
        return Math.floor(((x + 0.1) * Math.pow((level + 81), 2)) + 1);
    }

    let totalRunes = 0;
    for (let level = currentLevel; level < desiredLevel; level++) {
        totalRunes += runesForLevel(level);
    }

    return totalRunes;
}

/*

function calculateRunes(currentLevel, desiredLevel) {
    function runesForLevel(level) {
        let x = ((level + 81) - 92) * 0.02;
        x = Math.max(x, 0); // Ensure x is not below 0
        return Math.floor(((x + 0.1) * Math.pow((level + 81), 2))) + 1;
    }

    let totalRunes = 0;
    for (let level = currentLevel + 1; level <= desiredLevel; level++) {
        totalRunes += runesForLevel(level);
    }

    return totalRunes;
}

*/

document.getElementById('calculateButton').addEventListener('click', function () {
    var currentLevel = parseInt(document.getElementById('currentLevel').value, 10);
    var desiredLevel = parseInt(document.getElementById('desiredLevel').value, 10);

    if (!isNaN(currentLevel) && !isNaN(desiredLevel)) {
        var runesNeeded = calculateRunes(currentLevel, desiredLevel);
        document.getElementById('result').innerText = `Runes needed: ${runesNeeded}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid levels.';
    }
});

function updateLevelValue(level, value) {
    document.getElementById(level).innerText = value;
}

function updateRunesNeeded() {
    var currentLevel = parseInt(document.getElementById('currentLevel').value, 10);
    var desiredLevel = parseInt(document.getElementById('desiredLevel').value, 10);
    updateLevelValue('currentLevelValue', currentLevel);
    updateLevelValue('desiredLevelValue', desiredLevel);
    if (currentLevel <= desiredLevel) {
        var runesNeeded = calculateRunes(currentLevel, desiredLevel);
        document.getElementById('result').innerText = `Runes needed: ${runesNeeded}`;
    } else {
        document.getElementById('result').innerText = 'Desired level must be greater than current level.';
    }
}
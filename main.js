document.getElementById('analyzeButton').addEventListener('click', () => {
    const story = document.getElementById('storyInput').value;

    let overusedWords = ['really', 'very', 'basically'];
    let unnecessaryWords = ['extremely', 'literally', 'actually'];

    const storyWords = story.split(' ');
    console.log(storyWords.length);

    let betterWords = storyWords.filter(function(word) {
        return !unnecessaryWords.includes(word);
    });

    let reallyCount = 0;
    let veryCount = 0;
    let basicallyCount = 0;

    for (word of storyWords) {
        if (word === 'really') {
            reallyCount += 1;
        } else if (word === 'very') {
            veryCount += 1;
        } else if (word === 'basically') {
            basicallyCount += 1;
        }
    };

    let sentences = 0;

    for (word of storyWords) {
        if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
            sentences += 1;
        }
    };

    document.getElementById('wordCount').innerText = `Word count: ${storyWords.length}`;
    document.getElementById('sentenceCount').innerText = `Sentence count: ${sentences}`;
    document.getElementById('reallyCount').innerText = `Count of "really": ${reallyCount}`;
    document.getElementById('veryCount').innerText = `Count of "very": ${veryCount}`;
    document.getElementById('basicallyCount').innerText = `Count of "basically": ${basicallyCount}`;
    document.getElementById('betterStory').innerText = betterWords.join(' ');
});
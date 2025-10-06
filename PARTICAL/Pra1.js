//objects
const votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0
};

//
function vote(language) {
    votes[language]++;
    incrementVotes();
}

// onclick  updates of votes
function incrementVotes() {
    document.getElementById('js-count').textContent = votes.JavaScript;
    document.getElementById('py-count').textContent = votes.Python;
    document.getElementById('java-count').textContent = votes.Java;
}

// set time for real-time updates of votes
setInterval(() => {
    const Language = ['JavaScript', 'Python', 'Java'];
    const randomVote = Language[Math.floor(Math.random() * Language.length)];
    votes[randomVote]++;
    incrementVotes();
}, 1000);

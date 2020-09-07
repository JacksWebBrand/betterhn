const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const titleContainer = document.getElementById('title-container');
const fasIcon = document.getElementById('toggle-icon');
const titleText = document.querySelector('h1');
const secondaryText = document.querySelector('h2');

let isLoaded = false

const currentTheme = localStorage.getItem('theme');

apple.forEach(item => {
    // Create Container -- function is getting data from hn-data.js
    const itemContainer = document.createElement('div');
    itemContainer.classList = 'item-container'
    // Link Element
    const itemLink = document.createElement('a');
    itemLink.setAttribute('href', `${item.link}`);
    itemLink.setAttribute('target', '_blank');
    itemLink.textContent = `${item.title}`
    itemLink.classList = 'item-link'
    // Votes
    itemVotes = document.createElement('p');
    itemVotes.textContent = `${item.votes}`
    itemVotes.classList = 'item-vote'
    // Create <hr> element
    hr = document.createElement('hr')
    // Create the element for rendering
    itemContainer.append(itemLink, itemVotes);
    document.body.append(itemContainer, hr);
});
const linkText = document.querySelectorAll('.item-link');

function setDark() {
    document.body.classList.replace('light-background', 'dark-background')
    titleContainer.classList.add('dark-title');
    secondaryText.classList.add('dark-secondary');
    fasIcon.children[0].classList.replace('fa-sun', 'fa-moon');
    linkText.forEach(item => { item.style.color = '#b9b9b9' });
    localStorage.setItem('theme', 'dark');
}

function setLight() {
    document.body.classList.replace('dark-background', 'light-background')
    titleContainer.classList.remove('dark-title');
    secondaryText.classList.remove('dark-secondary');
    fasIcon.children[0].classList.replace('fa-moon', 'fa-sun');
    linkText.forEach(item => { item.style.color = '#585858' });
    localStorage.setItem('theme', 'light');
}

function switchTheme(e) {
    if (e.target.checked) {
        setDark();
    } else {
        setLight();
    }
}

// Event Listeners
toggleSwitch.addEventListener('change', switchTheme);

//On Load - check if user has chosen a theme (dark or light) before, and set accordingly
if (!isLoaded) {
    if (currentTheme === 'dark') {
        setDark();
        isLoaded = true;
    } else {
        setLight();
        isLoaded = true;
    }
}
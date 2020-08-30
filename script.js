console.log(apple)

apple.forEach(item => {
    // Create Container
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
})
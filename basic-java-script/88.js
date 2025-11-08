// Counting Cards
let count = 0;

function cc(card) {
    // Update count based on the card value
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    // Return the count followed by the proper action
    return count + (count > 0 ? " Bet" : " Hold");
}
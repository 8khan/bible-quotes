# Random Bible Quote

[![npm version](https://badge.fury.io/js/bible-quotes.svg)](https://badge.fury.io/js/bible-quotes)

A lightweight and simple Node.js package to get random Bible quotes from the King James Version (KJV).

## Features

- Zero dependencies
- Simple and easy-to-use API
- Includes the full text of the King James Version (KJV) Bible

## Installation

Install the package using npm:

```bash
npm install bible-quotes
```

## Usage

Import the package and use the `getRandomQuote` function to retrieve a random quote.

```javascript
const { getRandomQuote } = require('bible-quotes');

// Get a random quote object
const randomQuote = getRandomQuote();

// Log the entire quote object
console.log(randomQuote);

// You can also destructure the properties for individual use
const { book, chapter, verse, text } = getRandomQuote();
console.log(`${book} ${chapter}:${verse} - "${text}"`);
```

### Example Output

The `getRandomQuote()` function returns an object with the following structure:

```json
{
  "book": "Proverbs",
  "chapter": "3",
  "verse": "5",
  "text": "Trust in the LORD with all your heart and lean not on your own understanding;"
}
```

A formatted example:

```
Proverbs 3:5 - "Trust in the LORD with all your heart and lean not on your own understanding;"
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT

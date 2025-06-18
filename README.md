# Random Bible Quote

[![npm version](https://badge.fury.io/js/%408khan%2Fbible-quotes.svg)](https://badge.fury.io/js/@8khan/bible-quotes)

A lightweight and simple Node.js package to get random or specific Bible quotes from multiple versions.

## Features

- Zero dependencies
- Simple and easy-to-use API
- Includes the full text of multiple Bible versions:
  - King James Version (KJV)
  - New International Version (NIV)
  - Reina-Valera 1960 (RVR1960)
- Get a random verse.
- Get a specific verse by reference (e.g., "John 3:16").

## Installation

Install the package using npm:

```bash
npm install @8khan/bible-quotes
```

## Usage

Import the package and use the `getQuote` function.

### Get a Random Quote

To get a random quote, call `getQuote()` without any arguments. By default, it uses the New International Version (NIV).

```javascript
const { getQuote } = require('@8khan/bible-quotes');

// Get a random quote from the NIV (default)
const randomQuote = getQuote();
console.log(randomQuote);

// Get a random quote from the King James Version (KJV)
const randomKJVQuote = getQuote(undefined, 'kjv');
console.log(`${randomKJVQuote.reference} - "${randomKJVQuote.text}"`);
```

### Get a Specific Quote

To get a specific quote, provide the verse reference as the first argument.

```javascript
const { getQuote } = require('@8khan/bible-quotes');

// Get a specific verse from the NIV (default)
const john316 = getQuote('John 3:16');
console.log(john316);

// Get a specific verse from the Reina-Valera 1960 (RVR1960)
const juan316 = getQuote('Juan 3:16', 'rvr1960');
console.log(`${juan316.reference} - "${juan316.text}"`);
```

### Example Output

The `getQuote()` function returns a `Verse` object with the following structure:

```json
{
  "book": "Proverbs",
  "chapter": 3,
  "verse": 5,
  "text": "Trust in the LORD with all your heart and lean not on your own understanding;",
  "reference": "Proverbs 3:5"
}
```

A formatted example:

```
Proverbs 3:5 - "Trust in the LORD with all your heart and lean not on your own understanding;"
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

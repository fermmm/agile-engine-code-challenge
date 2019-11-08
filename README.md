# Agile Engine code challenge - Fernando Medina

## Important notes (Please read):

* I have experience with Redux but the challenge doesn't have Redux because is not needed, using something when is not needed is a wrong desition in my opninion, so I decided to not add Redux to show this. You can see how I use Redux in the components of [this repository.](https://github.com/fermmm/boilerplate-typescript-react-redux-webpack)
* I have experience with hooks and I like them, but I didn't use them in this challenge because I noticed in the code skeletons you provided are not used eather. Maybe you don't like them.
* I'm using Typescript in this challenge because I consider it a best practice but It's ok for me to work with plain JS if the team does't like Typescript. 
* I could have used Draft.js library, but I think it's not allowed in the challenge, so I didn't use it.

## Test requirements:

The goal is to implement a component, which renders text and has several features for text manipulation and formatting.

# Must have:

1. We need to see your own code. It is not permitted to apply and configure a ready-to-use component for text formatting. We need to see your own solution. However you can use other handy components and libraries.
2. User should be able to interact with words of text by some action like double-click or some other way, to select a word. When the word is selected, the user should have possibility to apply options for this word. For simplification we expect to select separate words only; it is not expected to support selection for a part of text.
3. Minimal required formatting list is Bold, Italic and Underline.
4. Formatting settings should be persisted into an in-memory model. When the user selects formatted word, the component should indicate, what formatting options are applied. So then a repetetive formatting application removes these styles (i.e. click bold-botton - get bold text, click bold-botton again - return text weight to normal). It should be possible to apply Bold, Italic and Underline to a word at the same time.
5. Besides formatting options, the user should be able to see synonyms for any word. For getting synonyms use https://www.datamuse.com/api/. Synonyms loading should be implemented out of the component and provided into the component in some way.
6. User should be able to replace a word with a synonym, while keeping all formatting settings.
7. The solution must be flexible and extendable, so new functionality can be added in the future.
8. Target completion time is 2 hours. We would rather see what you were able to do in 2 hours, than a full-blown solution you’ve spent days implementing. Note that in addition to quality, time used is also factored into scoring the task.

# Nice to have

1. The editor accepts text input, rather than works with a predefined block of text.
2. Word formatting should be extended by color setting.
3. It should be possible to do indentation for a block of text to one or several steps (i.e. tabulation). Take a look to Gmail editor to get the idea.

## Installation

1. Run: `npm install`. If your OS is Windows you must also run: `npm install -g win-node-env`. That is all.

----

#### To run the project

```
npm start
```

----

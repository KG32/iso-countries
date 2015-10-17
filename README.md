# ISO Countries for Meteor

This package lets you convert countries to ISO codes and vice versa.

## Installation

meteor add kg32:iso-countries

## Usage examples:

Functions
```
convertCountryName('Poland');    // 'pl'       
convertCountryCode('gb');       // 'United Kingdom'
```

HTML dropdowns
```
<select>
  {{#each ISOCountries}}
    <option value={{iso}}>{{name}}</option>
  {{/each}}
</select>
```





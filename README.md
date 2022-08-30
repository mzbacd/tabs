### Setup Steps

Install dependencies

```shell
npm install
```

## Running local dev environment

```shell
npm start
```

## Running tests

```shell
npm run test
```

## Running lint

```shell
npm run lint
```

### Assumption

- Implement basic tabs based on https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/.
- Didn't aim for Perfection, the code could be improved a lot if there is no time limitation.
- Accessibility is a wide area where I am not very experienced of. If it's for production usage, it should get help from professional expert to review.
- Assume we are only targeting latest browsers so I didn't add setup any  
  autoprefixer/polyfill stuff.
- The code challenge doesn't have any backend api integration therefore I didn't setup any integration test.
- Cross browser testing ideally could be done via the e2e test. Due to the time constraint, it was done manually.
- `Active tabs should retain their state in a similar manner to native HTML element including back/forward navigation and refresh. It should be possible to directly link to any given tab on a page.` This requirement is not very clear to me. The implementation is based on my own understanding and it might not be the best implementation. Hopefully I will have the opportunity to discuss it with you and see if it could be done better. 

### Folder Structure

```
/
|- public //  frontend assets with index.html
|
|
|- src  // All the source code.
|  |- components // component that can be used as ui widget
|        |- tab // for the tab group component
|  |- pages // The page level component
|        |-TabPage // TabPage to render multiple tab groups in the page
|
|- .index.tsx // application entry point
```

# API - Estados do Brasil

The aim is to assist in querying Brazilian states and their cities, whether for use in user registration forms or even
for filtering data in tracking tables or similar generic tasks.

We intentionally keep it simple by not providing information such as ZIP codes, street names, or neighborhood names.

## To Install

1. Install the package `api-estadosdobrasil` in your project.

```bash
npm install api-estadosdobrasil

yarn add api-estadosdobrasil

bun add api-estadosdobrasil
```

## How to consume?
There are several ways you can consume this API. You can simply:

Install the dependency and import `Brasil`, then assign it to a variable in your project.

```typescript
import Brasil from 'api-estadosdobrasil'

const myEstados = Brasil.estados // To get all state information
const myCidades = Brasil.cidades // To get all city information
```

And how do I specifically get information about the city of Campinas, located in the interior of São Paulo, if I want to
consume it?

```typescript
import Brasil from 'api-estadosdobrasil'

const Campinas = Brasil.cidades.siglaEstado['SP'].nome['Campinas']
```

To consume only the name of the state of São Paulo:

```typescript
import Brasil from 'api-estadosdobrasil'

const SP = Brasil.estados.id['SP'].nome
```

Of course, you can filter and customize this according to your preferences.

Another way is to fetch directly from the route or from the repository file.

2. Fetch from the route and consume from there.

```typescript
    fetch("https://api.github.com/users/Yagasaki7K")
        .then(response => response.json())
        .then(data => {
            setDataAPI(data) // If you're using a State of React for example.
            let data = JSON.stringify(data) // If you're using a variable.
        });
```

2.1 Fetch directly from the file in the repository - less recommended.

```typescript
    fetch("https://github.com/Yagasaki7K/api-estadosdobrasil/blob/main/database.json")
        .then(response => response.text())
        .then(data => {
            setDataAPI(data) // If you're using a State of React for example.
            let data = JSON.stringify(data) // If you're using a variable.
        });
```

## How to Contribute?
If you have ideas, you can contribute to the repository on [GitHub](https://github.com/Yagasaki7K/api-estadosdobrasil),
following the basic concepts of a pull request - we don't have a specific template for this.

## Tests

```bash
bun test v1.1.4 (fbe2fe0c)

index.test.ts:
✓ Brasil object should be imported correctly [1.04ms]
✓ Should have states in the list of states [0.03ms]
✓ Should have cities in the list of cities [0.03ms]
✓ Campinas should be in the list of cities of São Paulo [1.20ms]
✓ São Paulo state should be in the list of states [0.03ms]

5 pass
```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

Simple Shopping Cart with Product Page

### `Features`

- Product Page
- Cart Page
- Add/Update/Delete Product

### `Web APIs`

- [Pixabay](https://pixabay.com/)


### `Tools`

- React-Route
- Redux
- Styled Components


### `Doc`

```js
import Button from './Button'
```
Name       | Type     | Default
---------- | -------- | -------
className  | string   |
clickEvent | func     |
children   | node     |


```js
import Card from './Card'
```
Name       | Type     | Default
---------- | -------- | -------
id         | number   |
title      | string   |
imgURL     | string   |
alt        | string   |
price      | number   |
isModalOpen| bool     |
toggleModal| func     |

```js
import CartItem from './CartItem'
```
Name         | Type     | Default
------------ | -------- | -------
product      | object   |

```js
import Form from './Form'
```
Name         | Type     | Default
------------ | -------- | -------
title        | string   |

```js
import Image from './Image'
```
Name         | Type     | Default
------------ | -------- | -------
id           | number   |

```js
import InputStepper from './InputStepper'
```
Name         | Type     | Default
------------ | -------- | -------
imageLink    | string   |
previewURL   | string   |
title        | string   |

```js
import Modal from './Modal'
```
Name       | Type     | Default
---------- | -------- | -------
className  | string   |
clickEvent | func     |
children   | node     |


```js
import Navbar from './Navbar'
```
Name       | Type     | Default
---------- | -------- | -------
cartItems  | array    |


```js
import Price from './Price'
```
Name        | Type     | Default
----------- | -------- | -------
amount      | number   |
color       | string   |
fontSize    | number   |
marginBottom| number   |

```js
import ProductPopup from './ProductPopup'
```
Name         | Type     | Default
------------ | -------- | -------
id           | number   |
imageLink    | string   |
previewURL   | string   |
price        | number   |
title        | string   |
desc         | string   |
addToCart    | func     |
version      | string   |

```js
import RadioGroup from './RadioGroup'
```
Name         | Type     | Default
------------ | -------- | -------
id           | number   |
updateVersion| func     |
defaultValue | string   |
radios       | array    |

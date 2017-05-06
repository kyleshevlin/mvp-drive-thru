# MVP Drive Thru

This is a MVP drive thru application. This code was originally written as a take home assignment for a company and was in another repo. In order to keep the code but remove any commit history that would reveal which company it was, I copied the code into this repo. My apologies that I could not maintain the commit history for those who would like to look through it. It simply wouldn't be right of me to do that.

I had a limited amount of time to write this project, this was about 12 hours of work. I decided at the time of writing it that I would preemptively answer any questions about tradeoffs I made with the project. Please read them below.

## Setup

Be sure to install all of the application's dependencies:

```
yarn install
```

Next, you can start the application in a local environment with:

```
yarn run start
```

Open your browser to `http://localhost:8080` to see the app running. Otherwise, you can build the application into a `build/` directory with:

```
yarn run build
```

You should then be able to open the built `index.html` file in your browser.

## Tradeoffs & Their Justifications

In the course of building this application, I purposely made tradeoffs. I thought it would be worthwhile to make note of them here.

### Prices

Given the instructions, there is no requirement that a cost be tabulated for each order. While of course this would be necessary in a real drive thru application, it didn't seem necessary for this current project.

A cost could be tabulated with relative ease, though. Each item in our menu would become more than a string, for example, the `bun` option `'bread'` would now become an object, with at least two properties: `name` and `price`. The `name` property would be displayed, and then a cost is just an addition of all selected items `price` values.

### Quantities

The instructions made no mention regarding what comprised an order, thus providing latitude to decide how an order should be structured. In its simplest form, an order could simply be a string, but this would not be rigid enough for use in an actual drive thru.

My intention was to make something that a drive thru employee would use on a touch screen, thus lots of checkboxes and radio buttons for a predetermined menu. I chose to use Little Big Burger's menu, since I had recently had it and the menu is rather simple.

I also chose to not include quantities as part of the ordering process. This was done foremost to reduce unnecessary complexity given the spec. This allowed me to use a simple `defaultOrder` object to start the state of a new order. Here's how I would consider approaching it if I needed multiple quantities of an item:

* Fries would be simple to handle, as they are the only side in the menu and could simply be given a counter that is incremented or decremented.
* Burgers and drinks are a different challenge since they are customizable. A way to handle this would be to have empty arrays for `burgers` and `drinks` on the default `order` object, and then generate a new portion of the form for each one added to the order. I think given the current setup of the application, this could be a reasonably easy feature to add.

### The Monolithic OrderForm Component

During one iteration of the application, the menu was shaped to anticipate programmatically generating the `RadioGroup`s and `CheckboxGroup`s for the forms. Thus, the `menu` object had keys whose values were objects, each with a `type` and `items` property. It was intended that the `type` would indicate which group was necessary.

But there are a few foreseen consequences to this approach. Primarily, it would be challenging to pass the correct `handleChange` function to each group. The way the `react-radio-group` and `react-checkbox-group` libraries are designed do not lend themselves easily to programmatic handling of `onChange`s for multiple groups. Thus, each group currently needs its own handler. This would also require a fragile convention where a property on each option would have to be added, such as `handleChangeFunctionName`, and this would have to match the prop being passed in to the `OrderForm` component to retrieve each function with something like `props[handleChangeFunctionName]`. This is not ideal.

Thus, for the sake of simplicity, I chose to instead make the large monolithic form currently in the application with the intention of researching ways to make it more robust in the future.

### Deprecations

When you run the application, you will find several deprecation warnings. These warnings are a result of using the `react-radio-group` and `react-checkbox-group` libraries. There are currently PRs in place to update these libraries to be compliant with future releases of React (specifically v16).

### Queues and Priority

If this were a real restaurant, there would be a challenge created when an order was changed at the window. Occasionally, an order would require an adjustment in the queue. This scenario could be handled by ordering the queue with a `priority` property, allowing us to reorder in the case of an order edit if necessary. You see this used at fast food restaurants that have special parking spaces for people whose orders are delayed.

Given the scope and time of this project, it didn't seem worth it to implement a queue. For now, the imaginary users will have to wait should I want to add an order of fries, or change from a hamburger to a veggie burger.

### Uncanceling an Order

Related to queues, I thought about adding a button that would allow a canceled order to be reenabled and put back in the order queue. However, when I decided to forego a queue entirely, I decided to forego this as well. In a real drive thru application, this might be a useful feature to have, though this should be weighed against whether it might be simpler and more efficient to create a new order.

### Not Found

Currently, if you start the application at a path resembling `/edit-order/:id`, it will not redirect to a 404 or elsewhere. In a real drive thru application, this would be a worthwhile feature to add. If the restaurant is particularly large or busy, it is possible that two clients of this application would get out of sync, resulting in conflicts and errors. However, for this use case, we can safely assume that the user will be the only user, and that the application would be started at the root path. In other words, unless one manually updates the URL, they would never get to this state.

### Error Messages

A nice feature to add to this application would be to add error messages for attempting to submit an order that isn't valid. Currently, my validation simply checks that each order has either a burger, fries, or drink present. In a more robust application, it would be quite useful to add error messages for the user.

### Unresponsive Design

I am a big proponent of responsive design and enjoy the challenge. However, given the scope, the time period I had available to work on this, and the fact that a real drive thru application is likely to be installed on a set physical device, these concerns were dismissed.

The general architecture of the app lends well to responsive design though. The sidebar could be reduced to a side menu that slides out for options. The Home page buttons stack nicely. With relatively few adjustments, a very user friendly layout could be acheived.

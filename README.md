# Currency Converter App

This project is a **Currency Converter** application built using **React.js**. It allows users to convert one currency into another based on the latest exchange rates fetched from an external API. The app supports swapping between "From" and "To" currencies and displays the converted amount.

## Features

- Convert currency values between different currencies.
- Fetch real-time exchange rates using an API.
- Swap the "From" and "To" currency selections with a single click.
- User-friendly interface with a responsive layout.
- Prevent form default submission behavior to control data submission.

## Technology Stack

- **React.js**: Used to build the UI components and handle state management.
- **Tailwind CSS**: Used for responsive styling.
- **Fetch API**: Used to retrieve real-time currency exchange rates from an external API.
- **Custom Hooks**: For managing the data fetching logic.

## How to Run the Project

1. **Clone the Repository**
   
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd currency-converter
   ```

3. **Install Dependencies**

   Ensure that Node.js and npm are installed on your system. Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

4. **Start the Application**

   To start the development server, use:

   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000`.

## Usage

1. **Input Amount**: Enter the amount in the "From" currency field that you want to convert.
2. **Select Currencies**: Choose the currencies to convert from and to using the dropdowns.
3. **Convert**: Click the `Convert` button to see the converted amount.
4. **Swap Currencies**: Use the `Swap` button to switch the "From" and "To" currencies.
5. **Result**: The converted amount will appear in the "To" currency field.

## Files Overview

### 1. `App.jsx`
This is the main component of the application. It contains the form structure, logic for swapping currencies, handling state updates, and triggering the currency conversion process.

Key functionalities:
- **useState** is used for managing the amount, selected currencies, and the converted amount.
- **useCurrencyInfo** hook is used to fetch real-time exchange rates for the selected currency.
- **Form Submission**: The form uses the `onSubmit` method with `preventDefault()` to prevent page reload and handle the conversion logic.

### 2. `useCurrencyInfo.js`
This is a custom hook that fetches the exchange rate data for the selected currency using the **Fetch API**.

Key functionalities:
- Fetching the exchange rates data from the CDN API.
- Caching the fetched data into the `useState` hook.
- Returning the fetched data back to the `App` component.

### 3. `InputBox.jsx`
A reusable component that handles the input fields for the amount and currency selection dropdowns.

## API Used

This app fetches currency exchange data from the following API:

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/<currency_code>.json
```

This API provides the exchange rates for different currencies based on the provided currency code.

## Example

- Converting **USD** to **INR**:
  - Input `Amount`: 100
  - Select `From`: USD
  - Select `To`: INR
  - Click `Convert` button to see the result.

## License

This project is open-source and available under the **MIT License**.

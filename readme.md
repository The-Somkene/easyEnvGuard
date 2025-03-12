# EasyEnvGuard - Environment Variable Validator

## 📌 Introduction

**EasyEnvGuard** is a lightweight and easy-to-use environment variable validator for Node.js applications. It ensures that required environment variables are defined and have the correct data types, preventing runtime errors due to missing or incorrectly formatted variables. 

Built with simplicity and reliability in mind, **EasyEnvGuard** is an essential tool for developers looking to enhance the robustness of their applications.

## 🚀 Features

- ✅ Ensures required environment variables are present.
- ✅ Validates data types (`string`, `number`, `boolean`).
- ✅ Supports both **CommonJS** (`require`) and **ES Modules** (`import`).
- ✅ Improves application reliability and maintainability.
- ✅ Lightweight, fast, and dependency-free.
- ✅ Easy integration with `.env` files.

## 📦 Installation

Install **EasyEnvGuard** using npm:

```sh
npm install easyenvguard
```

Or with yarn:

```sh
yarn add easyenvguard
```

## 🔧 Usage

### 1️⃣ Create a `.env` file (if using `dotenv`)

```env
PORT=3000
DATABASE_URL=mongodb://localhost:27017
JWT_SECRET=mysecret
DEBUG_MODE=true
```

### 2️⃣ Use `easyenvguard` in your Node.js project

#### ✅ **For CommonJS (`require`) Users**
```javascript
require("dotenv").config(); // Load .env file
const { validateEnv } = require("easyenvguard");

validateEnv({
  PORT: "number",
  DATABASE_URL: "string",
  JWT_SECRET: "string",
  DEBUG_MODE: "boolean",
});

console.log("✅ All required environment variables are valid!");
```

#### ✅ **For ES Module (`import`) Users**
```javascript
import "dotenv/config"; // Load .env file
import { validateEnv } from "easyenvguard";

validateEnv({
  PORT: "number",
  DATABASE_URL: "string",
  JWT_SECRET: "string",
  DEBUG_MODE: "boolean",
});

console.log("✅ All required environment variables are valid!");
```

## ✅ Validation Rules

| Expected Type | Accepted Values Example        |
| ------------- | ------------------------------ |
| `string`      | Any text (`"example"`)         |
| `number`      | Numeric values (`3000`, `42`)  |
| `boolean`     | `true` or `false` (as strings) |

## ⚠️ Error Handling

If an environment variable is missing or has the wrong type, `EasyEnvGuard` will throw an error:

```sh
EnvGuardError: Missing required environment variable: JWT_SECRET
```

```sh
EnvGuardError: Invalid type for PORT. Expected number, but got string.
```

## 📖 Best Practices

- **Use `.env.example` files**: Maintain a template of required environment variables for better collaboration.
- **Validate environment variables at application startup** to catch issues early.
- **Use `dotenv` or environment managers** to manage environment variables across different stages (development, staging, production).

## 🛠️ Compatibility & Support

| Node.js Version | Support |
|----------------|---------|
| 18.x+          | ✅ Fully Supported |
| 16.x          | ✅ Fully Supported |
| 14.x          | ⚠️ Limited Support (End-of-Life soon) |
| < 14.x        | ❌ Not Supported |

## 📜 License

MIT License. Feel free to use and contribute!

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements, submit an issue or a PR.

### How to Contribute
1. **Fork** the repository.
2. **Create** a new branch (`feature-branch`).
3. **Make** your changes and commit (`git commit -m "Added a new feature"`).
4. **Push** to your fork and submit a **pull request**.

## 🛠️ Roadmap
- [ ] Add TypeScript support
- [ ] Provide built-in support for custom validation functions
- [ ] Improve error logging and debugging experience

---

⭐ **Star this repo if you find it useful!** 🚀

🔗 [GitHub Repository](https://github.com/The-Somkene/easyEnvGuard)


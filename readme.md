# EasyEnvGuard - Environment Variable Validator

## 📌 Introduction

**EasyEnvGuard** is a lightweight and easy-to-use environment variable validator for Node.js applications. It ensures that required environment variables are defined and have the correct data types, preventing runtime errors due to missing or incorrectly formatted variables.

## 🚀 Features

- ✅ Ensures required environment variables are present.
- ✅ Validates data types (`string`, `number`, `boolean`).
- ✅ Improves application reliability.
- ✅ Lightweight and dependency-free.

## 📦 Installation

Install EasyEnvGuard using npm:

```sh
npm install easyenvguard
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

## 📜 License

MIT License. Feel free to use and contribute!

## 🤝 Contributing

Pull requests are welcome! If you have ideas for improvements, submit an issue or a PR.

---

⭐ **Star this repo if you find it useful!** 🚀

https://github.com/The-Somkene/easyEnvGuard

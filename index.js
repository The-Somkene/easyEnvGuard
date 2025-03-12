class EnvGuardError extends Error {
  constructor(message) {
    super(message);
    this.name = "EnvGuardError";
  }
}

export function validateEnv(schema) {
  const errors = [];

  for (const [key, type] of Object.entries(schema)) {
    const value = process.env[key];

    if (value === undefined) {
      errors.push(`Missing required environment variable: ${key}`);
      continue;
    }

    if (!isValidType(value, type)) {
      errors.push(
        `Invalid type for ${key}. Expected ${type}, but got ${typeof value}`
      );
    }
  }

  if (errors.length) {
    throw new EnvGuardError(errors.join("\n"));
  }
}

function isValidType(value, type) {
  switch (type) {
    case "string":
      return typeof value === "string";
    case "number":
      return !isNaN(Number(value));
    case "boolean":
      return value === "true" || value === "false";
    default:
      return false;
  }
}
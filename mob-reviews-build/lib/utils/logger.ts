type Level = "DEBUG" | "INFO" | "WARN" | "ERROR";

type Module = "CRM" | "RESEARCH" | "LP" | "CAMPAIGN" | "MCP" | "CHAT" | "AUTH" | "SYSTEM";

function write(level: Level, module: Module, message: string, context?: Record<string, unknown>) {
  const payload = {
    timestamp: new Date().toISOString(),
    level,
    module,
    message,
    ...(context ? { context } : {})
  };

  console.log(JSON.stringify(payload));
}

export const logger = {
  debug: (module: Module, message: string, context?: Record<string, unknown>) => write("DEBUG", module, message, context),
  info: (module: Module, message: string, context?: Record<string, unknown>) => write("INFO", module, message, context),
  warn: (module: Module, message: string, context?: Record<string, unknown>) => write("WARN", module, message, context),
  error: (module: Module, message: string, context?: Record<string, unknown>) => write("ERROR", module, message, context)
};

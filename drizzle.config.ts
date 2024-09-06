import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
	schema: "./src/server/db/schema.ts",
	// driver: "pg",
	dialect: "postgresql",
	dbCredentials: {
		url: env.POSTGRES_URL,
	},
	tablesFilter: ["gallery_t3_*"],
} satisfies Config;

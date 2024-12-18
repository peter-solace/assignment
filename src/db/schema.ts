import {SQL, sql} from "drizzle-orm";
import {bigint, index, integer, jsonb, pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";

const advocates = pgTable("advocates", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  city: text("city").notNull(),
  degree: text("degree").notNull(),
  specialties: jsonb("payload").default([]).notNull(),
  yearsOfExperience: integer("years_of_experience").notNull(),
  phoneNumber: bigint("phone_number", {mode: "number"}).notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),

  // Dynamic column for search
  contentSearch: text("content_search").generatedAlwaysAs(
    (): SQL => sql`${advocates.firstName} || 
      ' ' || ${advocates.lastName} || 
      ' ' || ${advocates.city} || 
      ' ' || ${advocates.degree} || 
      ' ' || ${advocates.specialties}::TEXT || 
      ' ' || ${advocates.yearsOfExperience}::TEXT || 
      ' ' || ${advocates.phoneNumber}::TEXT`
  ),
}, (table) => ({
  nameIndex: index('content_search_idx').on(table.contentSearch),
}));

export {advocates};

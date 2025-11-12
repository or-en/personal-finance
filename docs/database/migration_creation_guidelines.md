## Migration Structure

All migrations in this project follow a specific structure using the `defineMigration` function.

## Migration File Location

All migration files should be placed in the `/lib/db/migrations/` directory (or your project's equivalent migration directory).

## Migration File Pattern

Each migration file should:
1. Import the `defineMigration` function
2. Use default export with the `defineMigration` function
3. Follow the naming convention: `{number}_{description}.ts`

## IMPORTANT: Migration Numbering

Before creating a new migration:
1. ALWAYS check the existing migrations in your migrations directory
2. Count the total number of existing migrations (excluding index.ts)
3. Use the next sequential number for your new migration
4. Double-check that the number you're using doesn't conflict with any existing migration

For example, if you see migrations 001 through 009, your new migration should be 010.

## Example Template

```typescript
import { defineMigration } from "./index";

export default defineMigration(
  "001_create_example_table",    // Unique identifier: number_description
  "Create example table",        // Human-readable name describing the migration
  // UP
  `-- Up migration SQL
  CREATE TABLE example (
    id uuid PRIMARY KEY
  );
  
  -- Comments about the migration go here
  `,
  // DOWN
  `-- Down migration SQL
  DROP TABLE IF EXISTS example;`
);
```

## Key Points

1. The `defineMigration` function takes 4 parameters:
   - `id`: Unique identifier with format: `"001_create_example_table"`
   - `name`: Human-readable name (e.g., "Create example table")
   - `up`: SQL to apply the migration (commented with // UP)
   - `down`: SQL to reverse the migration (commented with // DOWN)

2. Use template literals for multi-line SQL statements

3. All SQL should be pure SQL, not wrapped in `sql` template tags (unless your migration system requires it)

4. Each migration must be idempotent (can be run multiple times without errors)

5. Always provide both `up` and `down` migrations

6. Always use default export from the migration file

## Automatic Migration Discovery

The migration system automatically discovers and runs migrations based on their filenames:
- Files must match the pattern `000_*.ts` (three-digit number followed by underscore)
- Migrations are automatically sorted by their numeric prefix
- No manual registration is required in an index file
- The system excludes `index.ts` from discovery

## Common Mistakes to Avoid

1. ❌ Using incorrect import path for `defineMigration`
   ✅ Use the correct import path based on your project structure (e.g., `import { defineMigration } from "./index";`)

2. ❌ Exporting as named export
   ✅ Use default export: `export default defineMigration(...)`

3. ❌ Using simple IDs like `'001'`
   ✅ Use full format like `"001_create_example_table"`

4. ❌ Forgetting // UP and // DOWN comments
   ✅ Always include these comments before the SQL content

5. ❌ Manually registering migrations in an index file
   ✅ Let the automatic discovery system find migrations

6. ❌ Placing migration files in the wrong directory
   ✅ Always place migration files in your project's designated migrations directory

## Project-Specific Rules

- Every migration MUST be reflected in `docs/database/db_schema.md` immediately after it is created and applied.
## Migration Best Practices

1. **Test migrations thoroughly**: Always test both `up` and `down` migrations in a development environment before applying to production.

2. **Keep migrations small**: Each migration should do one thing well. If you need to make multiple changes, consider creating separate migrations.

3. **Document complex migrations**: Add comments explaining why a migration is needed, especially for data transformations or schema changes that might not be obvious.

4. **Handle data migrations carefully**: When migrating data, ensure you have proper backups and consider the impact on application performance.

5. **Version control**: Always commit migrations to version control. Never modify existing migrations that have been applied to production.

6. **Rollback strategy**: Ensure your `down` migration properly reverses all changes made in the `up` migration, including data transformations if applicable.


# Database Migration Guide: MongoDB → PostgreSQL (Neon)

This guide walks you through migrating your NWRFHP database from MongoDB to Neon PostgreSQL using Drizzle ORM.

## Prerequisites

- ✅ Node.js and npm installed
- ✅ MongoDB instance with existing data accessible
- ✅ Neon account (create at [neon.tech](https://neon.tech))

## Step 1: Set Up Neon PostgreSQL Database

### 1.1 Create Neon Project

1. Go to [https://neon.tech](https://neon.tech) and sign up/login
2. Click "New Project"
3. Configure:
   - **Project Name**: `nwrfhp-production`
   - **Region**: Choose closest to your users (e.g., US East, EU West)
   - **PostgreSQL Version**: 16 (latest)
4. Click "Create Project"

### 1.2 Get Connection String

After creating the project:
1. On the project dashboard, click "Connection Details"
2. Copy the **Connection String** (should look like):
   ```
   postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/nwrfhp?sslmode=require
   ```

### 1.3 Configure Environment Variables

Create or update your `.env.local` file in the project root:

```env
# PostgreSQL (Neon) - Primary Database
DATABASE_URL=postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/nwrfhp?sslmode=require

# MongoDB - Keep for migration
MONGODB_URL=mongodb://localhost:27017/nwrfhp
# OR if using MongoDB Atlas:
# MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/nwrfhp

DATABASE_NAME=nwrfhp

# Other existing variables...
NEXT_PUBLIC_SITE_NAME=North West Regional Fund for Health Promotion
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key_here
```

**Important**: Never commit `.env.local` to git. It's already in `.gitignore`.

## Step 2: Generate and Apply Database Schema

### 2.1 Generate Migrations

This creates SQL migration files from your Drizzle schema:

```bash
npm run db:generate
```

**Expected output**:
```
✓ Generating migrations...
✓ Migrations generated in src/db/drizzle/migrations
```

You should see new files created in `src/db/drizzle/migrations/`:
- `0000_xxxxx.sql` - Contains CREATE TABLE statements
- `meta/` - Migration metadata

### 2.2 Apply Migrations to Neon

This executes the SQL migrations on your Neon database:

```bash
npm run db:migrate
```

**Expected output**:
```
✓ Applying migrations...
✓ Migrations applied successfully
```

### 2.3 Verify Tables Created

Open Drizzle Studio to visually inspect your database:

```bash
npm run db:studio
```

This opens `http://localhost:4983` in your browser. You should see:
- ✅ `team_members` table (empty)
- ✅ `contact_submissions` table (empty)
- ✅ `newsletter_subscriptions` table (empty)
- ✅ `programs` table (empty)
- ✅ `blog_posts` table (empty)

## Step 3: Migrate Data from MongoDB

### 3.1 Ensure MongoDB is Accessible

Test your MongoDB connection:

```bash
# If using local MongoDB
mongosh mongodb://localhost:27017/nwrfhp

# If using MongoDB Atlas, test with:
mongosh "mongodb+srv://username:password@cluster.mongodb.net/nwrfhp"
```

Press `Ctrl+C` to exit mongosh after verifying connection.

### 3.2 Run Migration Script

Execute the automated migration:

```bash
npm run db:migrate:mongo-to-pg
```

**Expected output**:
```
🚀 Starting MongoDB to PostgreSQL migration...

📍 MongoDB: mongodb://***@localhost:27017/nwrfhp
📍 PostgreSQL: postgresql://***@ep-xxx.neon.tech/nwrfhp

🔌 Connecting to MongoDB...
   ✅ MongoDB connected

📋 Migrating team members...
   Found 40 team members in MongoDB
   ✅ Migrated 40 team members

📋 Migrating contact submissions...
   Found 15 contact submissions in MongoDB
   ✅ Migrated 15 contact submissions

📋 Migrating newsletter subscriptions...
   Found 8 newsletter subscriptions in MongoDB
   ✅ Migrated 8 newsletter subscriptions

📋 Migrating programs...
   Found 12 programs in MongoDB
   ✅ Migrated 12 programs

📋 Migrating blog posts...
   Found 5 blog posts in MongoDB
   ✅ Migrated 5 blog posts

🔍 Validating migration...
   team_members:
     MongoDB: 40 | PostgreSQL: 40 | Migrated: 40
     ✅ Counts match
   contact_submissions:
     MongoDB: 15 | PostgreSQL: 15 | Migrated: 15
     ✅ Counts match
   newsletter_subscriptions:
     MongoDB: 8 | PostgreSQL: 8 | Migrated: 8
     ✅ Counts match
   programs:
     MongoDB: 12 | PostgreSQL: 12 | Migrated: 12
     ✅ Counts match
   blog_posts:
     MongoDB: 5 | PostgreSQL: 5 | Migrated: 5
     ✅ Counts match

✅ Migration completed successfully!

📊 Summary:
   team_members: 40 records
   contact_submissions: 15 records
   newsletter_subscriptions: 8 records
   programs: 12 records
   blog_posts: 5 records

💡 Next steps:
   1. Verify data in Drizzle Studio: npm run db:studio
   2. Test application with PostgreSQL
   3. Update .env.local to use PostgreSQL exclusively

🔌 MongoDB connection closed
```

### 3.3 Verify Migrated Data

Open Drizzle Studio again:

```bash
npm run db:studio
```

Navigate through each table and verify:
- ✅ All records are present
- ✅ Data fields are populated correctly
- ✅ Relationships are intact
- ✅ Timestamps are preserved

## Step 4: Test Application with PostgreSQL

### 4.1 Start Development Server

```bash
npm run dev
```

### 4.2 Test Critical Functionality

Visit these pages and verify they work:

1. **Team Page** (`http://localhost:3000/team`)
   - Should display all team members from PostgreSQL
   - Click on a team member to view their profile

2. **Contact Form** (`http://localhost:3000/contact`)
   - Submit a test contact form
   - Verify it appears in Drizzle Studio → `contact_submissions`

3. **Programs Page** (`http://localhost:3000/programs`)
   - Should display all programs from PostgreSQL

### 4.3 Check for Errors

Monitor the terminal for any database-related errors:
- ✅ No "MongoDB connection" errors
- ✅ No "DATABASE_URL" errors
- ✅ All queries executing successfully

## Step 5: Rollback Strategy (If Needed)

If you encounter issues, you can quickly rollback:

### Option A: Switch Back to MongoDB Temporarily

In `.env.local`, comment out the PostgreSQL URL and restore MongoDB:

```env
# DATABASE_URL=postgresql://...  # Commented out
DATABASE_URL=mongodb://localhost:27017/nwrfhp
```

Restart the dev server:

```bash
npm run dev
```

### Option B: Full Rollback

If you need to completely revert:

```bash
# Restore old package.json dependencies
git checkout HEAD -- package.json

# Reinstall old packages
npm install

# Remove Drizzle files
rm -rf src/db/drizzle
rm drizzle.config.ts
```

## Step 6: Production Deployment

Once testing is successful:

### 6.1 Update Production Environment Variables

In your deployment platform (Vercel, Netlify, etc.), add:

```env
DATABASE_URL=postgresql://username:password@ep-xxx.neon.tech/nwrfhp?sslmode=require
```

### 6.2 Deploy

```bash
# If using Vercel
vercel --prod

# Or trigger deployment through your CI/CD pipeline
git push origin main
```

### 6.3 Monitor Production

After deployment:
- ✅ Check production logs for errors
- ✅ Test contact form submission
- ✅ Verify team members are displayed
- ✅ Monitor Neon dashboard for query performance

## Troubleshooting

### Error: "DATABASE_URL environment variable is not set"

**Solution**: Ensure `.env.local` exists and contains the correct `DATABASE_URL` with your Neon connection string.

### Error: "connect ECONNREFUSED" during migration

**Solution**: Your MongoDB instance is not running or not accessible. Start MongoDB:

```bash
# macOS/Linux
sudo systemctl start mongodb

# Windows (if installed as service)
net start MongoDB

# Or use Docker
docker run -d -p 27017:27017 mongo
```

### Error: "SSL connection required"

**Solution**: Neon requires SSL. Ensure your connection string ends with `?sslmode=require`:

```
postgresql://user:pass@ep-xxx.neon.tech/nwrfhp?sslmode=require
```

### Migration Script Fails with "Table already exists"

**Solution**: Drop the existing tables in Neon and re-run migrations:

```bash
# In Drizzle Studio, delete all tables
# Then regenerate and apply migrations
npm run db:generate
npm run db:migrate
npm run db:migrate:mongo-to-pg
```

### Data Validation Fails (Count Mismatch)

**Solution**:
1. Check the terminal output for which table has mismatched counts
2. Open Drizzle Studio and manually inspect the table
3. Re-run the migration script:
   ```bash
   npm run db:migrate:mongo-to-pg
   ```
4. If the issue persists, check MongoDB for duplicate slugs or constraint violations

## Available Database Commands

```bash
# Generate SQL migrations from schema changes
npm run db:generate

# Apply pending migrations to Neon database
npm run db:migrate

# Open Drizzle Studio (visual database browser)
npm run db:studio

# Migrate data from MongoDB to PostgreSQL
npm run db:migrate:mongo-to-pg
```

## Database Schema Overview

### Tables Created

1. **team_members**
   - Stores NWRFHP staff and team member information
   - Fields: id, name, role, image, email, phone, bio, slug, order, isActive

2. **contact_submissions**
   - Stores contact form submissions
   - Fields: id, name, email, phone, subject, message, status

3. **newsletter_subscriptions**
   - Stores newsletter subscriber emails
   - Fields: id, email, name, isActive, subscribedAt, unsubscribedAt

4. **programs**
   - Stores NWRFHP programs and initiatives
   - Fields: id, title, description, image, slug, category, isActive, order

5. **blog_posts**
   - Stores blog posts and news articles
   - Fields: id, title, content, excerpt, image, slug, author, category, tags, isPublished, publishedAt

All tables include automatic `createdAt` and `updatedAt` timestamps.

## Next Steps After Migration

Once the database migration is complete and tested, proceed to:

1. **Phase 2**: Tailwind v4 + SLB Design System
2. **Phase 3**: Shadcn UI Integration
3. **Phase 4**: Framer Motion Animations
4. **Phase 5**: TanStack Query Integration

Refer to the main migration plan for detailed implementation steps.

## Support

If you encounter issues not covered here:
1. Check the [Neon Documentation](https://neon.tech/docs)
2. Check the [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
3. Review error logs in `npm-debug.log`
4. Check the migration script output for specific error messages

import { sqliteTable, integer, text, real } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const exercises = sqliteTable('exercises', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  muscleGroups: text('muscle_groups').notNull(),
  category: text('category').notNull(), // 'compound' | 'isolation'
  instructions: text('instructions'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const routines = sqliteTable('routines', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description'),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const routineExercises = sqliteTable('routine_exercises', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  routineId: integer('routine_id')
    .notNull()
    .references(() => routines.id),
  exerciseId: integer('exercise_id')
    .notNull()
    .references(() => exercises.id),
  order: integer('order').notNull(),
  targetSets: integer('target_sets').notNull(),
  targetReps: integer('target_reps').notNull(),
  suggestedWeight: real('suggested_weight'), // Changed to real and made optional
});

export const workouts = sqliteTable('workouts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  routineId: integer('routine_id').references(() => routines.id),
  date: integer('date', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
  notes: text('notes'),
  completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
});

export const sets = sqliteTable('sets', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  workoutId: integer('workout_id')
    .notNull()
    .references(() => workouts.id),
  exerciseId: integer('exercise_id')
    .notNull()
    .references(() => exercises.id),
  setNumber: integer('set_number').notNull(),
  weight: real('weight').notNull(),
  reps: integer('reps').notNull(),
  setType: text('set_type').notNull().default('working'),
  rpe: integer('rpe'),
});

// Relations
export const exercisesRelations = relations(exercises, ({ many }) => ({
  routineExercises: many(routineExercises),
  sets: many(sets),
}));

export const routinesRelations = relations(routines, ({ many }) => ({
  routineExercises: many(routineExercises),
  workouts: many(workouts),
}));

export const routineExercisesRelations = relations(
  routineExercises,
  ({ one }) => ({
    routine: one(routines, {
      fields: [routineExercises.routineId],
      references: [routines.id],
    }),
    exercise: one(exercises, {
      fields: [routineExercises.exerciseId],
      references: [exercises.id],
    }),
  }),
);

export const workoutsRelations = relations(workouts, ({ one, many }) => ({
  routine: one(routines, {
    fields: [workouts.routineId],
    references: [routines.id],
  }),
  sets: many(sets),
}));

export const setsRelations = relations(sets, ({ one }) => ({
  workout: one(workouts, {
    fields: [sets.workoutId],
    references: [workouts.id],
  }),
  exercise: one(exercises, {
    fields: [sets.exerciseId],
    references: [exercises.id],
  }),
}));

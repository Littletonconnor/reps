# Table Descriptions

## exercises

Purpose: Master catalog of all available exercises

- Primary Key: id
- Example: Bench Press, Squat, Deadlift
- Relationships:
  - One exercise can be in many routines (via routine_exercises)
  - One exercise can have many sets performed

## routines

Purpose: Workout templates/programs

- Primary Key: id
- Example: "Push/Pull/Legs", "Starting Strength"
- Relationships:
  - One routine contains many exercises (via routine_exercises)
  - One routine can be used for many workouts

## routine_exercises

Purpose: Junction table linking exercises to routines with specific parameters

- Primary Key: id
- Foreign Keys: routine_id, exercise_id
- Purpose: Defines how an exercise should be performed in a specific routine
- Example: In "Push Day", Bench Press should be 3 sets of 8 reps at 185lbs

## workouts

Purpose: Individual workout sessions

- Primary Key: id
- Foreign Key: routine_id (optional - allows custom workouts)
- Purpose: Records when someone actually worked out
- Example: "Push Day on Jan 15th, took 45 minutes, felt great"

## sets

Purpose: Individual sets performed during workouts

- Primary Key: id
- Foreign Keys: workout_id, exercise_id
- Purpose: Records actual performance data
- Example: "Bench Press, Set 1: 185lbs × 8 reps, RPE 7"

Data Flow Examples

Creating a Routine

1. Insert into `routines`: "Push/Pull/Legs"
2. Insert into `routine_exercises`:
   - Bench Press: 3 sets × 8 reps
   - Incline Press: 3 sets × 10 reps
   - Dips: 3 sets × 12 reps

Starting a Workout

1. Insert into `workouts`: Today's Push Day session
2. For each exercise, insert multiple rows into `sets`:
   - Bench Press Set 1: 185lbs × 8
   - Bench Press Set 2: 185lbs × 8
   - Bench Press Set 3: 185lbs × 7

Progressive Overload Calculation

Query: Get last workout's performance for Bench Press

- Find most recent `workout` with Bench Press `sets`
- Compare actual reps vs target reps
- Suggest weight adjustment for next workout

Key Design Decisions

Why separate routine_exercises and sets?

- Templates vs Reality: Routines are templates, sets are what actually happened
- Flexibility: Can modify routine targets without losing historical data
- Analysis: Can compare planned vs actual performance

Why exercise_id in both routine_exercises and sets?

- Direct Reference: Sets can reference exercises even for custom workouts
- Performance: Faster queries without joining through routine_exercises
- Flexibility: Supports workouts not based on routines

Why optional routine_id in workouts?

- Custom Workouts: Users can create one-off workouts
- Flexibility: Don't force everything into a routine template

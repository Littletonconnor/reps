import {
  db,
  exercises,
  routines,
  routineExercises,
  workouts,
  sets,
} from '../lib/db/index';

async function seed() {
  console.log('🌱 Seeding database...');

  // 1. Seed Exercises (Comprehensive list)
  console.log('💪 Creating exercises...');
  const exerciseData = [
    // Chest
    {
      name: 'Bench Press',
      muscleGroups: 'Chest, Shoulders, Triceps',
      category: 'compound',
    },
    {
      name: 'Incline Dumbbell Press',
      muscleGroups: 'Chest, Shoulders',
      category: 'compound',
    },
    {
      name: 'Weighted Dips',
      muscleGroups: 'Chest, Triceps',
      category: 'compound',
    },
    { name: 'Cable Fly', muscleGroups: 'Chest', category: 'isolation' },
    { name: 'Machine Chest Press', muscleGroups: 'Chest', category: 'compound' },

    // Back
    {
      name: 'Deadlift',
      muscleGroups: 'Back, Glutes, Hamstrings',
      category: 'compound',
    },
    { name: 'Pull-ups', muscleGroups: 'Back, Biceps', category: 'compound' },
    { name: 'Barbell Row', muscleGroups: 'Back, Biceps', category: 'compound' },
    {
      name: 'Lat Pulldown',
      muscleGroups: 'Back, Biceps',
      category: 'compound',
    },
    { name: 'Cable Row', muscleGroups: 'Back, Biceps', category: 'compound' },
    { name: 'T-Bar Row', muscleGroups: 'Back', category: 'compound' },

    // Legs
    { name: 'Squat', muscleGroups: 'Quads, Glutes', category: 'compound' },
    {
      name: 'Romanian Deadlift',
      muscleGroups: 'Hamstrings, Glutes',
      category: 'compound',
    },
    {
      name: 'Bulgarian Split Squat',
      muscleGroups: 'Quads, Glutes',
      category: 'compound',
    },
    { name: 'Leg Press', muscleGroups: 'Quads, Glutes', category: 'compound' },
    { name: 'Leg Curl', muscleGroups: 'Hamstrings', category: 'isolation' },
    { name: 'Leg Extension', muscleGroups: 'Quads', category: 'isolation' },
    { name: 'Calf Raises', muscleGroups: 'Calves', category: 'isolation' },

    // Shoulders
    {
      name: 'Overhead Press',
      muscleGroups: 'Shoulders, Triceps',
      category: 'compound',
    },
    {
      name: 'Dumbbell Shoulder Press',
      muscleGroups: 'Shoulders',
      category: 'compound',
    },
    {
      name: 'Lateral Raises',
      muscleGroups: 'Shoulders',
      category: 'isolation',
    },
    {
      name: 'Face Pulls',
      muscleGroups: 'Rear Delts, Traps',
      category: 'isolation',
    },
    {
      name: 'Rear Delt Fly',
      muscleGroups: 'Rear Delts',
      category: 'isolation',
    },

    // Arms
    { name: 'Barbell Curl', muscleGroups: 'Biceps', category: 'isolation' },
    { name: 'Hammer Curls', muscleGroups: 'Biceps, Forearms', category: 'isolation' },
    { name: 'Cable Curl', muscleGroups: 'Biceps', category: 'isolation' },
    {
      name: 'Close Grip Bench Press',
      muscleGroups: 'Triceps, Chest',
      category: 'compound',
    },
    { name: 'Overhead Tricep Extension', muscleGroups: 'Triceps', category: 'isolation' },
    { name: 'Cable Tricep Pushdown', muscleGroups: 'Triceps', category: 'isolation' },
  ];

  const insertedExercises = await db
    .insert(exercises)
    .values(exerciseData)
    .returning();
  console.log(`✅ Created ${insertedExercises.length} exercises`);

  // Helper to find exercise ID by name
  const getExerciseId = (name: string) => {
    const exercise = insertedExercises.find(e => e.name === name);
    if (!exercise) throw new Error(`Exercise ${name} not found`);
    return exercise.id;
  };

  // 2. Create Three Realistic Routines
  console.log('📋 Creating routines...');
  
  // Routine 1: Push/Pull/Legs
  const [pplRoutine] = await db
    .insert(routines)
    .values({
      name: 'Push/Pull/Legs',
      description: '6-day split focusing on movement patterns',
    })
    .returning();

  // Routine 2: Upper/Lower
  const [upperLowerRoutine] = await db
    .insert(routines)
    .values({
      name: 'Upper/Lower Split',
      description: '4-day split balancing upper and lower body',
    })
    .returning();

  // Routine 3: Full Body
  const [fullBodyRoutine] = await db
    .insert(routines)
    .values({
      name: 'Full Body',
      description: '3-day full body workout for beginners or time-constrained',
    })
    .returning();

  console.log('✅ Created 3 routines');

  // 3. Add exercises to routines
  console.log('🔗 Linking exercises to routines...');

  // Push/Pull/Legs - Push Day exercises
  const pplPushExercises = [
    { exerciseId: getExerciseId('Bench Press'), order: 1, targetSets: 4, targetReps: 6, suggestedWeight: 185 },
    { exerciseId: getExerciseId('Overhead Press'), order: 2, targetSets: 3, targetReps: 8, suggestedWeight: 115 },
    { exerciseId: getExerciseId('Incline Dumbbell Press'), order: 3, targetSets: 3, targetReps: 10, suggestedWeight: 70 },
    { exerciseId: getExerciseId('Weighted Dips'), order: 4, targetSets: 3, targetReps: 10, suggestedWeight: 25 },
    { exerciseId: getExerciseId('Lateral Raises'), order: 5, targetSets: 4, targetReps: 15, suggestedWeight: 20 },
    { exerciseId: getExerciseId('Cable Tricep Pushdown'), order: 6, targetSets: 3, targetReps: 15, suggestedWeight: 50 },
  ];

  // Push/Pull/Legs - Pull Day exercises
  const pplPullExercises = [
    { exerciseId: getExerciseId('Deadlift'), order: 1, targetSets: 4, targetReps: 5, suggestedWeight: 315 },
    { exerciseId: getExerciseId('Pull-ups'), order: 2, targetSets: 3, targetReps: 8, suggestedWeight: 0 },
    { exerciseId: getExerciseId('Barbell Row'), order: 3, targetSets: 3, targetReps: 10, suggestedWeight: 155 },
    { exerciseId: getExerciseId('Lat Pulldown'), order: 4, targetSets: 3, targetReps: 12, suggestedWeight: 140 },
    { exerciseId: getExerciseId('Face Pulls'), order: 5, targetSets: 3, targetReps: 20, suggestedWeight: 40 },
    { exerciseId: getExerciseId('Barbell Curl'), order: 6, targetSets: 3, targetReps: 12, suggestedWeight: 65 },
  ];

  // Push/Pull/Legs - Leg Day exercises
  const pplLegExercises = [
    { exerciseId: getExerciseId('Squat'), order: 1, targetSets: 4, targetReps: 6, suggestedWeight: 275 },
    { exerciseId: getExerciseId('Romanian Deadlift'), order: 2, targetSets: 3, targetReps: 8, suggestedWeight: 225 },
    { exerciseId: getExerciseId('Bulgarian Split Squat'), order: 3, targetSets: 3, targetReps: 10, suggestedWeight: 50 },
    { exerciseId: getExerciseId('Leg Curl'), order: 4, targetSets: 3, targetReps: 12, suggestedWeight: 90 },
    { exerciseId: getExerciseId('Leg Extension'), order: 5, targetSets: 3, targetReps: 15, suggestedWeight: 110 },
    { exerciseId: getExerciseId('Calf Raises'), order: 6, targetSets: 4, targetReps: 15, suggestedWeight: 200 },
  ];

  // Upper/Lower - Upper Day exercises
  const upperExercises = [
    { exerciseId: getExerciseId('Bench Press'), order: 1, targetSets: 4, targetReps: 8, suggestedWeight: 175 },
    { exerciseId: getExerciseId('Barbell Row'), order: 2, targetSets: 4, targetReps: 8, suggestedWeight: 145 },
    { exerciseId: getExerciseId('Dumbbell Shoulder Press'), order: 3, targetSets: 3, targetReps: 10, suggestedWeight: 60 },
    { exerciseId: getExerciseId('Pull-ups'), order: 4, targetSets: 3, targetReps: 10, suggestedWeight: 0 },
    { exerciseId: getExerciseId('Cable Fly'), order: 5, targetSets: 3, targetReps: 12, suggestedWeight: 40 },
    { exerciseId: getExerciseId('Hammer Curls'), order: 6, targetSets: 3, targetReps: 12, suggestedWeight: 35 },
  ];

  // Upper/Lower - Lower Day exercises
  const lowerExercises = [
    { exerciseId: getExerciseId('Squat'), order: 1, targetSets: 4, targetReps: 8, suggestedWeight: 255 },
    { exerciseId: getExerciseId('Romanian Deadlift'), order: 2, targetSets: 3, targetReps: 10, suggestedWeight: 205 },
    { exerciseId: getExerciseId('Leg Press'), order: 3, targetSets: 3, targetReps: 12, suggestedWeight: 450 },
    { exerciseId: getExerciseId('Leg Curl'), order: 4, targetSets: 3, targetReps: 12, suggestedWeight: 80 },
    { exerciseId: getExerciseId('Bulgarian Split Squat'), order: 5, targetSets: 3, targetReps: 12, suggestedWeight: 40 },
    { exerciseId: getExerciseId('Calf Raises'), order: 6, targetSets: 4, targetReps: 15, suggestedWeight: 180 },
  ];

  // Full Body - Workout A exercises
  const fullBodyAExercises = [
    { exerciseId: getExerciseId('Squat'), order: 1, targetSets: 3, targetReps: 8, suggestedWeight: 225 },
    { exerciseId: getExerciseId('Bench Press'), order: 2, targetSets: 3, targetReps: 8, suggestedWeight: 165 },
    { exerciseId: getExerciseId('Barbell Row'), order: 3, targetSets: 3, targetReps: 10, suggestedWeight: 135 },
    { exerciseId: getExerciseId('Overhead Press'), order: 4, targetSets: 3, targetReps: 10, suggestedWeight: 95 },
    { exerciseId: getExerciseId('Romanian Deadlift'), order: 5, targetSets: 3, targetReps: 10, suggestedWeight: 185 },
  ];

  // Insert all routine exercises
  // Note: In a real app, we'd have different exercise sets for each workout day
  // For now, we'll just add the Push day exercises to PPL routine
  for (const exercise of pplPushExercises) {
    await db.insert(routineExercises).values({
      routineId: pplRoutine.id,
      ...exercise,
    });
  }

  for (const exercise of upperExercises) {
    await db.insert(routineExercises).values({
      routineId: upperLowerRoutine.id,
      ...exercise,
    });
  }

  for (const exercise of fullBodyAExercises) {
    await db.insert(routineExercises).values({
      routineId: fullBodyRoutine.id,
      ...exercise,
    });
  }

  // 4. Create realistic workout history with proper names
  console.log('🗓️ Creating workout history...');
  const today = new Date();
  
  // Create a pattern of workouts for the past 30 days
  const workoutPattern = [
    { name: 'Push Day', routineId: pplRoutine.id, exercises: pplPushExercises },
    { name: 'Pull Day', routineId: pplRoutine.id, exercises: pplPullExercises.slice(0, 3) },
    { name: 'Leg Day', routineId: pplRoutine.id, exercises: pplLegExercises.slice(0, 3) },
    { name: 'Push Day', routineId: pplRoutine.id, exercises: pplPushExercises },
    { name: 'Pull Day', routineId: pplRoutine.id, exercises: pplPullExercises.slice(0, 3) },
    { name: 'Leg Day', routineId: pplRoutine.id, exercises: pplLegExercises.slice(0, 3) },
    null, // Rest day
    { name: 'Upper Power', routineId: upperLowerRoutine.id, exercises: upperExercises.slice(0, 4) },
    { name: 'Lower Power', routineId: upperLowerRoutine.id, exercises: lowerExercises.slice(0, 4) },
    null, // Rest day
    { name: 'Upper Hypertrophy', routineId: upperLowerRoutine.id, exercises: upperExercises.slice(0, 4) },
    { name: 'Lower Hypertrophy', routineId: upperLowerRoutine.id, exercises: lowerExercises.slice(0, 4) },
    null, // Rest day
    null, // Rest day
    { name: 'Full Body A', routineId: fullBodyRoutine.id, exercises: fullBodyAExercises },
    null, // Rest day
    { name: 'Full Body B', routineId: fullBodyRoutine.id, exercises: fullBodyAExercises },
    null, // Rest day
    { name: 'Full Body C', routineId: fullBodyRoutine.id, exercises: fullBodyAExercises },
    null, // Rest day
  ];

  let workoutIndex = 0;
  for (let i = 29; i >= 0; i--) {
    const workoutDate = new Date(today);
    workoutDate.setDate(today.getDate() - i);
    
    const workoutTemplate = workoutPattern[workoutIndex % workoutPattern.length];
    workoutIndex++;
    
    if (workoutTemplate) {
      const [workout] = await db
        .insert(workouts)
        .values({
          name: workoutTemplate.name,
          routineId: workoutTemplate.routineId,
          date: workoutDate,
          notes: i === 7 ? 'New PR on bench!' : i === 14 ? 'Felt strong today!' : null,
          completed: i > 0, // All past workouts are completed, today's isn't
        })
        .returning();

      // Add sets for exercises (only if completed)
      if (i > 0) {
        for (const exerciseData of workoutTemplate.exercises) {
          const baseWeight = exerciseData.suggestedWeight!;
          const progressionWeeks = Math.floor((30 - i) / 7);
          const currentWeight = baseWeight + progressionWeeks * 5; // Progressive overload

          for (let setNum = 1; setNum <= exerciseData.targetSets; setNum++) {
            const reps = exerciseData.targetReps - (setNum === exerciseData.targetSets ? 1 : 0); // Last set slightly fewer reps

            await db.insert(sets).values({
              workoutId: workout.id,
              exerciseId: exerciseData.exerciseId,
              setNumber: setNum,
              weight: currentWeight,
              reps: reps,
              setType: 'working',
              rpe: setNum === exerciseData.targetSets ? 8 : 7, // Last set harder
            });
          }
        }
      }
    }
  }

  // Create today's scheduled workout (not completed yet)
  const [todaysWorkout] = await db
    .insert(workouts)
    .values({
      name: 'Push Day',
      routineId: pplRoutine.id,
      date: today,
      completed: false,
    })
    .returning();

  console.log('✅ Database seeded successfully!');
  console.log(
    `📊 Created: ${insertedExercises.length} exercises, 3 routines, 20+ workouts with realistic progression`,
  );
}

// Run the seed
seed().catch(console.error);
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

  // 1. Seed Exercises
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
    { name: 'Calf Raises', muscleGroups: 'Calves', category: 'isolation' },

    // Shoulders
    {
      name: 'Overhead Press',
      muscleGroups: 'Shoulders, Triceps',
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

    // Arms
    { name: 'Barbell Curl', muscleGroups: 'Biceps', category: 'isolation' },
    {
      name: 'Close Grip Bench Press',
      muscleGroups: 'Triceps, Chest',
      category: 'compound',
    },
    {
      name: 'Hammer Curls',
      muscleGroups: 'Biceps, Forearms',
      category: 'isolation',
    },
  ];

  const insertedExercises = await db
    .insert(exercises)
    .values(exerciseData)
    .returning();
  console.log(`✅ Created ${insertedExercises.length} exercises`);

  // 2. Create Push/Pull/Legs Routine
  console.log('📋 Creating routines...');
  const [pplRoutine] = await db
    .insert(routines)
    .values({
      name: 'Push/Pull/Legs',
      description: '6-day split focusing on movement patterns',
    })
    .returning();

  // 3. Add exercises to Push Day
  const pushExercises = [
    {
      exerciseId: 1,
      order: 1,
      targetSets: 3,
      targetReps: 8,
      suggestedWeight: 185,
    }, // Bench Press
    {
      exerciseId: 2,
      order: 2,
      targetSets: 3,
      targetReps: 10,
      suggestedWeight: 70,
    }, // Incline DB Press
    {
      exerciseId: 3,
      order: 3,
      targetSets: 3,
      targetReps: 8,
      suggestedWeight: 45,
    }, // Weighted Dips
    {
      exerciseId: 4,
      order: 4,
      targetSets: 3,
      targetReps: 12,
      suggestedWeight: 40,
    }, // Cable Fly
    {
      exerciseId: 13,
      order: 5,
      targetSets: 3,
      targetReps: 10,
      suggestedWeight: 95,
    }, // Overhead Press
    {
      exerciseId: 14,
      order: 6,
      targetSets: 3,
      targetReps: 15,
      suggestedWeight: 20,
    }, // Lateral Raises
  ];

  for (const exercise of pushExercises) {
    await db.insert(routineExercises).values({
      routineId: pplRoutine.id,
      ...exercise,
    });
  }

  // 4. Create 30 days of workout history
  console.log('🗓️ Creating workout history...');
  const today = new Date();

  for (let i = 0; i < 30; i++) {
    const workoutDate = new Date(today);
    workoutDate.setDate(today.getDate() - i);

    // Create workout every 2-3 days
    if (i % 2 === 0 || i % 3 === 0) {
      const [workout] = await db
        .insert(workouts)
        .values({
          routineId: pplRoutine.id,
          date: workoutDate,
          notes:
            i === 0
              ? 'Felt strong today!'
              : i === 7
                ? 'New PR on bench!'
                : null,
          completed: true,
        })
        .returning();

      // Add sets for first 3 exercises
      for (let exerciseIdx = 0; exerciseIdx < 3; exerciseIdx++) {
        const baseWeight = pushExercises[exerciseIdx].suggestedWeight!;
        const progressionWeeks = Math.floor(i / 7);
        const currentWeight = baseWeight + progressionWeeks * 5; // +5lbs per week

        for (let setNum = 1; setNum <= 3; setNum++) {
          const reps =
            pushExercises[exerciseIdx].targetReps -
            Math.floor(Math.random() * 2); // Slight variation

          await db.insert(sets).values({
            workoutId: workout.id,
            exerciseId: pushExercises[exerciseIdx].exerciseId,
            setNumber: setNum,
            weight: currentWeight,
            reps: reps,
            setType: 'working',
            rpe: 7 + Math.floor(Math.random() * 2), // RPE 7-8
          });
        }
      }
    }
  }

  console.log('✅ Database seeded successfully!');
  console.log(
    `📊 Created: ${insertedExercises.length} exercises, 1 routine, ~15 workouts with sets`,
  );
}

// Run the seed
seed().catch(console.error);

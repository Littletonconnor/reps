import { db, routineExercises, workouts, sets } from './index';
import { eq, desc, count, and } from 'drizzle-orm';

export async function getTodaysWorkout() {
  const nextWorkout = await db.query.workouts.findFirst({
    where: eq(workouts.completed, false),
    with: {
      routine: {
        with: {
          routineExercises: {
            with: {
              exercise: true,
            },
            orderBy: (routineExercises, { asc }) => [
              asc(routineExercises.order),
            ],
          },
        },
      },
    },
    orderBy: [workouts.date], // Get the earliest scheduled one
  });

  return nextWorkout;
}

export async function getRoutines() {
  const allRoutines = await db.query.routines.findMany({
    with: {
      routineExercises: {
        with: {
          exercise: true,
        },
      },
    },
  });

  return allRoutines.map((routine) => ({
    ...routine,
    exerciseCount: routine.routineExercises.length,
    exercises: routine.routineExercises.map((re) => re.exercise),
  }));
}

export async function getWorkoutHistory(limit = 10) {
  const workoutHistory = await db.query.workouts.findMany({
    limit,
    orderBy: [desc(workouts.date)],
    with: {
      routine: true,
      sets: {
        with: {
          exercise: true,
        },
      },
    },
  });

  return workoutHistory.map((workout) => {
    return {
      ...workout,
      totalVolume: workout.sets.reduce(
        (sum, set) => sum + set.weight * set.reps,
        0,
      ),
      exerciseCount: new Set(workout.sets.map((set) => set.exerciseId)).size,
      setCount: workout.sets.length,
    };
  });
}

export async function getWorkoutStats() {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const oneMonthAgo = new Date();
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);

  const thisWeeksWorkouts = await db
    .select({ count: count() })
    .from(workouts)
    .where(and(eq(workouts.completed, true)));
  const totalWorkouts = await db
    .select({ count: count() })
    .from(workouts)
    .where(eq(workouts.completed, true));

  return {
    thisWeek: thisWeeksWorkouts[0]?.count || 0,
    total: totalWorkouts[0]?.count || 0,
    streak: 7,
  };
}

export async function getExercisesByRoutine(routineId: number) {
  const exercises = await db.query.routineExercises.findMany({
    where: eq(routineExercises.routineId, routineId),
    with: {
      exercise: true,
    },
    orderBy: (routineExercises, { asc }) => [asc(routineExercises.order)],
  });

  return exercises;
}

export async function getLastExercisePerformance(exerciseId: number) {
  const lastWorkout = await db.query.workouts.findFirst({
    orderBy: [desc(workouts.date)],
    with: {
      sets: {
        where: eq(sets.exerciseId, exerciseId),
        orderBy: (sets, { asc }) => [asc(sets.setNumber)],
      },
    },
  });

  return lastWorkout?.sets || [];
}

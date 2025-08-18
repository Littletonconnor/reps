import { getWorkoutHistory, getWorkoutStats } from '@/lib/db/queries';

export default async function History() {
  const workoutHistory = await getWorkoutHistory(20);
  const stats = await getWorkoutStats();

  return (
    <>
      <div className="px-5 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold uppercase">Workout History</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-8 bg-gray-900 rounded-xl p-5">
          <div className="text-center">
            <p className="uppercase text-xs text-gray-500 mb-1">This Week</p>
            <p className="text-2xl font-bold">{stats.thisWeek}</p>
            <p className="text-xs text-gray-500">workouts</p>
          </div>
          <div className="text-center">
            <p className="uppercase text-xs text-gray-500 mb-1">Streak</p>
            <p className="text-2xl font-bold">{stats.streak}</p>
            <p className="text-xs text-gray-500">days</p>
          </div>
          <div className="text-center">
            <p className="uppercase text-xs text-gray-500 mb-1">Total</p>
            <p className="text-2xl font-bold">{stats.total}</p>
            <p className="text-xs text-gray-500">workouts</p>
          </div>
        </div>

        <div className="space-y-3">
          {workoutHistory.map((workout) => {
            const workoutDate = new Date(workout.date);
            const isToday =
              new Date().toISOString() === workoutDate.toDateString();
            const dateStr = isToday
              ? 'TODAY'
              : workoutDate
                  .toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })
                  .toUpperCase();

            const hasPr = Math.random() > 0.7;
            const prCount = hasPr ? Math.floor(Math.random() * 3) + 1 : 0;
            return (
              <div
                key={workout.id}
                className="bg-gray-900 rounded-xl p-4 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold mb-1">
                      {dateStr}
                    </p>
                    <h3 className="text-lg font-semibold">
                      {workout.routine?.name || 'Custom Workout'}
                    </h3>
                    {prCount > 0 ? (
                      <span className="px-2 py-1 bg-orange-600 bg-opacity-20 rounded-md text-xs font-semibold">
                        {prCount} PR{prCount > 1 ? 's' : ''}
                      </span>
                    ) : null}
                  </div>

                  <div className="flex gap-4 text-sm text-gray-400">
                    <span>{workout.exerciseCount} exercises</span>
                    <span>•</span>
                    <span>{workout.totalVolume.toLocaleString()} lbs</span>
                    {workout.notes && (
                      <>
                        <span>•</span>
                        <span className="text-blue-500">📝</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-20" />
    </>
  );
}

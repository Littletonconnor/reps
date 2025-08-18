import { getRoutines } from '@/lib/db/queries';

export default async function Routines() {
  const routines = await getRoutines();
  const mockRoutines = [
    {
      name: 'Push/Pull/Legs',
      exerciseCount: routines[0]?.exerciseCount || 6,
      description: '6-day split focusing on movement patterns',
      week: '3 of 8',
      next: 'Pull Day',
      color: 'bg-blue-600',
      borderColor: 'border-blue-600',
      textColor: 'text-blue-600',
    },
    {
      name: 'Upper/Lower Split',
      exerciseCount: 4,
      description: '4-day split for intermediate lifters',
      week: '1 of 4',
      next: 'Upper Power',
      color: 'bg-green-600',
      borderColor: 'border-green-600',
      textColor: 'text-green-600',
    },
    {
      name: '5/3/1 BBB',
      exerciseCount: 5,
      description: 'Strength-focused program',
      week: '2 of 3',
      next: 'Deadlift Day',
      color: 'bg-orange-600',
      borderColor: 'border-orange-600',
      textColor: 'text-orange-600',
    },
  ];

  return (
    <div className="px-5 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold uppercase">My Routines</h1>
      </div>
      <div className="space-y-4">
        {mockRoutines.map((routine, index) => {
          return (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-5 border-l-4 hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">{routine.name}</h3>
                <span className="px-2 py-1 rounded-md text-xs font-semibold bg-opacity-20">
                  Week {routine.week}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                {routine.exerciseCount} exercises per week
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

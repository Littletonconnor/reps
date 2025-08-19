import { getTodaysWorkout } from '@/lib/db/queries';

function formatDate(date: Date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
}

export default async function Dashboard() {
  const workout = await getTodaysWorkout();
  const today = new Date();

  return (
    <div className="">
      <div className="grid grid-cols-1 p-6">
        <span className="text-xs text-gray-400">{formatDate(today)}</span>
        <h1 className="text-4xl font-bold text-white">
          {workout?.name?.toUpperCase() || 'NO WORKOUT SCHEDULED'}
        </h1>
      </div>
      <div className="w-full h-px bg-gray-800" />
      <div className="p-3">
        <article className="rounded-lg bg-gray-800 py-4 px-3">
          Today&apos;s Workout
        </article>
      </div>
    </div>
  );
}

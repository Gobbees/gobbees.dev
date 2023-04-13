export function PageTitle({ text }) {
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {text}
    </h1>
  );
}

export function PageSubtitle({ text }) {
  return <h3 className="text-lg text-gray-500 md:text-xl">{text}</h3>;
}

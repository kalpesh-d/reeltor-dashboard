const Badges = ({ title }) => {
  return (
    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-primary text-white bg-white/20 backdrop-blur-md">
      {title}
    </div>
  );
};

export default Badges;

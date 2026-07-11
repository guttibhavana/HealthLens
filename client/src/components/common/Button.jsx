function Button({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <button
  type={type}
  onClick={onClick}
  disabled={disabled}
  className={`w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:from-cyan-600 hover:to-blue-700 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
>
  {children}
</button>
  );
}

export default Button;
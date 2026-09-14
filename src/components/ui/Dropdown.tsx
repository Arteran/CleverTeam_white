import { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = 'Оберіть...',
  error = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const borderColorClass = error ? 'border-[#E53935]' : isFocused ? 'border-[#7CB342]' : 'border-[#CCCCCC]';

  return (
    <div className="relative w-full text-[14px]" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => { setIsOpen(!isOpen); setIsFocused(true); }}
        className={`w-full flex items-center justify-between bg-[#FFFFFF] border rounded-[4px] px-[14px] py-[10px] text-left cursor-pointer outline-none transition-[border-color,background-color,transform] duration-150 ease-emil active:scale-[0.98] font-inherit text-[14px] ${borderColorClass} ${selectedOption ? 'text-[#1A1A1A]' : 'text-[#888888]'}`}
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-[16px] h-[16px] shrink-0 transition-transform duration-150 ease-emil ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-[100] w-full mt-[4px] bg-[#FFFFFF] border border-[#CCCCCC] rounded-[4px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] max-h-[220px] overflow-y-auto origin-top transition-[opacity,transform] duration-150 ease-emil starting:opacity-0 starting:scale-95">
          {options.map((opt) => {
            const isSelected = value === opt.value;
            return (
              <div
                key={opt.value}
                onClick={() => { onChange(opt.value); setIsOpen(false); }}
                className={`px-[14px] py-[10px] cursor-pointer text-[14px] transition-colors duration-150 ease-emil ${isSelected ? 'bg-[#F1F8E9] text-[#558B2F] font-[600]' : 'bg-transparent text-[#1A1A1A] font-[400] hover:bg-[#F5F5F5]'}`}
              >
                {opt.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

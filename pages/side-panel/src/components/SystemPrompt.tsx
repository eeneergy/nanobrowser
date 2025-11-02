import { t } from '@extension/i18n';

interface SystemPromptProps {
  value: string;
  onChange: (value: string) => void;
  isDarkMode?: boolean;
}

export default function SystemPrompt({ value, onChange, isDarkMode = false }: SystemPromptProps) {
  return (
    <div className={`border-b p-2 ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={3}
        className={`w-full resize-none rounded-md border p-2 focus:outline-none ${
          isDarkMode
            ? 'border-slate-600 bg-slate-800 text-gray-200 focus:border-sky-500'
            : 'border-gray-300 bg-white text-gray-800 focus:border-sky-500'
        }`}
        placeholder={t('chat_system_prompt_placeholder')}
        aria-label={t('chat_system_prompt_placeholder')}
      />
    </div>
  );
}

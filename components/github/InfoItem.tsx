import { VNode } from "https://esm.sh/v95/preact@10.11.0/src/index.d.ts";

interface InfoItemProps {
  icon: VNode;
  text: string;
  link?: string;
}
export default function InfoItem({ text, icon, link = "" }: InfoItemProps) {
  return (
    <div class="flex items-center space-x-2">
      {icon}
      {link ? (
        <a
          href={link}
          target="_blank"
          class="text-gray-700 hover:text-blue-500 hover:underline"
        >
          {text}
        </a>
      ) : (
        <p class="text-gray-700">{text}</p>
      )}
    </div>
  );
}

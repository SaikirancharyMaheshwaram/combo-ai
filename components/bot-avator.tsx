import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
export const BotAvator = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={"/logo.png"} />
      <AvatarFallback>AI</AvatarFallback>
    </Avatar>
  );
};
